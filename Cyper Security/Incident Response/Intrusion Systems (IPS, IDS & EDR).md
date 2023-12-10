## Detection tools

- **Purpose**: Similar to home security systems, cybersecurity detection tools protect networks and systems against unauthorized access and threats.

- **Function**: Continuously monitor networks and systems for suspicious activity, alerting security professionals when potential intrusions are detected.

- **Alerts**: Trigger alerts upon detecting unusual or suspicious activities, prompting immediate investigation and intervention by security personnel.

## Intrusion Detection Systems (IDS)

An application that monitors system and network activity and produce alerts on the possible intrusions. It alerts the admin for any abnormal activity.

- Monitor system and network activity

- Collect and analyze system information for abnormal activity

- Alert on possible intrusions

## Intrusion Prevention Systems (IPS)

An application that monitors system activity for intrusions and take action to stop the activity.

- Monitor system and network activity.

- Collect and analyze system information for abnormal activity.

- Alerts & prevents possible intrusions.

### Endpoint Detection and Response (EDR)

Endpoint Detection and Response (EDR) monitors endpoints (devices connected to a network) for malicious activity. Installed on endpoints, EDR tools **monitor, record, and analyze** endpoint system activity, identifying, alerting, and responding to suspicious activity.

- **Analysis**: Unlike IDS or IPS tools, EDRs perform behavioral analysis using machine learning and AI to detect threat patterns on an endpoint.

- **Automation**: EDR tools use automation to stop attacks without manual intervention by security professionals, e.g., blocking unusual processes.

- **Examples of EDR Tools**: Open EDR®, Bitdefender™ Endpoint Detection and Response, FortiEDR™.

## Tools that are both IPS and IDS

- Snort

- Zeek

- Kismet

- Suricata

### Comparison chart for quick reference:

| **Capability**               | **IDS** | **IPS** | **EDR** |
| ---------------------------- | ------- | ------- | ------- |
| Detects malicious activity   | ✓       | ✓       | ✓       |
| Prevents intrusions          | N/A     | ✓       | ✓       |
| Logs activity                | ✓       | ✓       | ✓       |
| Generates alerts             | ✓       | ✓       | ✓       |
| Performs behavioral analysis | N/A     | N/A     | ✓       |

### 

### Detection Categories for Security Analysts

 **Correct Detection**

1. **True Positive**: Correctly detects the presence of an attack.

2. **True Negative**: No detection of malicious activity when none exists, no alert triggered.
   
   **Wrong Detection**

3. **False Positive**: Incorrectly detects the presence of a threat, leading to investigations of non-threats.

4. **False Negative**: Fails to detect a threat, leaving the security team unaware of legitimate attacks.

**Positive**: There's an attack.

**Negative**: There isn't an attack.
