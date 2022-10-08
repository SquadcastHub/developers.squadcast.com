---
title: Incident Task Updated
pcx-content-type: tutorial
layout: single
weight: 16
meta:
  title: Incident Task Updated v2 webhook payloads
---

# Incident Task Updated (v2)

This event is not available in v1.

## Payload

```json
{
  "version": "v2",
  "event": {
    "id": "633e823afbb04a577527b4c9",
    "type": "incident.incident_task_updated",
    "resource": "incident_task",
    "timestamp": "2022-10-06T07:22:34.561662026Z"
  },
  "data": {
    "resource_data": {
      "id": "633e81f7488a9b8c053e04e4",
      "tasks": [
        {
          "content": "test task updated",
          "id": "633e81f7488a9b8c053e04e3",
          "completed": false,
          "completed_at": "0001-01-01T00:00:00Z"
        }
      ],
      "updated_task": {
        "content": "test task updated",
        "id": "633e81f7488a9b8c053e04e3",
        "completed": false,
        "completed_at": "0001-01-01T00:00:00Z"
      },
      "created_by": {
        "id": "61963608090a650008fff152",
        "email_id": "yash@squadcast.com",
        "name": "Yash Jain"
      },
      "deleted": false,
      "deleted_at": "0001-01-01T00:00:00Z"
    },
    "resource_type": "incident_task",
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
      "tags": {
        "severity": {
          "value": "critical",
          "color": "#0f61dd"
        }
      },
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
        },
        {
          "action": "update_slo_error_budget_spent",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:10:21.478Z",
          "reason": "Yash Jain has updated the SLO Error Budget from 0 to 7762"
        },
        {
          "action": "note_created",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:14:52.712Z",
          "reason": "Yash Jain created a note",
          "additional_info": {
            "note": "test note",
            "note_id": "633e806c488a9b8c053e04e1"
          }
        },
        {
          "action": "note_updated",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:16:02.829Z",
          "reason": "Yash Jain updated a note",
          "additional_info": {
            "note": "test note updated",
            "note_id": "633e806c488a9b8c053e04e1"
          }
        },
        {
          "action": "note_deleted",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:16:42.658Z",
          "reason": "Yash Jain deleted a note",
          "additional_info": {
            "note": "test note updated",
            "note_id": "633e806c488a9b8c053e04e1"
          }
        },
        {
          "action": "note_created",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:18:59.699Z",
          "reason": "Yash Jain created a note",
          "additional_info": {
            "note": "test note",
            "note_id": "633e8163488a9b8c053e04e2"
          }
        },
        {
          "action": "note_starred",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:19:03.501Z",
          "reason": "Yash Jain starred a note",
          "additional_info": {
            "note": "test note",
            "note_id": "633e8163488a9b8c053e04e2"
          }
        },
        {
          "action": "note_unstarred",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:19:38.815Z",
          "reason": "Yash Jain unstarred a note",
          "additional_info": {
            "note": "test note",
            "note_id": "633e8163488a9b8c053e04e2"
          }
        },
        {
          "action": "tags_modified",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:20:25.248Z",
          "reason": "Incident tags modified by Yash Jain",
          "additional_info": {
            "from": null,
            "to": {
              "severity": {
                "color": "#0f61dd",
                "value": "critical"
              }
            }
          }
        },
        {
          "action": "task_added",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:21:27.114Z",
          "reason": "Yash Jain added a new task",
          "additional_info": {
            "added_task": "test task",
            "content": "test task",
            "index": 0,
            "task_id": "633e81f7488a9b8c053e04e3",
            "tasks_id": "633e81f7488a9b8c053e04e4"
          }
        },
        {
          "action": "task_updated",
          "assigned_to": "user",
          "name": "Yash Jain",
          "time": "2022-10-06T07:22:34.525Z",
          "reason": "Yash Jain updated a task",
          "additional_info": {
            "content": "test task updated",
            "index": 0,
            "task_id": "633e81f7488a9b8c053e04e3",
            "tasks_id": "633e81f7488a9b8c053e04e4"
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