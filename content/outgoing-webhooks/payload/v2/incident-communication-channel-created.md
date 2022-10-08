---
title: Incident Communication Channel Created
pcx-content-type: tutorial
layout: single
weight: 20
meta:
  title: Incident Communication Channel Created v2 webhook payloads
---

# Incident Communication Channel Created (v2)

This event is not available in v1.

## Payload

```json
{
  "version": "v2",
  "event": {
    "id": "633eab6cfbb04a577527b4d1",
    "type": "incident.communication_channel_created",
    "resource": "communication_channel",
    "timestamp": "2022-10-06T10:18:20.636856327Z"
  },
  "data": {
    "resource_data": {
      "id": "22",
      "url": "https://example.com",
      "type": "other",
      "title": "example",
      "channel_id": "",
      "archived_at": null
    },
    "resource_type": "communication_channel",
    "organization": {
      "id": "61963631090a650008fff21d",
      "name": "sqdev"
    },
    "team": {
      "id": "6196371cda7b4ab764b13a1f",
      "name": "Yash"
    },
    "incident": {
      "id": "633ea656e998088559c9f2f1",
      "message": "test incident whatever",
      "description": "",
      "url": "https://app.squadcast.com/incident/633ea656e998088559c9f2f1",
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
      "request_id": "e1a8a3f9-a2aa-41e3-9af9-f7f22e6c7bea",
      "status": "triggered",
      "created_at": "2022-10-06T09:56:38.241Z",
      "assigned_to": {
        "id": "629e23f5eb4041a20a43b11c",
        "name": "test",
        "type": "escalationpolicy",
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
        "message": "test incident whatever",
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
          "time": "2022-10-06T09:56:38.169Z"
        },
        {
          "action": "communication_card_created",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T10:18:20.605Z",
          "reason": "Yash Jain attached a communication card named as example ",
          "additional_info": {
            "communication_card": {
              "archivedat": null,
              "baseschema": {
                "createdat": "2022-10-06T10:18:20.598Z",
                "deletedat": {
                  "time": "0001-01-01T00:00:00Z",
                  "valid": false
                },
                "updatedat": "2022-10-06T10:18:20.598Z"
              },
              "channelid": "",
              "id": 22,
              "mincidentid": "633ea656e998088559c9f2f1",
              "title": "example",
              "type": "other",
              "url": "https://example.com"
            },
            "communication_card_id": 22
          }
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
        "email": "yash@myorg.com"
      }
    }
  }
}
```