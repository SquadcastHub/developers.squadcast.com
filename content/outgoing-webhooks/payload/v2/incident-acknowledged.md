---
title: Incident Acknowledged
pcx-content-type: tutorial
layout: single
weight: 3
meta:
  title: Incident Acknowledged v2 webhook payloads
---

# Incident Acknowledged (v2)

For v1, [click here](../../v1/incident-acknowledged/)

## Payload

```json
{
  "version": "v2",
  "event": {
    "id": "633e697dfbb04a577527b4b9",
    "type": "incident.acknowledged",
    "resource": "incident",
    "timestamp": "2022-10-06T05:37:01.388057811Z"
  },
  "data": {
    "resource_data": {
      "id": "633e670ae998089239c9f293",
      "message": "test incident",
      "description": "test",
      "url": "https://app.squadcast.com/incident/633e670ae998089239c9f293",
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
      "status": "acknowledged",
      "created_at": "2022-10-06T05:26:34.37Z",
      "assigned_to": {
        "id": "61963608090a650008fff152",
        "name": "Yash Jain",
        "type": "user",
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
        "description": "test",
        "message": "test incident",
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
          "time": "2022-10-06T05:26:34.256Z"
        },
        {
          "action": "acknowledged",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T05:37:01.339Z"
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