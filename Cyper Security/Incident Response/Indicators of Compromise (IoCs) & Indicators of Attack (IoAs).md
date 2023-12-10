# Indicators of Compromise (IoCs) & Indicators of Attack (IoAs)

---

## Indicators of Compromise (IoCs)

- **Observable Evidence:** IoCs are pieces of evidence that indicate a potential security incident.
- **Looking Back:** They help identify the "<u>who</u>" and "<u>what</u>" of an attack after it has occurred.
- **Examples:** Evidence such as a file name associated with malware.
- **Similar to Finding a Stolen Object:** Like noticing an item missing from a car, IoCs point to something that has already happened.
- **Not Always Security Incidents:** IoCs can result from human error, system malfunctions, and non-security-related reasons.

---

## Indicators of Attack (IoAs)

- **Real-Time Incidents:** IoAs focus on observed events that indicate a current security incident.
- **Behavioral Evidence:** They help uncover the "<u>why</u>" and "<u>how</u>" of an ongoing or unknown attack.
- **Examples:** Detecting a process establishing a network connection is an IoA.
- **Behavior and Intentions:** IoAs identify the actions and motives of attackers.

---

## Pyramid of Pain

The **Pyramid of Pain** categorizes indicators of compromise (IoCs) based on their effectiveness in thwarting malicious activities. It emphasizes that the more painful and challenging it is for attackers when specific IoCs are blocked, the more effective the defense. Here's an enhanced and simplified breakdown:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/5wpDfG3dRQyt3j7I9Vem3Q_31d63be045bc492e9b94aaeeb809a2f1_b5ndsAVFpYfEQSnQvmCly3Ws1dMEo2js79jF_lmAHf6cke-2RsAJfd2JrQ4GoFZdLOIdxxGx-AyNc-cnn4dolkvJLj1dydB1g0JmArLZWeZy7VJLFagiJ0xcq1oz7oirJA4dN8qjz6CI87yrOt-QSvGE7J28YVbPtj59GiU35sLHgGU8RIqqEkRI-JAk5w?expiry=1697328000000&hmac=1eGtPQi4-iJl0zHjSXu95QQOPQ8xh3GOxUzbDIamyMA" title="" alt="Un triangle divisé en six niveaux décrit six indicateurs de compromission avec, pour chacun, le niveau de difficulté correspo" data-align="center">

1. **Easy to Bypass (Low Pain):** These IoCs, such as blocking known IP addresses, pose minimal obstacles for attackers, as they can swiftly adapt.

2. **Moderate Impact (Medium Pain):** IoCs involving domain names and network artifacts provide somewhat better defense but are still relatively manageable for attackers.

3. **Significant Hurdles (Moderate Pain):** Blocking host artifacts and tools creates substantial challenges, as attackers must adapt their tactics and tools.

4. **Tough to Evade (High Pain):** Hash values of malicious files are challenging to change without altering the malware itself, making them a potent defense.

5. **Highest Impact (Extreme Pain):** Tactics, techniques, and procedures (TTPs) are the most challenging to change. Blocking TTPs is like removing the attacker's playbook, causing significant disruption.

By focusing on IoCs that cause higher pain for attackers, security teams can enhance their defense and make it more difficult for malicious actors to operate effectively.

---

## Types of IoCs:

- **Hash Values:** Unique references for known malicious files.

- **IP Addresses:** Internet protocol addresses.

- **Domain Names:** Web addresses.

- **Network Artifacts:** Evidence in network protocols.

- **Host Artifacts:** Evidence on a host device.

- **Tools:** Software used by malicious actors.

- **Tactics, Techniques, and Procedures (TTPs):** The behavior of attackers, with tactics, techniques, and procedures varying in detail.

- **Blocking at the Top:** The more difficult it is for attackers to bypass blocked IoCs, the better the security.
