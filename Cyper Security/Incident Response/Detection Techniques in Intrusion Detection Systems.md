# Detection Techniques in Intrusion Detection Systems

Intrusion Detection Systems (IDS) employ different techniques to detect threats and attacks, with two common methods being **signature-based** analysis and **anomaly-based analysis.**

---

## Signature-Based Analysis

- **Definition:** Signature analysis, also known as signature-based analysis, identifies events of interest by comparing them against predefined patterns or signatures associated with known malicious activities.

- **Signatures:** Signatures are patterns that can include binary sequences, bytes, or specific data like IP addresses. They are often based on indicators of compromise (IoCs) associated with attacks.

- **Example:** An anti-malware signature contains patterns linked to malware, such as malicious scripts. IDS tools monitor for events matching these patterns and generate alerts.

##### **Advantages:**

- **Low False Positives:** Signature-based analysis efficiently detects known threats, resulting in fewer false positive alerts (incorrect threat detection).

##### **Disadvantages:**

- **Evadable:** Attackers can alter their behaviors to evade signatures, for instance, by modifying malware code to change its signature.
- **Requires Updates:** Relying on a signature database means new signatures must be created and added each time a new threat is discovered.
- **Inability to Detect Unknown Threats:** Signature-based analysis can't identify unknown threats, including new malware or zero-day attacks, which were previously unknown exploits.

----

## Anomaly-Based Analysis

- **Definition:** Anomaly-based analysis detects threats by identifying abnormal behaviors in the system. It involves two phases: a training phase and a detection phase.

- **Training Phase:** Establishes a baseline of normal behavior by collecting data reflecting typical system activity.

- **Detection Phase:** Compares current system activity to the baseline. Any deviations from the baseline are logged, and alerts are generated.

**Advantages:**

- **Detects New Threats:** Anomaly-based analysis can identify unknown and evolving threats, unlike signature-based analysis.

**Disadvantages:**

- **High False Positives:** Any behavior deviating from the baseline, including non-malicious activities, can trigger alerts, resulting in a high rate of false positives.
- **Pre-Existing Compromise:** If an attacker is present during the training phase, their malicious behavior becomes part of the baseline, potentially allowing their activities to go unnoticed.

---

**Key Takeaway:** Signature-based analysis relies on predefined patterns and is effective for detecting known threats with low false positives. Anomaly-based analysis, on the other hand, focuses on abnormal behavior and can detect unknown threats but tends to generate more false positives and may miss pre-existing compromises. Choosing the right detection technique depends on the specific security needs and threat landscape of an organization.
