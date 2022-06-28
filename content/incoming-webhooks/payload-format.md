---
pcx-content-type: navigation
title: Payload format
weight: 4
---

## Header

Ensure that you add a header Content-Type with value application/json while making the HTTP POST request.

`Content-Type:application/json`

## Payload 
The body of the POST request should contain the details of your incident in the following format:

```json
{
  "message": "This will be the incident message",
  "description": "This will be the incident description",
  "tags" : {
    "tagname1":"Tag value#1",
     "tagname2":"Tag value#2",
     "tagname3": {
       "color": "Valid HTML HEX Colour Notation goes here",
       "value":"Tag value#3"
     }
  },
  "status": "trigger",
  "event_id": "6"
}
```


### Mandatory fields within the JSON

Kindly note that the message and description fields in the JSON are mandatory to trigger an incident in Squadcast. 

You can enrich your incidents by adding other details optionally, in the same format as seen above in the example JSON

### Payload Size Limitation

The payload size is limited to 30KB. Any payload that crosses this limit will not be processed.
You will receive HTTP Status Code 413 to notify you of this.

### Event Identification and Resolution
This section will give you an understanding of how one can associate alerts with Squadcast incidents and resolve them with an API call.

Typical Incident JSON
```json
{
  "message": "This will be the incident message",
  "description": "This will be the incident description",
  "status": "trigger",
  "event_id": "6"
}
```

This triggers an incident and associates the incident with the event_id value as specified. This event_id can be used to resolve the above created incident with an API call.

To resolve an incident, a JSON with the format as shown below should be sent.
```json
{
  "status": "resolve",
  "event_id": "6"
}
```


The status field should be set to value "resolve"
The associated event_id should also be sent along with this

To resolve an incident, message and description fields are not required to be sent.

### Add a Tag From directly Incident JSON

This section will give you an understanding of how you can add tags to an incident straight from the Incident JSON using the Incident Webhook.

Typical Incident JSON:
```json
{
   "message":"This will be the incident message",
   "description": "This will be the incident description",
   "tags": {
     "tagname1":"Tag value#1",
     "tagname2":"Tag value#2",
     "tagname3": {
       "color": "Valid HTML HEX Color Notation goes here",
       "value":"Tag value#3"
     }
   }
}
```


Example 1: Using tags to set Severity for the incident
```json
{
  	"message": "Error rates higher than usual",
    "description": "HTTP Error rates for srv_90 is above 90 counts/hour",
    "tags": {
    	"severity": "high"
    }
}
```


### Tag colors

If a color code is not mentioned explicitly, then the system takes the default color "#808080" (gray) for tags

To specify a color explicitly for tags:

```json
{
	"message": "Error rates higher than usual",
  "description": "HTTP Error rates for srv_90 is above 90 counts/hour",
	"severity": {
  	"color": "#FF0000",
  	"value":"backend"
  }
}
```

Example 2: Adding different tags to an incident

```json
{
	"message": "Error rates higher than usual",
  "description": "HTTP Error rates for srv_90 is above 90 counts/hour",
	"tags" : {
   	"priority": "P1",
	  "impact_level": 5,
   	"classification": {
    	"color":"#FF0000",
     	"value":"backend"
     }
 	}
 }
 ```

