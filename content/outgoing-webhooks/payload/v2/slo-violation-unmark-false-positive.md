---
title: SLO Violation Unmark False Positive
pcx-content-type: tutorial
layout: single
weight: 7
meta:
  title: SLO Violation Unmark False Positive v2 webhook payloads
---

# SLO Violation Unmark False Positive (v2)

This event is not available in v1.

## Payload

```json
{
  "version": "v2",
  "event": {
    "id": "633e6ab3fbb04a577527b4bf",
    "type": "incident.slo_violating_incident_false_positive_unmarked",
    "resource": "slo_violating_incident",
    "timestamp": "2022-10-06T05:42:11.321267741Z"
  },
  "data": {
    "resource_data": {
      "id": "1030",
      "slo": {
        "id": "1540",
        "name": "slo"
      },
      "slis": [
        "availability"
      ],
      "is_false_positive": false,
      "error_budget_spent": 0
    },
    "resource_type": "slo_violating_incident",
    "organization": {
      "id": "61963631090a650008fff21d",
      "name": "sqdev"
    },
    "team": {
      "id": "6196371cda7b4ab764b13a1f",
      "name": "Yash"
    },
    "incident": {
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
      "request_id": "8ea5fc83-e4f0-4256-9fd3-bb2fd7a80a7d",
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
        },
        {
          "action": "slo_incident_promoted",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T05:39:42.826Z",
          "reason": "Yash Jain has promoted the incident to SLO Violating Incident"
        },
        {
          "action": "slo_false_positive_true",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T05:40:49.975Z",
          "reason": "Yash Jain has marked the SLO as false positive"
        },
        {
          "action": "slo_false_positive_false",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T05:42:11.29Z",
          "reason": "Yash Jain as marked the SLO as not a false positive"
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