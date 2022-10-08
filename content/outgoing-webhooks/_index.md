---
title: Outgoing Webhooks
pcx-content-type: overview
layout: single
weight: 0
meta:
  title: Outgoing webhooks
---

# Outgoing Webhooks

Webhooks allow you to connect a platform that you manage (either an API that you create by yourself, or a third party service) to a stream of future events.

Setting up a webhook on Squadcast enables you to receive information (referred to as events) from Squadcast as they happen. This can help you avoid continuously polling Squadcast’s REST APIs or manually checking the Squadcast web/mobile application for desired information.

The rest of this document will explain how you can set up these webhooks, as well as list the events that can be sent to your webhook destinations.

Make sure you have the pre-requisite permissions to set up outgoing webhooks.

## Supported Events

The webhook that you have configured can be triggered for certain events occurring in Squadcast. 

You can choose multiple triggers for a webhook. Information is sent to the provided URLs if any of the triggers match.

In the legacy version v1, only limited events are supported whereas the latest version v2, supports an exhaustive list of events.

For **v1 events**, [refer here](./payload/v1/).

For **v2 events**, [refer here](./payload/v2/).

If your use-case requires more Squadcast events to be supported, please reach out to our Support team with details of the same.

## Communication Protocol for Webhooks

A webhook is called whenever the configured events occur in Squadcast.

A webhook call is made using the HTTP POST method to the URL(s) that were added when the webhook was configured, with a body that is encoded using JSON.

Squadcast expects that the server that responds to the webhook will return a 2xx response code upon success. If a non-2xx response is received, Squadcast will retry the request for a maximum of 3 times.

## URLs and Headers

We support the addition of multiple URL endpoints, with POST, PUT and PATCH methods. 

Incident payloads will be sent to all the URL endpoints that are added. 
 
You can also configure additional headers. These headers will get attached to all the webhook calls that will be made based on this configuration.

## Filters
You can filter on top of events from the Services and Alert Sources drop-downs, either by having an individual expression or a combination of expressions/expression groups.

## Logs
Once the webhook call has been made, you can view the logs for it in the Logs tab.

Click on the expand icon on any of the individual logs to view the payload that has been sent across.

## Additional Settings
Configure the Name, Description and Failure Notification email in the Settings tab. This is particularly helpful when you (or an administrator) would want to be notified for webhook-related failures.


