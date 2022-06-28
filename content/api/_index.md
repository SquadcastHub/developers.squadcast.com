---
title: Squadcast API
pcx-content-type: tutorial
layout: single
weight: 1
meta:
  title: Getting started with the Squadcast API
---

# API
The Squadcast API provides developers the capability to extend and utilize Squadcast in conjunction with other services. Our REST  API has resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
## Base URL’s

Most Squadcast API’s are migrated to v3 endpoints, however certain API’s remain in the v2 endpoints and the base url’s are different for both the versions. Also, the base domains are different for customers in the US & EU Data centers. 

### Authentication url to get the access-token

US: ``` https://auth.squadcast.com/oauth/access-token```

EU: ``` https://auth.eu.squadcast.com/oauth/access-token ```

### v2 endpoint base url’s

US: ``` https://platform-backend.squadcast.com/v2/organizations/:organizationID/ ```

EU: ``` https://platform-backend.eu.squadcast.com/v2/organizations/:organizationID/ ```
 
### v3 endpoint base url’s

US: ``` https://api.squadcast.com/v3/ ```

EU: ``` https://api.eu.squadcast.com/v3/ ```

## API endpoints
For more information, please refer to the API documentation for the below resources.

- [Authentication](https://apidocs.squadcast.com/#authentication)
- [Incidents](https://apidocs.squadcast.com/#9621f1a7-7263-44f1-b5e0-816b971f78ee)
  - [Notes](https://apidocs.squadcast.com/#e616dd95-d2ee-45ee-9072-8bf5ebecb55d)
  - [Postmortems](https://apidocs.squadcast.com/#caff6be7-a22b-4147-9ec4-3f7f38b7c2c1)
  - [StatusPage Messages](https://apidocs.squadcast.com/#c44ce66f-d3da-4e7e-b9a9-3d3f3a0376ce)
  - [Tags](https://apidocs.squadcast.com/#a92cb6a2-f6a3-474e-afef-0fd383d62dcc)
- [Escalation Policies](https://apidocs.squadcast.com/#b4aa9099-849c-49a8-b2a4-9c3c4ce64622)
- [Schedules](https://apidocs.squadcast.com/#3d28316c-973f-4a47-809e-12b2c57890f9)
- [Services](https://apidocs.squadcast.com/#ce92b14a-a973-481e-985c-c2c039bdfd9d)
  - [Deduplication Rules](https://apidocs.squadcast.com/#d44d82a4-bb35-4ff6-9ab4-b4e5f69d386d)
  - [Dependencies](https://apidocs.squadcast.com/#dea510f2-c779-47b9-9d0b-18e06e6ad912)
  - [Maintenance Mode](https://apidocs.squadcast.com/#260f4cd4-fa63-43f2-b06a-d76611145f19)
  - [Routing Rules](https://apidocs.squadcast.com/#80a74d23-28b8-4715-bdf8-c4a51f72f2cd)
  - [Suppression Rules](https://apidocs.squadcast.com/#df3aa632-e949-40f9-ab02-7b1a40a6ab80)
  - [Tagging Rules](https://apidocs.squadcast.com/#aacacb33-138d-4717-a76a-a4710595e187)
- [Squads](https://apidocs.squadcast.com/#af5dedb4-29cf-49b7-8d22-9e6e3b645179)
- [Teams](https://apidocs.squadcast.com/#0317db81-2586-4bfe-ad28-57d1a413e42b)
  - [Roles](https://apidocs.squadcast.com/#3e1f562e-1fa6-4349-82bc-1738404a8970)
- [Users](https://apidocs.squadcast.com/#646dcceb-8488-4583-ad21-93f70e381182)
- [Webhooks](https://apidocs.squadcast.com/#e74df50a-b812-4ec0-8be7-6075445bf60e) (Outgoing webhook extension)
