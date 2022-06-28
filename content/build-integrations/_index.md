---
title: Quickstart
pcx-content-type: tutorial
layout: single
weight: 1
meta:
  title: Build Integrations
---

# Build Integrations

There are 3 types of integrations available in Squadcast.

### [Alert Sources](./alert-sources/)

We integrate with various monitoring, observability, log management & error tracking tools and we call them as Alert sources. 

All these alert sources uses webhooks as the core mechanism to send data to Squadcast and you can refer the [Build Alertsources](./alert-sources/) section for more details about building this type of integrations.

### [Webhook connectors](/webhook-connectors/)

Webhook connectors are proxy scripts which receives data from [Squadcast outgoing webhooks](/outgoing-webhooks/) and transforms the payload to the required format of the 3rd party system which we are integrating with.

For more information about creating webhook connectors, please refer the [Webhook connector documentation](/webhook-connectors/).

### Extensions

Extensions are advanced type of integration which are built-in within Squadcast to perform various actions based on the extension type.

**Currently available extensions**

#### ChatOps
  - [Slack](https://support.squadcast.com/docs/slack)
  - [Microsoft Teams](https://support.squadcast.com/docs/msteams)
  - [Google Hangouts](https://support.squadcast.com/docs/hangouts)
#### Ticketing
  - [Jira Server](https://support.squadcast.com/docs/jira-server-on-premise)
  - [Jira Cloud](https://support.squadcast.com/docs/jira-cloud)
#### CI/CD
  - [CircleCI](https://support.squadcast.com/docs/circleci-integration)

  If you would like to build an extension, please [contact us](mailto:support@squadcast.com).