## Wireshark

**Wireshark** is an open-source network protocol analyzer. It uses a graphical user interface (GUI), which makes it easier to visualize network communications for packet analysis purposes.

---

### Display filters

Wireshark's display filters let you apply filters to packet capture files. This is helpful when you are inspecting packet captures with large volumes of information.  You can filter packets based on information such as protocols, IP addresses, ports, and virtually any other property found in a packet. We'll focus on display filtering syntax and filtering for protocols, IP addresses, and ports.

---

### Comparison operators

You can use different comparison operators to locate specific header fields and values. Comparison operators can be expressed using either abbreviations or symbols. For example, this filter using the == equal symbol in this filter ip.src == 8.8.8.8 is identical to using the eq abbreviation in this filter ip.src eq 8.8.8.8.

This table summarizes the different types of comparison operators you can use for display filtering.

| **Operator type**        | **Symbol** | **Abbreviation** |
| ------------------------ | ---------- | ---------------- |
| Equal                    | ==         | eq               |
| Not equal                | !=         | ne               |
| Greater than             | >          | gt               |
| Less than                | <          | lt               |
| Greater than or equal to | >=         | ge               |
| Less than or equal to    | <=         | le               |

**Pro tip:** You can combine comparison operators with Boolean logical operators like and and or to create complex display filters. Parentheses can also be used to group expressions and to prioritize search terms.

---

### Contains operator

The contains operator is used to filter packets that contain an exact match of a string of text. Here is an example of a filter that displays all HTTP streams that match the keyword "moved".

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/U-VFvCZpR-C7DiBud3CJ6Q_3d58fbc8790a4163b1fbd8d6689cf0f1_CS_R-125_packet-capture.png?expiry=1697155200000&hmac=35nQF0HKob87hLVD61FTe3g3-CGXCJJBgv0vzUi1DZE" title="" alt="Capture de paquets Wireshark utilisant l'opérateur contains pour trouver les flux HTTP contenant la chaîne « moved »." data-align="center">

---

### Matches operator

The matches operator is used to filter packets based on the regular expression (regex) that's specified. Regular expression is a sequence of characters that forms a pattern. You'll explore more about regular expressions later in this program.

---

#### Filter toolbar

You can apply filters to a packet capture using Wireshark's filter toolbar. In this example, dns is the applied filter, which means Wireshark will only display packets containing the DNS protocol.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/S2HoKdS_TnS0idDiU9XbJw_cb303cb11f2f45db944a6b22cbf3b4f1_ADA_R-125_DNS.png?expiry=1697155200000&hmac=bQ5rMP0VbMkCUwofCdCA2RAJg1wiUeN9BkKGaVxbovc" title="" alt="Une barre d'outils de filtre Wireshark avec un filtre dns appliqué." data-align="center">

**Pro tip**: Wireshark uses different colors to represent protocols. You can customize colors and create your own filters

---

### **Filter for protocols**

Protocol filtering is one of the simplest ways you can use display filters. You can simply enter the name of the protocol to filter. For example, to filter for DNS packets simply type dns in the filter toolbar. Here is a list of some protocols you can filter for:

- dns

- http

- ftp

- ssh

- arp

- telnet

- icmp

---

### **Filter for an IP address**

You can use display filters to locate packets with a specific IP address. 

For example, if you would like to filter packets that contain a specific IP address use `ip.addr`, followed by a space, the equal == comparison operator, and the IP address. Here is an example of a display filter that filters for the IP address 172.21.224.2:

`ip.addr == 172.21.224.2`

To filter for packets originating from a specific source IP address, you can use the `ip.src` filter. Here is an example that looks for the `10.10.10.10` source IP address:

`ip.src == 10.10.10.10`

To filter for packets delivered to a specific destination IP address, you can use the` ip.dst` filter. Here is an example that searches for the 4.4.4.4 destination IP address:

`ip.dst == 4.4.4.4`

---

### **Filter for a MAC address**

You can also filter packets according to the **Media Access Control (MAC) address**. As a refresher, a MAC address is a unique alphanumeric identifier that is assigned to each physical device on a network.

Here's an example:

`eth.addr == 00:70:f4:23:18:c4`

---

### **Filter for ports**

Port filtering is used to filter packets based on port numbers. This is helpful when you want to isolate specific types of traffic. DNS traffic uses TCP or UDP port 53 so this will list traffic related to DNS queries and responses only.

For example, if you would like to filter for a UDP port:

`udp.port == 53`

Likewise, you can filter for TCP ports as well:

`tcp.port == 25`

---

## Follow streams

Wireshark provides a feature that lets you filter for packets specific to a protocol and view streams. A stream or conversation is the exchange of data between devices using a protocol. Wireshark reassembles the data that was transferred in the stream in a way that's simple to read.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/qGiuzTybTNyYJXCUSuSStA_2353ba616b0c404d9b3d6df3af1fdef1_CS_R-125_dialog-box.png?expiry=1697155200000&hmac=LpbverDBdrF9EldRwJFh7cnt-pewqiKv8_nX9iz_zNE" title="" alt="Une boîte de dialogue de suivi de flux Wireshark affiche le contenu du flux d'une conversation HTTP." data-align="center">

Following a protocol stream is useful when trying to understand the details of a conversation. For example, you can examine the details of an HTTP conversation to view the content of the exchanged request and response messages.
