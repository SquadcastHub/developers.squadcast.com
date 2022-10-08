---
title: Incident Reassigned
pcx-content-type: tutorial
layout: single
weight: 2
meta:
  title: Incident Reassigned v1 webhook payloads
---

# Incident Reassigned (v1)

For v2, [click here](../../v2/incident-reassigned/)

## Payload

```json
{
  "id": "61c075f78589dca75fdb2f44",
  "event_type": "incident_reassigned",
  "organization": {
    "id": "609b8e9978d2770008db8638",
    "name": "My Org"
  },
  "service": {
    "id": "61518af788792704697f3da0",
    "name": "email trigger",
    "slug": "email-trigger"
  },
  "alert_source": {
    "id": "5fae6d03ef87d3896aa92ad1",
    "type": "Squadcast UI",
    "short_name": "squadcastui"
  },
  "message": "CPU Throttling: Over 90% of cpu is being utilized",
  "description": "Over 90% of cpu is being utilized from the past 2 hours which is a drastic increase from before. Please checkout the metrics.",
  "status": "triggered",
  "created_at": "2021-12-20T12:24:23.11Z",
  "assigned_to": {
    "id": "603360ce3aeae4de2b6edec1",
    "name": "Micheal Scott",
    "type": "user"
  },
  "tags": {
    "severity": {
      "value": "critical",
      "color": "#FF0A49"
    }
  },
  "timeline": [
    {
      "action": "triggered",
      "assigned_to": "escalationpolicy",
      "name": "SRE and Devops Escalation Policy",
      "time": "2021-12-20T12:24:23.077Z"
    },
    {
      "action": "reassigned",
      "assigned_to": "user",
      "name": "Micheal Scott",
      "time": "2021-12-21T04:59:18.173Z"
    }
  ],
  "analytics": {
    "tta": {
      "time": 11475,
      "user_id": "603360ce3aeae4de2b6edec1",
      "escalation_policy_id": "609b8e9e78d2770008db8639"
    }
  },
  "event_count": 1,
  "event_payload": {
    "assignee": {
      "id": "609b8e9e78d2770008db8639",
      "type": "escalationpolicy"
    },
    "created_by": "603360ce3aeae4de2b6edec1",
    "description": "Over 90% of cpu is being utilized from the past 2 hours which is a drastic increase from before. Please checkout the metrics.",
    "message": "CPU Throttling: Over 90% of cpu is being utilized",
    "tags": {
      "severity": {
        "color": "#FF0A49",
        "value": "critical"
      }
    }
  },
  "owner": {
    "id": "6129ac09518568defa927536",
    "name": "Default Team",
    "type": "team",
    "is_default_team": true,
    "team_description": "Default team"
  },
  "manually_created_by": {
    "id": "603360ce3aeae4de2b6edec1",
    "name": "David Brent",
    "email": "david@myorg.com"
  }
}
```
