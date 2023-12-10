# Chronicle SIEM Tool

----

# Chronicle Searches

**Overview**: Chronicle offers multiple search methods to locate events efficiently, including Unified Data Model (UDM) Searches and Raw Log Searches. Understanding these methods empowers security analysts to explore and analyze security data effectively.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/aM2yKauvThC6hDgvWmzbSQ_0e4167e2b3ab436d92d7cab63fc844e1_7Gwfz8thmYUWWdxjQiQtHM6omUL7OLjOSSD_fShq4yrmkr7sAJs4pBDBJ2Azy26HdkyF3K50mIQEtIqW4FaA2F-eN9G1Ev4WM_Drze0i3-5-Et_l51y9nTnh9eHqQFitE0f5Yzr5YsTzf7qL-MQbDHI?expiry=1697587200000&hmac=U6hx__ZAW7yqQrOKtQzC7-77aCs9o9_QRC_pMdQD6Q0" title="" alt="Chronicle's home page." data-align="center">

---

## Unified Data Model (UDM) Search

**Default Search Type**: UDM Search serves as Chronicle's default search type. It is designed to search through security data that has been ingested, parsed, and normalized. A UDM Search retrieves results faster than a Raw Log Search, thanks to its structured and indexed data.

<img title="" src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/JzVkQ2HKR9GWPXAVp86RDA_fd86cffb80f149308081b1743f8fc2e1_4h28Y1oIHmI1Ot2LJQBbPIZXGBM3pa5uf5XhEmIBT1gpQ6VoU64Iz0MmaDiIheqMmXzNw6ROML3r7HAMB38OwaOur8PgwJO8dLvVVWC8t7IkM63S0wkJIRvnueiI2BN1nfUtfIXgn7UG7VoW5BhLkaQ?expiry=1697587200000&hmac=07FX0itYorBYSLNW7vxqAaBTpctUf6IresPYoD5YMv0" alt="Chronicle's home page." data-align="center" width="706">

**Performing a UDM Search**:

1. Access the Search field.
2. Enter your search query.
3. Click "Search."
4. Select "UDM Search."

**Key Features of UDM Search**:

- **UDM Fields**: UDM Search allows you to query specific information using UDM fields. Various UDM fields can be used to refine searches. Common UDM fields include:
  - **Entities**: Also referred to as nouns, entities provide context about devices, users, or processes involved in an event. For instance, entity details may include the hostname, username, and IP address.
  - **Event Metadata**: Describes event type, timestamps, and more.
  - **Network Metadata**: Contains network-related event information and protocol details.
  - **Security Results**: Indicates security-related outcomes of events, such as detecting and quarantining malicious files.

**Example of UDM Search**:

```plaintext
metadata.event_type = "USER_LOGIN"
```

- `metadata.event_type = "USER_LOGIN"`: This UDM field, `metadata.event_type`, focuses on event types like timestamp, network connection, user authentication, and more. Here, the event type specifies `USER_LOGIN`, which searches for events relating to authentication.

---

## **Raw Log Search**

**Alternative to UDM**: If required information cannot be found in normalized data, a Raw Log Search is used. This search method explores raw, unparsed logs, offering more flexibility but requiring additional time for execution.

**Performing a Raw Log Search**:

1. Access the Search field.
2. Enter your search criteria.
3. Click "Search."
4. Select "Raw Log Search."

**Pro Tip**: Raw Log Search supports regular expressions, allowing you to fine-tune searches based on specific patterns. 

The availability of UDM and Raw Log Searches equips security analysts with the tools to efficiently access and analyze security data based on their specific needs.
