---
title: Webhook connectors
pcx-content-type: overview
layout: single
weight: 4
meta:
  title: Webhook Connectors
---

# Squadcast Webhook Connectors

Squadcast Webhook connector scripts acts as a proxy and transform the payload data to the payload format expected by the 3rd party system to which we need to connect with.

We have documented most commonly asked & used webhook connector scripts (or simply webhook connectors) for your use.

{{<Aside type="note">}}

**Note:** Currently, these connectors works only with the [v1 events and payloads](../payload/v1/), v2 events are not supported yet but you can make it work on your own with minor changes.

{{</Aside>}}


We have both Standalone node js scripts as well as scripts for Cloudflare workers.  

- [Nodejs scripts](./nodejs/)
- [Cloudflare worker scripts](./cloudflare-worker/)