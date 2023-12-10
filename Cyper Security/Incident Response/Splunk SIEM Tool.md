# Splunk SIEM Tool

---

# SIEM Tool Searches

**Overview**: SIEM tools vary across organizations, and as a security analyst, you should be adaptable and proficient in using different SIEM tools. Understanding the search capabilities of these tools is crucial for effective security investigations.

---

## Splunk Searches

**Splunk Language**: Splunk employs its own querying language known as Search Processing Language (SPL) to search and retrieve events from indexes via the Splunk Search & Reporting app.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/zmjvpMvASVuLzBl6p1-KJg_48cf882e1ea14f6ca2f3ceee91e1f2e1_cIW5xo7oKZMktF78z_u5eTeEJANj9wPgAG39QVCd8PDuvdrztqt2N1fJMbJOFms1QoIgAk0YNgHWjR1LQMLg__bhWqMMWmWke6kQmoWLpyxM5eVwNDyW7_2KttYjVSz2fYPCX4arj1TUHKrSfANwCU8?expiry=1697587200000&hmac=Bi6EeB-E_a0CYwejferThYW0cAQhK9xCOQl9QKN1_Oo" title="" alt="Splunk Cloud's search page." data-align="center">

**Basic Search Example**:

```plaintext
index=main fail
```

- `index=main`: Initiates the search command, specifying the index named "main," where event data is stored.
- `fail`: The search term, directing Splunk to return events containing the term "fail."

**Benefits of SPL**:

- Efficient Results: Effectively using SPL reduces search time and ensures precise results from diverse data sources.
- Versatility: SPL supports various search types, extending beyond the scope of this reading.

**Pipes in SPL**:

Pipes (`|`) are used in SPL to chain together multiple commands, similar to Linux bash shell piping, allowing the output of one command to become the input for another. This facilitates data refinement within a single command.

**Chained Commands Example**:

```plaintext
index=main fail | chart count by host
```

- `index=main fail`: Retrieves events from the "main" index containing the search term "fail."
- `|`: The pipe character separates and chains the two commands.
- `chart count by host`: Transforms search results into a chart format, showing the count of events by host (device names).

## Wildcards in Splunk

**Wildcard Usage**: Wildcards are special characters, often represented by an asterisk `*`, that can stand in for any character within string values. Splunk employs wildcards in searches to find events with similar but not identical data.

**Wildcard Search Example**:

```plaintext
index=main fail*
```

- `index=main`: Retrieves events from the "main" index.
- `fail*`: The wildcard `*` following "fail" matches any character, expanding the search results to include events with variations like "failed" or "failure."

**Pro Tip**: To search for an exact phrase or string, use double quotations, e.g., `"login failure"`. This narrows results to events containing the precise phrase without matching separate occurrences of "failure" or "login."

Understanding SIEM search capabilities equips security analysts to efficiently locate and analyze relevant event data for incident response.
