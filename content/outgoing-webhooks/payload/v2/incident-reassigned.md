---
title: Incident Reassigned
pcx-content-type: tutorial
layout: single
weight: 2
meta:
  title: Incident Reassigned v2 webhook payloads
---

# Incident Reassigned (v2)

For v1, [click here](../../v1/incident-reassigned/)

## Payload

```json
{
  "version": "v2",
  "event": {
    "id": "633e69d3fbb04a577527b4bc",
    "type": "incident.reassigned",
    "resource": "incident",
    "timestamp": "2022-10-06T05:38:27.857754614Z"
  },
  "data": {
    "resource_data": {
      "id": "633e69cce9980815a9c9f2a3",
      "message": "incident reassign",
      "description": "",
      "url": "https://app.squadcast.com/incident/633e69cce9980815a9c9f2a3",
      "alert_source": {
        "id": "6077f7225fdc7075e371685f",
        "type": "Squadcast UI",
        "short_name": "squadcastui"
      },
      "service": {
        "id": "62f0fdde613c98528db9f8bc",
        "name": "Service Test2",
        "slug": "service-test2"
      },
      "status": "triggered",
      "created_at": "2022-10-06T05:38:20.198Z",
      "assigned_to": {
        "id": "61a461cfa06594e09eda4288",
        "name": "Yash",
        "type": "squad",
        "assigned_at": "0001-01-01T00:00:00Z"
      },
      "tags": null,
      "event_payload": {
        "assignee": {
          "id": "629e23f5eb4041a20a43b11c",
          "type": "escalationpolicy"
        },
        "attachments": [],
        "created_by": "61963608090a650008fff152",
        "description": "",
        "message": "incident reassign",
        "tags": {
          "": {
            "color": "#0C93E3",
            "value": ""
          }
        }
      },
      "timeline": [
        {
          "action": "triggered",
          "assigned_to": "escalationpolicy",
          "name": "test",
          "time": "2022-10-06T05:38:20.171Z"
        },
        {
          "action": "reassigned",
          "assigned_to": "squad",
          "name": "Yash",
          "time": "2022-10-06T05:38:27.729Z"
        }
      ],
      "event_count": 1,
      "owner": {
        "id": "6196371cda7b4ab764b13a1f",
        "name": "Yash",
        "type": "team"
      },
      "manually_created_by": {
        "id": "61963608090a650008fff152",
        "name": "Yash Jain",
        "email": "yash@squadcast.com"
      }
    },
    "resource_type": "incident",
    "organization": {
      "id": "61963631090a650008fff21d",
      "name": "sqdev"
    },
    "team": {
      "id": "6196371cda7b4ab764b13a1f",
      "name": "Yash"
    }
  }
}
```
