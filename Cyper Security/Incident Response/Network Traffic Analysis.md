### Network Traffic Analysis

---

#### Network Traffic

The Amount of data that moves across a network.

---

#### Network Data

The data that's transmitted between devices on a network.

---

**Challenges with Network Traffic**:

- Large networks generate massive amounts of traffic.
- Distinguishing normal behavior from unusual or potentially malicious activity is challenging.

---

**Detecting Traffic Abnormalities**: Through observation, identifying **<u>Indicators of Compromise (IoC)</u>**, which are observable evidence suggesting potential security incidents.

---

#### Indicators of Compromise (IoC)

- Observable evidence that suggests signs of a potential security incident.

- **Example: <u>Data Exfiltration</u>:**  Unauthorized transmission of data from a system. Attackers use data exfiltration to steal or leak sensitive information like usernames, passwords, or intellectual property.

- Detection through network traffic analysis, e.g., identifying large volumes of outbound traffic from a host, signaling possible data exfiltration and prompting further investigation.

---

#### Network Baselines and Monitoring

**Baselines**: Reference points used for comparison, facilitating the detection of anomalies. Just like a personal budget sets a baseline for spending patterns, security uses baselines to identify deviations from expected behavior.

<img title="" src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/R-C-xmdWTRe8XfbJ4V9BMg_01d033967efe41ba898db5755db1f4f1_i-QtA3HA4BNT_yYXJ-qbty4-R8tuDG73XRllvRqnBMgcopHG7JmrlZYtjv-Jeorch1-w-rQhfh9u1ObkqF6KNsslNqhqyacRusAj38ehIjgImRN2lSB6DQ49MsFJCYgPdG2iBrOt-HEU99JuvC-070uPrh1M9UxFjb-Hvmfaa4yaGyn5kno71tlvVr_xgg?expiry=1697155200000&hmac=3JJRm1mLh185hhsjDhZe20wtWEaJBWzlp95BdtUc6yI" alt="Graphique linéaire affichant une base de référence passant par le milieu des pics de données." data-align="center" width="342">

**Monitoring for Abnormalities**

- Once a baseline is established, the network can be monitored for deviations. Detection of unusual activities is essential, such as large and atypical data transfers.

---

**Components to Monitor for Malicious Activity**

1. **Flow Analysis**: Involves packet movements, protocols, and ports. Malicious actors may use unconventional ports for communication (**command and control or C2**) to bypass detection.

2. **Packet Payload Information**: The actual data transmitted within network packets. Monitoring this can reveal sensitive data leaving the network, indicating **data exfiltration**.

3. **Temporal Patterns**: Examining time-related information within packets. Deviations from normal network activity hours can signal potential issues.

---

**Network Protection Teams**

- **Network Operations Center (NOC)**: Focuses on network performance, availability, and uptime rather than security. Responds to network disruptions like outages.

- **Security Operations Center (SOC)**: Monitors security threats and incidents. Analysts here understand network environments to identify IoCs.

---

**Network Monitoring Tools**

1. **Intrusion Detection Systems (IDS)**: Detect and alert on configured deviations in system activity. Monitors packet payload for threat patterns (e.g., malware, phishing).

2. **Network Protocol Analyzers (Packet Sniffers)**: Capture and analyze data traffic within a network. Tools like tcpdump and Wireshark help record and investigate network communications to identify potentially malicious activity.
