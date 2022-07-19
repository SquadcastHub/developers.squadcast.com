---
title: Template functions
pcx-content-type: navigation
layout: single
weight: 5
meta:
  title: Template functions
---

# Template functions

This document contains the various template functions that can be used in the ingester configuration (manifest.yaml).

### `toFloat`

This function is used to convert the passed in `int64` value to a `float64` value.

**Example Usage**

```
${toFloat 56}
```

renders as `56.0`.

### `minus`

This function is used to subtract a `int64` value from another.

**Example Usage**

```
${minus 34 20}
```

renders as `14`.

### `minusf`

Similar to `minus` this used to subtract 2 `float64` values.

**Example Usage**

```
${minusf 34 20}
```

renders as `14.0`.

### `add`

This function is used to add two `int64` values.

**Example Usage**

```
${add 34 8}
```

renders as `42`

### `httpGet`

This function is used to call a HTTP URL.

**Example Usage**

```
${httpGet "https://httpbin.org/ip"}
```

renders as `true`

**Why**

This function was written because some systems that we integrate with requires a webhook validation step before that system can send alerts through the webhook. For example, AWS Cloudwatch sends a JSON payload when the user configures it with squadcast. This initial payload is not an alert event, rather this payload contains an `SubscriptionConfirmation` URL which had to be called. Once this is called, AWS will start sending any alerts if any.

