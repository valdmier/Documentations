## How to Read Signatures

---

### There's 3 Main components of a signature

## 1. Action

- Determines the action to take if the rule criteria is met

- Some common actions:
  
  - Alert
  
  - Pass
  
  - Detect

---

## 2. Header

- Source and destination IP addresses 

- Source and destination ports

- Protocols

- Traffic direction

---

### 3. Rule Options

Configuring rule options helps in narrowing down network traffic, so you can find exactly what you're looking for. Rule options enable the customization of signatures by incorporating additional parameters to specify the behavior of the rule. These options help narrow down network traffic to accurately detect specific patterns or activities.

- **Customization:** There are various rule options available, and you can set them based on your specific requirements. For instance, you can configure options to match the content of network packets to detect malicious payloads, which often reside in the data of a packet and perform actions like data deletion or encryption.

- **Syntax:** Rule options are typically structured within parentheses and separated by semi-colons. In the upcoming example, you can observe that the rule options are enclosed in a pair of parentheses and are separated with semi-colons.

- **Key Rule Options:**
  
  - **msg (message):** It provides the text for the alert. In this case, the alert will display the message: "This is a message."
  - **sid (signature ID):** It assigns a unique ID to each signature, aiding in the identification of specific rules.
  - **rev (revision):** It denotes the revision number of the signature. When a signature is updated or changed, the revision number is incremented. Here, the number 1 indicates it's the first version of the signature.

---

### Example

`tcp 10.120.170.17 any -> 133.113.202.181 80 (msg: "This is message"; sid: 12345; rev:1;`

we can break down the components to understand the detected network traffic:

1. **Protocol (TCP):** The signature begins by specifying the protocol, which is TCP. This indicates that the detected network traffic follows the rules of the Transmission Control Protocol.

2. **Source IP Address (10.120.170.17):** Next, it lists the source IP address, which is 10.120.170.17. This is the origin point of the network communication.

3. **Source Port (Any):** It states that the source port number can be any. This means that the traffic can originate from any port on the source IP.

4. **Arrow (=>):** The arrow in the middle of the signature indicates the direction of the network traffic. In this case, it points from the source to the destination.

5. **Destination IP Address (133.113.202.181):** It specifies the destination IP address, which is 133.113.202.181. This is where the network traffic is headed.

6. **Destination Port (80):** It identifies the destination port, which is port 80. This is the port at the destination IP address where the network traffic is intended to go.

7. **msg (message):** It provides the text for the alert. In this case, the alert will display the message: "This is a message."

8. **sid (signature ID):** It assigns a unique ID to each signature, aiding in the identification of specific rules.

9. **rev (revision):** It denotes the revision number of the signature. When a signature is updated or changed, the revision number is incremented. Here, the number 1 indicates it's the first version of the signature.
