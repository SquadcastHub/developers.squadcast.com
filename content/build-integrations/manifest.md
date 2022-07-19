---
title: How to write manifests?
pcx-content-type: navigation
layout: single
weight: 4
meta:
  title: How to write manifests?
---

# How to write manifests?

## Topic of Contents

 - [Manifest explained](#manifest-explained)
   * [Unwanted/Unused fields](#unwantedunused-fields)
     + [kind](#kind)
   * [Fields used only for UI use cases](#fields-used-only-for-ui-use-cases)
     + [type](#type)
     + [heading](#heading)
     + [supportDoc](#supportdoc)
     + [displayKeyOnly](#displaykeyonly)
   * [Fields used for deprecation notices in UI](#fields-used-for-deprecation-notices-in-ui)
     + [deprecated](#deprecated)
     + [deprecationMessage](#deprecationmessage)
   * [Fields actually used by `ingester` for processing](#fields-actually-used-by-ingester-for-processing)
     + [version](#version)
     + [isNative](#isnative)
     + [shortName](#shortname)
     + [isValid](#isvalid)
     + [isBatched](#isbatched)
     + [arraySelector](#arrayselector)
       - [How does the processing happen?](#how-does-the-processing-happen)
     + [eventIndicator](#eventindicator)
     + [message](#message)
     + [description](#description)
     + [isPrivate](#isprivate)
     + [hideAutomation](#hideautomation)
     + [metadata](#metadata)
     + [helperTemplates](#helpertemplates)
 - [Best practices for writing message and description templates](#best-practices-for-writing-message-and-description-templates)
   * [Incident Message](#incident-message)
   * [Incident Description](#incident-description)
 - [Further Reference](#further-reference)


## Manifest explained

**Example used** : [**Prometheus**](../manifests/prometheus/prometheus.yaml)

```yaml
kind: AlertSource
version: v1
isNative: false
type: Prometheus
shortName: prometheus
isValid: true
isBatched: true
arraySelector: "${$root.alerts}"
eventIndicator:
  key: "${.status}"
  events:
    firing:
      action: "trigger"
      eventID: "${.labels.alertname}-${.labels.severity}-${.startsAt}"
    resolved:
      action: "resolve"
      eventID: "${.labels.alertname}-${.labels.severity}-${.startsAt}"
message: "[${.labels.severity}] ${.labels.alertname}${if .annotations.summary} ${.annotations.summary}${end}"
description: |
    ${ range $key,$val := .annotations -}
    ${capitalize (unsnake $key)}: ${$val}
    ${end -}
    Labels
      ${ range $key,$val := .labels -}
      ${capitalize (unsnake $key)}: ${$val}
      ${end -}
    Generator URL: ${.generatorURL -}
heading: Prometheus Webhook URL
supportDoc: https://support.squadcast.com/docs/prometheus
displayKeyOnly: false
deprecated: false
deprecationMessage: ""
isPrivate: false
hideAutomation: false
```

### Unwanted/Unused fields

#### kind

`kind` field can be ignored. Inspired from kubernetes manifests, this serves no purpose as of now.

---

### Fields used only for UI use cases

#### type

`type` stores the name of the alert source used for display purposes in the UI.

---

#### heading

This contains the label to be shown in the UI beside the alert source integration details.

---

#### supportDoc

This contains the documentation URL for the alert source which helps users configure the specific alert source.

---

#### displayKeyOnly

For some alert sources only the service API key should be displayed. Right now only [**Sensu**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/sensu/manifest.yaml) 
(not to be confused with [**Sensu Go**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/sensu-go/manifest.yaml))
needs this field to be true. Use of this field is discouraged. When a external monitoring or alerting system requires
small scripts to be written to send alerts to Squadcast, always ask for webhook URL as the configuration and not an API Key.

---

### Fields used for deprecation notices in UI

#### deprecated

This field specifies if the specific alert source will be deprecated **soon**.

---

#### deprecationMessage

This field specifies the message to be displayed in the frontend if an alert source is marked as [`deprecated`](#deprecated).

---

### Fields actually used for processing

#### version

`version` stores the version of the alert source manifest definition. This was first introduces for the
[**APIv2**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/api/manifest.yaml) to replace the old **API v1** endpoint.

**Why?**:

The old **API v1** endpoint didn't make any sense: `https://api.squadcast.com/v1/incidents/create/API_KEY`.
We need to change the endpoint without the affecting the existing customers.
We just introduced a new endpoint called [**APIv2**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/api/manifest.yaml), where the endpoint was different and supported
resolution and tags from the payload.

If the new endpoint had been `/v1/incidents/api`, it would have raised doubts regarding what the difference was.
Almost all other alert sources will be `v1`. 

**Note about Zabbix**

In case of **Zabbix** we support two different versions and they are created as different alert sources.
 - [**Zabbix 4.x**](../manifests/zabbix-4/zabbix-4.yaml)
 - [**Zabbix 5.x**](../manifests/zabbix-5.0/zabbix-5.0.yaml)

---

#### isNative

`isNative` specifies if the alert source is a native alert source.
[**APIv2**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/api/manifest.yaml), [**SquadcastUI**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/squadcastui/manifest.yaml)
and the now deprecated **API v1** are classified as native (`isNative` - `true`).

For external alert sources this can be left as `false`.

---

#### shortName

`shortName` is the actual slug version of the alert source used in the webhook endpoints.

```
https://api.squadcast.com/v1/incidents/prometheus/API_KEY
                                       ^^^^^^^^^^
```

`shortName` is constructed by lowercasing all the letters of the alert source name and replacing
all the spaces with a `-`.

**Example**
 + [**Amazon Cloudwatch Event Rules**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch-event-rules/manifest.yaml) => `amazon-cloudwatch-event-rules`
 + [**Freshping**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/freshping/manifest.yaml) => `freshping`


> **NOTE**: Once an alert source is deployed, DO NOT change its shortName. shortName is used in constructing the webhook url. Any changes made would break the existing ones configured by customers. Incase if you have to, then make sure that the appropriate communication is done to the customer well in advance before deployment.

---

#### isValid

`isValid` field is a compatibility field for the old data records. But this is also useful when an
alert source is supposed to be deprecated.

---

#### isBatched

`isBatched` specifies whether an alert source sends batch of alerts in a single request/payload.
See [`arraySelector`](#arraySelector) for more.

---

#### arraySelector

`arraySelector` defines the field path in the payload through the template which has the data of all the 
alerts in case of batched alert sources. For example in [**Prometheus**](../manifests/prometheus/prometheus.yaml), the alerts field in the root of
the payload contains the details of all the batched alerts as JSON objects.

Right now only the following alert sources batches alerts.

 + [**Prometheus**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/prometheus/manifest.yaml)
 + [**Sqreen**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/sqreen/manifest.yaml)

##### How does the processing happen?

**Ingester** (our alert ingestion engine) processes for the all the templates (like `message`, `description` and `eventIndicator`)
for all the alerts described by the `arraySelector` field. When every alert is processed, fields inside
the specific alert's JSON can be accessed using `.` in the templates. If there is any field that is needed
to be accessed which is from the **root** of the payload, it can be accessed through `$root`.

Take this alert for example:

```json
{
	"alerts" : [
		{
			"metric":"cpu.rss",
			"value":70,
			"condition":"avg(host.cpu.rss{2m}) >= 50",
			"message":"RSS CPU usage of process is the above configured threshold"
		},
		{
			"metric":"iops",
			"value":240,
			"condition":"avg(host.iops{2m}) > 200",
			"message":"IOPS usage of system is above the configured threshold"
		}
	],
	"host":"mongo-sh*t-shard-01",
	"cluster":"main-prod-us-west-2",
	"timestamp":1606670617
}
```

This alert contains the 2 separate alerts for a single host.
 + One is regarding a metric called `cpu.rss`.
 + Another is regarding the metric called `iops`.

_Assume we have decided to process the alerts into seperate incidents*_

**Requirements**
 + Need to show the `message` field inside the each alert as incident message for all the alerts.
 + Need to show which `host` and the `cluster`, the alert is for and when it happened in the incident description.
 + Need to show other alert details as well in the description.

The template will be as follows:

**Incident Message** : `${.message}`

**Incident Description**

````markdown
**Host** : ${$root.host}
**Cluster** : ${$root.cluster}
**Timestamp** : ${$root.timestamp}
**Metric** : ${.metric}
**Current Metric Value** : ${.value}

**Condition**

```
${.condition}
```
````

> In the above templates you can see that the alert local (or specific) data can be accessed using a `.` like `${.metric}`.
> But the payload global data is accessed through `$root`.

For a simple pseudo code:

```python
for . in $root.alerts:
	# ...
	executeTemplate(eventIndicator)
	executeTemplate(message)
	executeTemplate(description)
	# ...
	createIncident()
```

---

#### eventIndicator

`eventIndicator` is a configuration object which helps ingester identify whether the incoming payload is
a **triggering** payload or a **resolving** payload.

```yaml
  key: "${.status}"
  events:
    firing:
      action: "trigger"
      eventID: "${.labels.alertname}-${.labels.severity}-${.startsAt}"
    resolved:
      action: "resolve"
      eventID: "${.labels.alertname}-${.labels.severity}-${.startsAt}"
```

`key` field is a template which defines which data should to be extracted from the payload. This data is checked
against the `events` map. This is also **alert local** in case of batched alerts. Take **prometheus** 
payload for example. Every alert in the `$root.alerts` array in the JSON payload has a `status` field.
The value of this field defines if that alert is a **triggering** or **resolving** signal. If the `status` field in an alert
is `firing` then this is taken as a **trigger** signal. If it is `resolved` then that alert is taken as a **resolve**.
signal.

> NOTE: Event indicator templates should always yield lowercase string. As it is very easy to confuse a `Resolve` with a `resolve` event in the `events` definition.
> Always convert the resulting string to a lower case using `toLower` template function.

`events` contains the mapping of payload `key` value and the signal it should be interpreted as.

`action` specifies what action to be taken when the evaluated `key` template matches a configuration in mapping.

There are 3 types of `action` as of now.

 + `trigger` - Triggers an incident in Squadcast.
 + `resolve` - Resolves an incident/incidents with the same `eventID`s.
 + `custom` - This is a No-op w.r.t. to Squadcast. But custom logic can be executed here depending on the alert source.
 
**Why `custom` action**

Refer to any alert source which utilizes Amazon SNS to send alert payloads or `Test` based payloads.

**SNS based alert sources**

AWS SNS is a service which specializes in data delivery to different types of destinations.
It requires a verification step while setting it up. The first time a AWS SNS Subscription
is created for a Topic, SNS sends a verification payload. This contains a verification URL
much like product sign-up email. A `GET` request to this URL should be made for the subscription to
activate and send alerts to Squadcast. In the [initial payload](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch/payload/cloudwatch_confirmation.json) the Subscription URL will
be in the, aptly named, field called `SubscribeURL`.

 + [**AWS CloudTrail via Cloudwatch**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudtrail-cloudwatch/manifest.yaml)
 + [**AWS Cloudwatch Event Rules**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch-event-rules/manifest.yaml)
 + [**AWS CloudWatch**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch/manifest.yaml)
 + [**AWS CloudTrail Logs via SNS**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudtrail-logs/manifest.yaml)

**Test based alert sources**

These alert sources send alerts with test signal. In those cases nothing is left to be done
from our end.

 + [**ManageEngine OpManager**](../manifests/opmanager/opmanager.yaml)
 + [**StatusCake**](../manifests/statuscake/statuscake.yaml)

`eventID` specifies the template with which a semi-unique event identifier is generated for a reference when a
alert is a **triggering** alert. Same key is evaluated when a resolve signal comes in and the incident with the
same event identifier is resolved.

**For example**:

Say an event with the following data.

```json
{
	"message" : "Some incident",
	"description" : "Some description",
	"event_id" : "23ehjdb8",
	"event_type" : "firing"
}
```

For the above payload, we will be creating an incident and associate an `eventID` from the field `event_id`. In this
case this will be `23ehjdb8`. (eventID will be defined in the manifest as `${$root.event_id}`).

Now when a new event comes in:

```json
{
	"event_id" : "23ehjdb8",
	"event_type" : "resolved"
}
```

We will evaluate the `eventID` template from the manifest for the resolving signal. Which will, again, be `${$root.event_id}`.
This basically specifies that the incident created with the `eventID` (`23ehjdb8`), will be resolved with an `auto resolved` signal.

This is also **alert local** if it is a batched alert source. So the `eventID` for a specific alert in the alerts array in the payload
should be addressed using a `.` like `${.event_id}`.

---

#### message

This specifies the template which `ingester` executes to form the incident message using the incoming payload.
This is also **alert local** if it is a batched alert source.

---

#### description

Much like `message`, this specifies the template used to form the description of the incident.
And same as `message` field, this is also **alert local** if it is a batched alert source.

---

#### isPrivate

This field defines if the specific alert source is a private alert source. This is made for alert sources
which should not be exposed to the users but to be used by other systems or internally.

**Examples**

 + [**Squadcast UI**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/squadcastui/manifest.yaml) - alerts created from Web frontend
 + [**Jira Server**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/jira-server/manifest.yaml) - alerts from Jira server plugin

---

#### hideAutomation

This field decides whether the alert source should be shown in the alert source selection dropdown present in all the automation rule modals in frontend.
Typically, this field replicates the value of `isPrivate` field with the only exception of the `slack` alert source because of its unique usecase.

---

#### metadata

This field is used purely for internal processing purposes. This field can be ignored.

#### helperTemplates

This field defines some sub templated which can be used inside the main templates to
reduce some code repetition.

**Example**

Say an alert source sends a priority as a number. Which is mapped to readable strings in the vendor's system. We need to show the right readable string instead of the number being sent.
Say if this priority is used in  multiple places in the templates defined in the manifest, the conversion `if else if` will be written everywhere.

```yaml
helperTemplates:
  priority: |
    ${- define "priority" -}
    ${- if eq . 3.0 -}
    High
    ${- else if eq . 2.0 -}
    Normal
    ${- else if eq . 1.0 -}
    Low
    ${- end -}
    ${- end -}
```

Now this newly defined template can be used in the [`message`](#message), [`description`](#description)
or even the [`eventID`](#eventindicator) to display the new string.
It can accessed inside the templates as following:

```yaml
message: [${template "priority" $root.priority}] ${root.message}
description: |
  **Priority**: ${template "priority" $root.priority}
  ...
```

If an alert source is using this additional helperTemplate, remember to check for the correctness of the 
template. Try to keep the template's logic as small as possible. Imagine using this template as a module
in a UI. For example, any complex logic that is written inside a template `loop` can be abstracted out
into a template, so that the template will be more readable and accessible. So to sum up, `helperTemplates`
are used to:

 - Reduce code/template repetition
 - Make the code/template more readable and accessible


---

## Best practices for writing message and description templates

_Very subjective guidelines ahead_

Get to know the alert source. Like what kind of alerts does it send and what can it be used for and etc.,
Put yourself in the shoes of the users and imagine what makes sense to you.

For example, for error tracking alert sources like [**Sentry**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/sentry/manifest.yaml) or [**Rollbar**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/rollbar/manifest.yaml)
it will make sense to display the error stack-trace if available. And most errors will be
from backend servers serving requests. So it will be of more info the display the
request details as well.

Another example: [**Grafana**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/grafana/manifest.yaml). Grafana is a data-viz tool. It will make sense to show the viz
at the time of the alert from Grafana if it can display it.

### Incident Message

 + Make the incident message short and concise. Truncating an incident message in an SMS is never a good idea as it doesn't
   provide full context to the users
 + Avoid unreadable text from incident message.
   Say there is an instance with an id `i-20o2h3jed9`. Neither the user know what that instance actually is
   (unless he has only one), nor does it provide any useful info about the alert.
   If it has a readable/rememberable hostname, then that will be of more fit in the incident message.
   _Imagine a Robotic female voice reading in-coherent letters._
 + Form full english sentences with the pieces of data we have. This might not be possible with all the alert sources
   as we might not know what kind of alerts it can send. A good example is [**AppSignal**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/appsignal/manifest.yaml)
   ```
   ${- if $root.exception -}
   Error: ${$root.exception.exception} on app ${$root.exception.site}
   ${- else if $root.performance -}
   Performance: Issue on app ${$root.performance.site}
   ${- else if $root.marker -}
   Deploy: ${$root.marker.site} has been deployed
   ${- end -}
   ```
   AppSignal sends different kinds of alerts like:
    - Error tracking alerts - Error: **TypeError** on app **Create React App**
	- Performance issue on the app - Performance: Issue on app **My test app**
	- Deployment signal - Deploy: **My test app** has been deployed
   Here the message is customized to show what has happened in a particular incoming alert.


### Incident Description

 + We support markdown. Go nuts. Really. Make info pop!
 + Too many list nestings will look bad. Avoid that. See **Amazon Cloudwatch Event Rules** for more.
 + Use code blocks in appropriate places. Like when to show a rule, script, stacktrace or log lines.
    - See the example defined above in the [`arraySelector`](#arraySelector) section
	- [**Azure Monitor**](../manifests/azuremonitor/azuremonitor.yaml) - Alert rule script
	- [**Datadog**](../manifests/datadog/datadog.yaml) - Alert rule script
	- [**Papertrail**](../manifests/papertrail/papertrail.yaml) - Log lines
	- [**AppSignal**](../manifests/appsignal/appsignal.yaml) - Stacktrace
	- [**Rollbar**](../manifests/rollbar/rollbar.yaml) - Stacktrace
 + Use Heading sections.
   When there is too much data that can be shown, feel free to use
   headings and sub headings. This segregates data which can be easily distinguished by the user.
   Add `<hr>` using a `---` when there is a section which has no heading after a section which has one.
    - [**Azure Monitor**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/azuremonitor/manifest.yaml) - Too big to explain
	- [**Check MK**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/checkmk/manifest.yaml) - Host section + Service section and a less focused notification section without a header.
	- [**Sentry**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/sentry/manifest.yaml)
	- [**Hetrixtools**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/hetrixtools/manifest.yaml) - Email/Domain blacklist notification : every domain/IP address has it's own header + section.
 + If the alert source sends an image URL associated with the alert, and not some company logo, user avatar or a favicon,
   the image should be displayed in the description in a appropriate section.
 + Use **all caps** for abbreviations and acronyms.
    - ~~Url~~ - URL
	- ~~Ip~~ - IP etc.,
 + Be really picky about what info is necessary and useful.
    - Avoid displaying timestamps. We show that in the incident details.
	  Why? We will print the timestamp in either epochs or UTC, which again users have to go through the 
	  pain of converting it to their tz. Not worth it.
	  If a timestamp field is about when the alert started (past time) then it'll make sense to show it.
	- Try these criteria for info
	   - Alert caused by?  - details about what caused the alert
	      - condition/threshold, current value which violates the condition if available
		  - request where an error happened
		  - occurrence of a specific search string in a log line
		  - An event in a server - OOM, system service is stopped, some vuln event, SSL certificate expiry etc.,
	   - Alert caused for? - details about either of host, service, node, machine, environment etc.,
	  This might be different for different classes of alert sources.
  + Links: Links are really important. The alert sources only sends a subset of information to us. In many cases the description
    is alone not enough to get the full context of the alert.
	 - Do not leave raw links in the description content. Try linking it to some understandable text.
	 - If an image is displayed, link that image markdown construct with a link markdown construct with the link of the image.
	   Sometimes the images will be a private server which can only be accessed from the customers VPN. In that case the image
	   will be displayed be blank or just the placeholder text used for the image. Linking the image will go to the fallback mode
	   to display a link which the users can click and view.
	 - If a link for an entity is available, (like link for a service, host info etc.,) link it with the entity details instead of 
	   having a separate line to display the link.
	   ```markdown
	   **Host**: [mongo](https://some.link.to/the/host/details)
	   ```
	   will be better than:
	   ```markdown
	   **Host**: mongo
	   **Link**: https://some.link.to/the/host/details
	   ```
	 - If the payload doesn't contain any links try to form links using a template that will lead to the relevant page in the vendor's platform.
	   Of-course, this is just a nice to have. 
  + Whatever markdown content is written please run it against a markdown viewer for a aesthetic review.
    - VS Code - Copy contents to a `new_file.md` and `⌘-K V`
	- Use [Dillinger](https://dillinger.io)
  + It is advised to "Go nuts". Please make sure the content is compatible with [commonmark](https://commonmark.org/).

## Further Reference

 - [Reference:Go Templates](https://golang.org/pkg/text/template/#pkg-overview)
