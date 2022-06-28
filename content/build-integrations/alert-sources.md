---
title: Build Alert Sources
pcx-content-type: navigation
layout: single
weight: 3
meta:
  title: Build Alert Sources
---

# Build Alert Sources

Squadcast supports over 100+ integrations with a range of observability tools in the market today as alert sources. 

Squadcast now offers a platform for its users to build their integrations with the tools of their choice and route alerts into the platform via Webhooks. 

Through this platform, users can easily build integrations, document it and contribute to help the other users of our growing community. 

Integrations are built using Webhooks. These integrations can support both triggering and automatic resolution of alerts in Squadcast when the alerts in the observability tool get resolved and send signals via the configured Webhooks. 

Users can build an integration in one of the two ways. The first option is an easy UI-based drop-down approach to build simple, straightforward integrations. The second option allows users to write YAML files with Markdown, defining the behaviour of the integration using the Workbench. The Workbench is a simulator of how the integration would work within Squadcast. As the user writes the YAML file and enters the inputs, the output for it can be viewed, thus making it a conducive environment for developing detailed, fine-grained integrations. This feature will be available shortly.

While we encourage users to build custom integrations for the observability tools of their choice based on their requirement, if the observability tool for which users are looking to build an integration supports customisable payload structures, we recommend users to simply use our Incident API Webhook to route events directly into Squadcast. If the observability tool for which users are looking to build an integration does not support Webhooks, users can make use of our Email integration to route events into Squadcast.

Github - https://github.com/SquadcastHub/Alert-Source-Integration

## Folder Structure

For every alert source integration that is built , there needs to be a branch for it by it’s name. This branch will contain folders with information as indicated below:

### Manifest
This folder will contain the YAML file (formatted using Markdown) with the logic for the alert source integration to work.

**Naming convention:** `<alert-source-name>-manifest.yaml`

### Payloads
This folder will contain the JSON files that have the payloads sent from the observability platform. The alert source integration can have 1 or more of the following:
Trigger payload(s)
Resolve payload(s)
Test payload(s)

**Naming convention:** `<trigger/resolve/test>-payload.json`

### Docs
This folder will contain a Markdown file containing the steps to configure the alert source integration. This will be used as the documentation guide for other users to configure the alert source integration. The file will contain two sections:
Steps that need to be performed by a user in Squadcast
Steps that need to be performed by a user in the observability platform

Naming convention: `<alert-source-name>-docs.md`

### Images
This folder will contain images that need to be added into the documentation to help a user visualise the process of configuring an alert source integration with ease. This could also include logos of the tool, etc.

### Author
- Partnership: If the tool themself is building the integration with us
- Squadcast: When Squadcast builds the integration with the tool
- Community: Anyone else voluntarily building the integration between Squadcast and the tool

**Naming convention:** `<alert-source-name>-integration-author.json`

## How To
#explaining the internals of writing manifest and templating functions and addition of payloads

### General Process:
1. Capture the payloads being sent for different events from the observability tool by setting up Webhooks in sites like [webhook.site](https://webhook.site)
2. Add the payloads in JSON to the `Payloads` folder in the branch. Payloads should contain valid JSON content. Validation can be performed by using sites like [JSONLint](https://jsonlint.com). This folder would contain one or more of the following:
  - Trigger payload(s) - Payloads that create/trigger an incident in Squadcast to alert/notify users
  - Resolve payload(s) - Payloads that resolve an existing incident in Squadcast when the corresponding event in the observability tool is resolved. The presence/absence of such a payload determines if the integration being built would support auto-resolution of incidents in Squadcast or not
  - Test payload(s) - Payloads for test events sent by the observability tool. Some tools support this by having a “Test” option, whereas some do not. If the tool supports it, then this payload needs to be present
3. Start developing the code for the integration that would be contained in the “Manifest” as a YAML file

Use the content available in the below for additional information on how to build integrations using template functions, etc.:
  - https://github.com/SquadcastHub/ingester/blob/master/docs/manifests.md
  - https://github.com/SquadcastHub/ingester/blob/master/docs/template_functions.md
  
4. Document the integration. For this:
  - Follow the pattern used for existing integration documentation. The structure is as follows:
    - Steps that need to be performed by a user in Squadcast
    - Steps that need to be performed by a user in the observability platform
  - Screenshots need to be captured for steps where applicable and added to the right folder
  - A  link to the official website of the observability tool also needs to be provided
5. Create a PR and mark the options as applicable in the checklist to make the review process easier and quicker
6. The team at Squadcast will review the PR and contact the contributor in case of further queries and work towards getting the integration into the platform as quickly as possible and make it functional for consumption
