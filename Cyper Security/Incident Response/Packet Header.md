#### Packet Header

-----

#### Internet Layer

- The Internet Layer accepts and delivers packets for the network.
- Internet Protocol (IP) is fundamental to all communications on the internet and ensures packets reach their destinations.
- It operates like a mail courier, using information in the packet header, such as IP addresses, to determine the best route for data transmission.

---

#### IPv4 Header Fields:

- **Version:** Specifies the IP version used (IPv4 or IPv6), similar to different classes of mail.

- **IHL (Internet Header Length):** Indicates the length of the IP header plus any options.

- **ToS (Type of Service):** Determines how certain packets should be treated, like a fragile sticker on a mailed package.

- **Total Length:** Identifies the length of the entire packet, including headers and data, like the dimensions and weight of an envelope.

- **Identification, Flags, and Fragment Offset:** Handle fragmentation, specifying if packets have been broken up for transmission and how to reassemble them, similar to how mail travels through multiple routes.

- **TTL (Time to Live):** Specifies how long a packet can live before it's dropped, preventing endless looping through routers, like tracking information on an envelope.

- **Protocol:** Specifies the protocol used with a numerical value (e.g., TCP represented by 6), similar to a house number in a postal address.

- **Header Checksum:** Stores a checksum value to detect errors in the header.

- **Source Address:** Specifies the source IP address, like the sender's contact information on an envelope.

- **Destination Address:** Specifies the destination IP address, like the receiver's contact information.

- **Options:** Optional field used for network troubleshooting, increasing header length, similar to postal insurance.

- **Data:** Contains the packet's actual data, like the text in an email message.

<img title="" src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/jkb0TBrPQSq9YoCeruRfqA_e1ec815e1edd4447a9a51b7f8945ccf1_7Fe1r5PP-rO933_0njaasi_PLYxnCK70uwxT7ZVgtLukfU1L_3B4ppP4aiLOiZ1QNlZCuuLku28h-mpQ5lEnQKly8HIeoDkaEvqkdh4Xbb_U9ba52JscXUcrmQFcluGPBPqNqA1v_gYZwv_JqR4di7niNF2R5uy2JBR0r-QshhE6zOIghv4lUCWa96872A?expiry=1697155200000&hmac=ra47XkAi-jDkAxMrvogf-iXviki46_oUCNzx_dgg9KQ" alt="Un en-tête IPv4 avec ses 13 champs." data-align="center">

---

#### **IPv6**

IPv6 adoption has been increasing because of its large address space. There are eight fields in the header:

IPv6 adoption has been increasing because of its large address space. There are eight fields in the header:

- **Version**: This field indicates the IP version. For an IPv6 header, IPv6 is used.

- **Traffic Class**: This field is similar to the IPv4 Type of Service field. The Traffic Class field provides information about the packet's priority or class to help with packet delivery.

- **Flow Label**: This field identifies the packets of a flow. A flow is the sequence of packets sent from a specific source. 

- **Payload Length**: This field specifies the length of the data portion of the packet.

- **Next Header**: This field indicates the type of header that follows the IPv6 header such as TCP.

- **Hop Limit**: This field is similar to the IPv4 Time to Live field. The Hop Limit limits how long a packet can travel in a network before being discarded.

- **Source Address**: This field specifies the source address of the sender.

- **Destination Address**: This field specifies the destination address of the receiver.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/i8ZlXBWcQnKMc9AvaOlTrg_9ae604f634bc4ea3b0bced51911d32f1_XjvmdLkZuzfhKQ0zQ_4RnCZGNxP0FDCtB0i8iwWtu30GL05Ziixkcd3YNSK8ng5tiu3X3XVOypCPywtGP01diUAvVWEkjwGWk7E_4fpFZdntBgohToxkS5cNsyZtqKsRCmssQUmWlH8Xhn2oJKG55Kv0-CUjA8Kj3yhZXTWbjjV4pYcCH9EUwPWpyFnhCQ?expiry=1697155200000&hmac=yDPfOGIRpGKy2FgmdXYHxjBxH9VbsfZAHZcgAef-OtA" title="" alt="Un en-tête IPv6 avec ses huit champs." data-align="center">
