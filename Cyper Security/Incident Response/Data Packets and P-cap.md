#### Data Packet

 A basic unit of information that travels from one device to another within a network.

---

### Packet Components

- **Header**: Network protocol, port, receiver, packet's source and destination IP address etc...

- - an IPv4 header with the information it provides
  
  - <img title="" src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Mi_kryGkRiyYUOJDIwnPCw_ac942d1eec284467a5ca533cb99c4bf1_S20G003.png?expiry=1697155200000&hmac=CUJKJqhw5CHzFBGcg-rv7tFY8Dd_d0LWit7vxlDVwFg" alt="Un en-tête IPv4 avec ses treize champs" width="351" data-align="left">

- **Payload**: The actual data that is being sent.

- **Footer (the trailer)**: Signifies the end of the packet. he Ethernet protocol uses footers to provide error-checking information to determine if data has been corrupted.
  
  **Note:** Most protocols, such as the Internet Protocol (IP), *do not* use footers.

---

#### How exactly can you Capture packets in a network?

---

#### Network Protocol Analyzers (Packet Sniffers)

A tool designed to capture and analyze data within a network.

use packet sniffers to inspect packets for **indicators of compromise (IOC).**

**Examples**: tcpdump, Wireshark, and TShark.

Through packet sniffing, we can grab a detailed snapshot of packets that travel over a network in the form of a packet capture.

---

#### Functions of Protocol analyzers:

1. **Security and Investigation**:
   
   - Monitor networks and identify suspicious activity.
   - Capture and analyze data packets.

2. **Network Performance**:
   
   - Collect network statistics (bandwidth, speed).
   - Troubleshoot performance issues.

3. **Malicious Use**:
   
   - Malicious actors can use these tools to capture sensitive data, like account login information.

---

#### How network protocol analyzers work

1. Collect packets from the network through the Network Interface Card (NIC).

2. Convert raw binary data to a human-readable format for analysis.

---

#### Packet Capture (P-cap)

A file containing data packets intercepted from an interface or a network.

- It's sort of like intercepting an envelope in the mail.

- By having access to the communications happening between devices over a network, you can observe network interactions and start to build a storyline to determine what exactly happened.

- Creates packet capture (p-cap) files.

- P-cap files come in different formats, including Libpcap, WinPcap, Npcap, and PCAPng.

- Usage of such tools without permission is illegal in many places.

---

#### P-cap File Formats and Libraries

1. **Libpcap**:
   
   - Used by Unix-like systems (Linux, MacOS).
   - Default format for tools like tcpdump.

2. **WinPcap**:
   
   - Open-source library for **Windows devices**.
   - Older format, not widely used.

3. **Npcap**:
   
   - Commonly used in Windows operating systems.
   - Associated with the Nmap port scanning tool.

4. **PCAPng**:
   
   - Modern format capable of capturing packets and storing data simultaneously.

**Pro Tip:**

- Practicing on a home network can be a useful way to gain experience with these tools.
