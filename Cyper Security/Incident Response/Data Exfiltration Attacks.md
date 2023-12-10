#### Data Exfiltration Attacks

---

##### Stage 1

**Initial Access and Social Engineering**:

- Attackers gain entry through tactics like phishing.
- They trick targets into revealing sensitive data.
- Gain access to the victim's device.

---

##### Stage 2

**Lateral Movement and Pivoting**:

- After gaining access, attackers aim to maintain it.
- Lateral movement involves exploring the network to expand access to other systems.

----

##### Stage 3

**Identifying Valuable Assets**:

- Attackers seek valuable data (e.g., proprietary code, PII, financial records).
- They locate assets in network file shares, intranet sites, code repositories, etc.

----

##### Stage 4

**Data Preparation for Exfiltration**:

- Attackers prepare stolen data by reducing its size to bypass security controls.

---

##### Stage 5

**Data Exfiltration**:

- Data is sent to the attacker's destination (e.g., via email from the compromised account).

---

---

#### Defensive Measures

1. **Prevent Attacker Access**:
   
   - Protect against phishing attempts, e.g., using multi-factor authentication.

2. **Monitor Network Activity**:
   
   - Keep an eye on network activity for suspicious signs, like logins from unusual IP addresses.

3. **Asset Inventory and Security Controls**:
   
   - Catalog all assets in an inventory.
   - Apply appropriate security controls to protect assets from unauthorized access.

4. **Detect and Stop Data Exfiltration**:
   
   - Use network monitoring to identify unusual data collection.
   - Indicators include large internal file transfers, external uploads, and unexpected file writes.
   - SIEM tools can detect and alert on such activities.
   - Respond to alerts by investigating and stopping the attack (e.g., blocking attacker IP addresses using firewall rules).
