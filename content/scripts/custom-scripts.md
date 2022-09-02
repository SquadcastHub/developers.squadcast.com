---
title: Custom scripts
pcx-content-type: tutorial
layout: single
weight: 3
meta:
  title: Custom Squadcast scripts
---

# Custom Scripts

Custom scripts are used to perform certain custom actions in Squadcast with the help of Squadcast API's and webhooks.

## See who is on-call in Slack

The purpose of the script is to get the list of people who are on-call for a given Squadcast Schedule across all the shifts, at the time of execution of the script and send it to a slack channel.

Script - https://github.com/SquadcastHub/who-s-oncall-slack

Language - Go

## Copy Squadcast entities

This script can be used to copy certain Squadcast entities and their properties within the same or different teams.

Script - https://github.com/SquadcastHub/squadcast-copy-entities/blob/main/main.py

Language - Python

## Get Rapid7 InsightsIDR priority and reassign incidnets in Squadcast based on priority

Rapid7 InsightsIDR doesn't send the incident priority while generating the incident and it has to be fetched seperately. This script is added as part of our master webhook connector script which when triggered fetches the priority from Rapid7 InsightIDR updates the incident tags with priority and re-assigns the incidnet to a different escalation policy.

Script - https://github.com/SquadcastHub/Squadcast-Webhook-Connectors/blob/main/routes/api/rapid7.js

Language - Javascript (Nodejs)

If you have built any custom scripts, please [let us know](mailto:support@squadcast.com) and we will get it added to this list.