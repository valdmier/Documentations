## Tcpdumb

A command-line network protocol analyzer. Recall that a **command-line interface (CLI)** is a text-based user interface that uses commands to interact with the computer.

Tcpdump is used to capture network traffic. This traffic can be saved to a **packet capture (p-cap)**, which is a file containing data packets intercepted from an interface or network.

**Note**: It's common for network traffic to be encrypted, which means data is encoded and unreadable. Inspecting the network packets might require decrypting the data using the appropriate private keys.

---

## Capturing packets with tcpdump

A breakdown of the tcpdump syntax for capturing packets:

`sudo tcpdump [-i interface] [option(s)] [expression(s)]`

- The `sudo tcpdump` command begins running tcpdump using elevated permissions as sudo. 

- The` -i `parameter specifies the network interface to capture network traffic. You must specify a network interface to capture from to begin capturing packets. For example, if you specify `-i any` you’ll sniff traffic from all network interfaces on the system. 

- The`option(s)` are optional and provide you with the ability to alter the execution of the command. The `expression(s)` are a way to further filter network traffic packets so that you can isolate network traffic. 

**Note**: Before you can begin capturing network traffic, you must identify which network interface you'll want to use to capture packets from. You can use the`-D` flag to list the network interfaces available on a system.

---

### Essential Tcpdump Options

Tcpdump provides a range of options (or flags) that allow you to fine-tune your network traffic capture:

---

**-i**: The `-i` option in tcpdump is used to specify the network interface from which to capture packets. This is particularly useful in cases where a system has multiple network interfaces, and you want to capture traffic from a specific one.

Example:

```bash
sudo tcpdump -i any
```

Example:

```bash
sudo tcpdump -i eth0
```

In this example, tcpdump captures packets from the network interface `eth0`. Using the `-i` option allows you to focus on a particular network interface, which can be essential for troubleshooting or monitoring specific network segments.

---

**-w**: Use the `-w` flag to <u>**write**</u> or save the captured packets to a packet capture file instead of just displaying them in the terminal. This is extremely useful for later analysis.

Example:

```bash
sudo tcpdump -i any -w packetcapture.pcap
```

---

**-r**: With the `-r` flag, you can <u>read</u> a packet capture file by specifying its name as a parameter. This allows you to analyze previously captured traffic.

Example:

```bash
sudo tcpdump -r packetcapture.pcap
```

---

**-v**: Tcpdump doesn't display all packet information by default. The `-v` (**<u>verbose</u>**) option allows you to control the level of detail in the output. You can use `-v`, `-vv`, or `-vvv` to increase verbosity.

Example:

```bash
sudo tcpdump -r packetcapture.pcap -v
```

---

**-c**: The `-c` option, which stands for **<u>count</u>**, lets you specify how many packets tcpdump should capture. For instance, `-c 1` captures a single packet, while `-c 10` captures ten packets.

Example:

```bash
sudo tcpdump -i any -c 3
```

---

**-n**: Tcpdump performs name resolution by default, converting IP addresses to names and resolving port numbers. The `-n` flag disables this automatic mapping, which is considered best practice for traffic analysis. It also prevents malicious actors from being alerted to an investigation.

Example:

```bash
sudo tcpdump -r packetcapture.pcap -v -n
```

**Pro tip:** You can combine options, such as `-v` and `-n` into `-vn`. However, you can't combine an option with a parameter (e.g., `-c 1` or `-r capture.pcap`) with other options.

### 

---

### Filter Expressions

Filter expressions in tcpdump commands are optional but can be valuable during packet analysis. They allow you to isolate and search for specific network traffic based on criteria like protocols, IP addresses, and ports. You can also use Boolean operators like `and`, `or`, and `not` for more complex filtering.

Examples:

- Filter for IPv6 traffic:
  
  ```bash
  sudo tcpdump -r packetcapture.pcap -n 'ip6'
  ```

- Combine expressions using the `and` operator:
  
  ```bash
  sudo tcpdump -r packetcapture.pcap -n
   'ip and port 80'
  ```

**Pro tip:** You can use single or double quotes to ensure that tcpdump executes all expressions correctly and use parentheses for grouping complex expressions.

---

### Interpreting Tcpdump Output

After running a tcpdump command, the output displays information for each packet captured. The output format includes:

<img title="" src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3LnHDkkeQ2-a-KjHKXkBCQ_940eb009d1674c7595f8361adf48c1f1_89by7cw_y0GWsyGI4iK19PqNyVHpVO4reyeIO0v-xYeZDBID0JG0PzpqRSA7fWjmD88HKjaZ8PhlONjdsKMLrUlx0lM9lPGBVSNqO87rZPPHt00BahLIQmfBNpRTyBAgjUklW2nn3hCB5Z-x_0HC56AKW7g2hk4tXgWyjInXVJYMosY9D4pyuX2VzerrhA?expiry=1697241600000&hmac=VWVNxoc4Iu4kD32I7bzwy52uJ4GwSQp48IGLdpSOsxs" alt="Sortie d'une commande tcpdump avec des étiquettes pour l'horodatage, l'adresse IP source, le port source, l'adresse IP de des" data-align="center" width="704">

- **Timestamp**: Each line starts with a timestamp showing hours, minutes, seconds, and fractions of a second.

- **Source IP**: The source IP address where the packet originated.

- **Source Port**: The port from which the packet was sent.

- **Destination IP**: The destination IP address where the packet is headed.

- **Destination Port**: The port at the packet's destination.

The remaining output provides details of the TCP connection, including flags and sequence numbers. The `-v` option enhances the information displayed.

Example:

```bash
sudo tcpdump -i any -v -c 1
```

This command captures one packet and produces detailed output.

Understanding these options and output details allows you to effectively capture and analyze network traffic with Tcpdump.