Checkout [AWS Configuration](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch/manifest.yaml#L17) for more info.

### `concat`

This function used to add/concatenate two strings.

**Example Usage**

```
${concat "Hello" " World!"}
```

renders as `Hello World!`

### `trim`

This function is used to trim the spaces from the start and end of the passed string.

**Example Usage**

```
${trim "  Lots of me    "}
```

renders as `Lots of me`

### `unsnake`

This function is used to replace all the underscores (`_`) wirh a single space each from the passed string.

**Example Usage**

```
${unsnake "hiss_hiss_hiss"}
```

renders as `hiss hiss hiss`

### `capitalize`

This function capitalizes the first letter of the passed string.

**Example Usage**

```
${capitalize "hello World!!"}
```

renders as `Hello World!!`

### `toLower`

This function is used to convert the passed string to lower case.

**Example Usage**

```
${toLower "DON'T SHOUT!!"}
```

renders as `don't shout!!`

### `jsonParse`

This function is used to parse the passed JSON string and return the Go's notation of the JSON object.

If the passed string contains a JSON Object at the root level, then a `map[string]interface{}` is returned. If array is at the root level, `[]interface{}` is returned. This inturn can be used inside the template as well.

**Example Usage**

```
${jsonParse "{\"name\" : \"John Doe\"}"}
```

Generally this is used as value with with the subsequent templates can be formed. This should not be rendered directly else will yield unfavourable/unreadable results.

**Why**

AWS Cloudwatch sends JSON object as a serialized string in it's alerts instead of a nested JSON Object. So we have to parse that string to get the field values inside the JSON string.

Checkout [AWS Cloudwatch configuration](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch/manifest.yaml#L11) and [Sample AWS Cloudwatch payload](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/cloudwatch/payload/cloudwatch_notification_alarm.json#L6) for more.

### `toJSON`

This function is used to convert the passed template variable into the JSON representation.

**Example Usage**

This function is only used internally to get the array selector from the incoming payload as a Go variable. This is not used in any of the alert source configurations so far.

```
${toJSON $ages}
```

Assuming `$ages` is a variable which contains a map of names to ages, this renders as:

```
{"John":28,"Eve":30,"Mary":27}
```

### `toYAML`

This function is used to convert the passed template variable into the YAML representation.

**Example Usage**

This function is used to display nested JSON data since YAML makes it more readable

    ${toYAML $stats}

Assuming `$stats` is the following JSON

```json
{"name":"john", "details": {"height": 176,"weight": 65}}
```

the output of toYAML:

```yaml
name: john
details:
  height: 176
  weight: 65
```

### `toInt`

This function is used convert the passed string to `int64` (Base 10). If the passed string cannot be parsed into integer, then `0` is returned.

**Example Usage**

```
${toInt "121231"}
```

renders as `121231`. It is same for rendering the string and the int version. This is mostly used to perform calculations like `minus`, `add` etc.,

### `typeOf`

This is a debug function which is used to print the type of the passed variable. It returns `0` no matter what.

**Example Usage**

```
${typeOf 45}
```

renders as `0` but `Type of 45 is int` will be printed in the stdout of ingester. This is merely a debug helper function. Should not be used for production alert source configurations.

### `str`

This function is used to `sprint` any passed arguments.

**Example Usage**

```
${str $ages}
```

Assuming similar example as `toJSON`, this will render as `map[John:28 Eve:30 Mary:27]`. This should be used only for debugging purposes.

### `strf`

This function is similar to `sprintf` where the arguments are formatted into a string based on a passed format.

**Example Usage**

```
${strf "%X" 30}
```

renders as `1E`.

### `ftoi`

This function is used to convert the passed `float64` to `int64`.

**Example Usage**

```
${ftoi 45.0}
```

renders as `45`. When a JSON data is unmarshalled using a generic data type `interface{}`, the underlying type becomes `map[string]interface{}` / `[]interface{}`. And the string values are stored as `string`, `true`/`false` as booleans, numbers as `float64` even though it might have been an `int64`. Go prints the `float64` representation as exponential format like `2.124987e6` which when converted to `int64` gets formatted right.

### `showIf`

This function is used to render a line with a variable, only if the passed variable is not `nil`.

**Example Usage**

```
${ showIf "Agent" $root.agent_name -}
```

(assuming $root.agent_name is `falcon`)

This renders the string

```
Agent: falcon
```

if the passed payload has a field named `agent_name`. If the passed payload doesn't have a `agent_name`, then this line not rendered. Be sure add a `-` in the end of the template closer, to remove any empty lines in the rendered content.

### `timestampToString`

This function is used to convert unix timestamp to RFC1123 format.

**Example Usage**

```
${timestampToString $root.data.item.last_activated_timestamp}
```

renders as `Mon, 01 Jun 2020 16:42:03 IST`.

### `convertTimestamp`

This function is used to convert timestamp from one format to another.

**Example Usage**

```
${convertTimestamp "2021-07-30T12:56:23Z05:30" "2006-01-02T15:04:05Z07:00" "Mon, 02 Jan 2006 15:04:05 -0700"}
```

renders as `Fri, 30 Jul 2021 12:56:23 +0530`.

### `html2markdown`

This function is used to convert html to markdown.

**Example Usage**

```
${$d := html2markdown "<h1>Html to markdown</h1>"}
```

renders as `#Html to markdown`.

### `reNamedMatches`

This function is used to extract out the named matches from a string using a regex.

**Example Usage**

```
${with $matches := (reNamedMatches "^(?P<user>[a-z]+)@.*$" "example@example.com")}
Username: ${$matches.user}
${end}
```

yields :

```
User: example
```

### `reverse`

This function is used to reverse the passed arbitrary array (`[]interface{}`).

**Example Usage**

Say the payload is

```json
{
  "matches" : ["John", "Eve", "Bob"]
}
```

the following template

```
${with $rev := (reverse $root.matches)}
 + ${$rev}
${end}
```

should yield

```markdown
+ Bob
+ Eve
+ John
```

### `divide`

This function is used to 2 floats and yield a float. (all `float64`s)

**Example Usage**

```
${divide 840 2}
```

### `toJSONIndent`

This function is similar to `toJSON`, but adds an indentation spaces (4 spaces) at every level to the JSON output.

**Example Usage**

Say the `$pl` variable in the template is a Go map.

```
"instance-id" : "i-1239hd9"
"state" : "running"
```

```
${toJSONIndent $pl}
```

should yield

```json
{
    "instance-id": "i-1239hd9",
    "state": "running"
}
```

### `dehtml`

This template function is used to convert the HTML escape sequence in a string and return the resulting string. This is used in [**Kapacitor**](https://github.com/SquadcastHub/Alert-Source-Integration/blob/main/kapacitor/manifest.yaml#L24) alert source definition where the alert details are sent in a HTML escaped JSON string (for some reason).

**Example Usage**

Say `$h` is a variable that contains a HTML escaped string, with the following content:

```
{&#34;Name&#34;:&#34;mem&#34;}
```

```
${dehtml $h}
```

should yield

```
{"Name":"mem"}
```

### `join`

This template function is used to join string values with a passed string as the seperator.

**Example Usage**

Say `$hosts` has the following value. (in JSON)

```json
[
  "ingester-586d87769c-bh26t",
  "ingester-586d87769c-n22bh",
  "ingester-586d87769c-tfdd6",
  "ingester-586d87769c-tkkjb"
]
```

```
${join $hosts ", "}
```

should yield

```
ingester-586d87769c-bh26t, ingester-586d87769c-n22bh, ingester-586d87769c-tfdd6, ingester-586d87769c-tkkjb
```

### `replace`

This template function is used to replace a specific string from the input string with another string.

**Example Usage**

```
${replace "Banana" "na" "s"}
```

should yield `Bass`

### `urlQueryEscape`

This template function is used to escape a passed in string so that it can be used
in the query part of the string.

**Example Usage**

```
${urlQueryEscape "This is a testing query value"}
```

should yield `This+is+a+testing+query+value`

### `emptyStringIfNil`

This template function returns an empty string if a nil value is passed. This is used as a null
alternative when the payloads can contain null values, as handling empty string is safer than null.

**Example Usage**

Consider this payload

```json
{
  "name" : "Bob"
}
```

```
${emptyStringIfNil $root.age}
```

will yield `""` (nothing will be rendered).

### `hasPrefix`

This template function is used to check if the passed string contains the prefix passed.

**Example Usage**

Consider this payload

```json
{
  "name" : "Bob Saget"
}
```

```
${hasPrefix $root.name "Bob"}
```

will yield `true`.


```
${hasPrefix $root.name "John"}
```

will yield `false`.

### `reReplace`

This template function is used to replace the substrings of the parent string which matches
the passed regular expression with the replacement string.

**Example Usage**

```
${reReplace "Banana" "n." "l"}
```

will yield `Ball`.

### `repeat`

This template function is used to repeat a specific string `n` times.

**Example Usage**

```
${repeat "Na" 5}
```

will yield `NaNaNaNaNa`.

### `split`

This template function is used to split a string into multiple substrings by the passed separator string.

**Example Usage**

```
${split "Banana" "n"}
```

will yield an Array `[Ba,a,a]`.

### `trimPrefix`

This template function is used to trim any prefix from the original string.

**Example Usage**

```
${trimPrefix "Banana" "Ba"}
```

will yield `nana`.