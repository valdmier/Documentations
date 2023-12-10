# Suricata IDS

Suricata is an open-source intrusion detection system, intrusion prevention system, and network analysis tool.

---

### **Suricata features**

There are three main ways Suricata can be used:

- **Intrusion detection system** (**IDS**): As a network-based IDS, Suricata can monitor network traffic and alert on suspicious activities and intrusions. Suricata can also be set up as a host-based IDS to monitor the system and network activities of a single host like a computer.

- **Intrusion prevention system** (**IPS**): Suricata can also function as an intrusion prevention system (IPS) to detect and block malicious activity and traffic. Running Suricata in IPS mode requires additional configuration such as enabling IPS mode.

- **Network security monitoring** (**NSM**): In this mode, Suricata helps keep networks safe by producing and saving relevant network logs. Suricata can analyze live network traffic, existing packet capture files, and create and save full or conditional packet captures. This can be useful for forensics, incident response, and for testing signatures. For example, you can trigger an alert and capture the live network traffic to generate traffic logs, which you can then analyze to refine detection signatures.

---

## Rules

Rules or signatures are used to identify specific patterns, behavior, and conditions of network traffic that might indicate malicious activity. The terms rule and signature are often used interchangeably in Suricata. Security analysts use **signatures**, or patterns associated with malicious activity, to detect and alert on specific malicious activity. Rules can also be used to provide additional context and visibility into systems and networks, helping to identify potential security threats or vulnerabilities. 

Suricata uses **signatures analysis**, which is a detection method used to find events of interest. Signatures consist of three components:

- **Action**: The first component of a signature. It describes the action to take if network or system activity matches the signature. Examples include: alert, pass, drop, or reject.

- **Header**: The header includes network traffic information like source and destination IP addresses, source and destination ports, protocol, and traffic direction.

- **Rule options:** The rule options provide you with different options to customize signatures.

Here's an example of a Suricata signature:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/sUAYMHVdQ-2IJCnBysJmzg_c3deef0b2a6c454fbc39b674cc0bc9f1_CS_R-138_Suricata-signature.png?expiry=1697587200000&hmac=m14oEi8bg3xtjnwigBakNUV2QY0cOaWcamiwvFc6tu8" title="" alt="A Suricata signature with an action, header, and rule options." data-align="center">

Rule options have a specific ordering and changing their order would change the meaning of the rule.

**Note**: The terms rule and signature are synonymous.

**Note:** Rule order refers to the order in which rules are evaluated by Suricata. Rules are processed in the order in which they are defined in the configuration file. However, Suricata processes rules in a different default order: pass, drop, reject, and alert. Rule order affects the final verdict of a packet especially when conflicting actions such as a drop rule and an alert rule both match on the same packet.

---

### **Custom rules**

While Suricata comes with predefined rules, it's highly recommended to modify or create custom rules tailored to your organization's specific security requirements. Custom rules offer the flexibility to enhance detection accuracy, reduce false positives, and meet unique security needs.

---

## Configuration File

A configuration file is crucial for properly setting up detection tools, defining how they should interact with the environment, and customizing their behavior. Suricata uses the `suricata.yaml` configuration file, formatted in YAML, to specify its settings and configurations.

---

## Log Files

Suricata generates two main types of log files when alerts are triggered:

1. **eve.json:** This is the standard Suricata log file, storing detailed information and metadata about events and alerts in JSON format. It includes a unique identifier called "flow_id" for correlating related logs and alerts.

2. **fast.log:** This file records minimal alert information, including basic IP addresses and port details about network traffic. It's suitable for basic logging and alerting but may not be sufficient for in-depth incident response or threat hunting.

---

**Key Takeaways:**

- Suricata is a multifaceted security tool used for IDS, IPS, and network analysis.
- Rules, also known as signatures, are essential for identifying malicious activities in network traffic.
- Custom rules are recommended for fine-tuning detection and minimizing false positives.
- Proper configuration of Suricata settings in the `suricata.yaml` file is crucial.
- Understanding log files like `eve.json` and `fast.log` is essential for monitoring and analyzing security events.
