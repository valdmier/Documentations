#### TCP/IP Model

 Framework for visualizing data organization and transmission across a network.

---

### TCP (Transmission Control Protocol)

 Internet communication protocol for establishing connections and streaming data.

#### IP (Internet Protocol)

 Set of standards for routing and addressing data packets between devices on a network.

---

#### Ports

 Software-based locations for sending and receiving data, dividing network traffic based on services between devices.

##### Common Port Numbers

 Examples include port 25 (email), port 443 (secure internet), and port 20 (large file transfers).

---

#### TCP/IP Model Layers

1. **Network Access (ETHERNET, LAN):**
   
   - Deals with **data packet creation and transmission**, including physical hardware like hubs and modems.
   - Includes Address Resolution Protocol (ARP) for mapping IP to MAC addresses.

2. **Internet (IP):**
   
   - Ensures delivery to the destination host on different networks.
   - Attaches IP addresses to data packets.
   - Common protocols include IP and ICMP.

3. **Transport  (TCP, UDP):**
   
   - Responsible for delivering data and flow control.
   - TCP ensures reliable data transmission with port numbers in the header.
   - UDP is for real-time applications not concerned with reliability.

4. **Application (HTTP, TLS, DNS):**
   
   - Makes network requests and determines accessible services.
   - Includes protocols like HTTP, SMTP, SSH, FTP, and DNS.

These concepts are fundamental for understanding how data moves across networks and the roles of various protocols and layers in network communication.

<img title="" src="file:///C:/Users/user/AppData/Roaming/marktext/images/2023-10-12-01-26-04-image.png" alt="" data-align="center" width="224">

---

#### Analogy

Imagine sending a physical **letter**, which is like transmitting data across a network:

1. **Application Layer (Writing the Letter <u>HTTP</u>**) You, the sender, write the letter, just as the application layer prepares data for transmission. 

2. **Transport Layer (Reliability of Delivery <u>TCP, UDP</u>)** This layer focuses on ensuring the letter is delivered accurately and reliably, like a reliable postal service. 

3. **Internet Layer (Addressing and Routing <u>IP</u>):** The letter is placed in an envelope with the recipient's address, ensuring it reaches the correct destination.

4. **Network Access Layer (Physical Delivery <u>ETHERNET, LAN</u>)** This layer corresponds to the physical hardware involved in network transmission. It's like the postal service's vehicles and infrastructure.
