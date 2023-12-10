## Log Formats

Logs come in different formats, with common elements like timestamps, IP addresses, event descriptions, actions, and performers.

---

### Logs Usually Contain

- **Timestamps**: Date, and time.

- **System** **characteristics**: IP addresses, OS, Device.

- **Action**: blocked, allowed, deleted, updated, logged.

- **Action performer**: Name, ID, user..etc.

---

### Different log sources generate logs in different formats

Some are:

- Machine-readable.

- Human-readable.

Some are:

- Verbose

- Short, and simple.

---

## Overview of Log File Formats

Log files record events on a network or system, and they play a crucial role in security analysis. Security analysts use log analysis to uncover events of interest and identify potential threats. Understanding various log formats is essential for this task. Here's a brief overview of commonly used log formats:

---

## 1. JSON (JavaScript Object Notation)

- **Format:** Lightweight and human-readable.
- **Components:**
  - Key-value pairs
  - Commas
  - Double quotes
  - Curly brackets
  - Square brackets
- **Example:** 
  
  `"User"
  { 
   "id": "1234", 
   "name": "user",
   "role": "engineer"
  }`

---

## 2. Syslog (system logging protocol)

#### Syslog: Logging and Data Transmission Standard

Syslog is a versatile standard used for logging and transmitting data, providing three core capabilities:

### 1. Protocol

- **Usage:** Transport logs to a centralized log server for log management.
- **Ports:** Port 514 for plaintext logs and port 6514 for encrypted logs.

### 2. Service

- **Function:** Acts as a log forwarding service to consolidate logs from multiple sources into a single location.
- **Process:** Receives and forwards syslog log entries to a remote server.

### 3. Log Format

**Example:**

`<236>1 2022-03-21T01:11:11.003Z virtual.machine.com evntslog - ID01 [user@32473 iut="1" eventSource="Application" eventID="9999"] This is a log entry!`

- **Main Format:** Native logging format commonly used in Unix® systems.
- **Components:**
  - 1. **<u>Priority (PRI)</u>**
    - **Definition:** The priority (PRI) field indicates the urgency of the logged event and is contained within angle brackets.
    - **Example:** Priority value `<236>`, where lower values generally denote more urgent events.
  
  - 2. **<u>Header</u>:** Contains timestamp, hostname, application name, and message ID.
    - **Timestamp:** Format is YYYY-MM-DDTHH:MM:SS.SSSZ (e.g., `2022-03-21T01:11:11.003Z`).
    - **Hostname:** Refers to the machine sending the log (e.g.,` virtual.machine.com`).
    - **Application:** Identifies the application name (e.g., `evntslog`).
    - **Message ID:** Provides a unique identifier for the message (e.g., `ID01`).
  
  - 3. **<u>Structured-data</u>:** Additional logging information enclosed in square brackets, structured as key-value pairs.
    - Example: `[user@32473 iut="1" eventSource="Application" eventID="9999"]`.
  
  - 4. **<u>Message</u>:** Contains a detailed log message about the event (e.g.,` "This is a log entry!"`).



**Note:** Syslog headers can be combined with JSON and XML formats, and custom log formats are also possible.

---

## 3. XML (eXtensible Markup Language)

- **Usage:** Native format in Windows systems.
- **Components:**
  - Tags (Start and end tags)
  - Elements (Including data within tags)
  - Attributes (Provide additional information)
- **Example:**
  
  ```
  <Event>
    <EventID>4688</EventID>
    <Version>5</Version>
  </Event>
  ```

---

## 4. CSV (Comma Separated Value)

- **Format:** Uses commas to separate data values.

- **Important:** Understand the field names as they might not be included in the log.

- **Example:** `2009-11-24T21:27:09.534255,ALERT,192.168.2.7, 1041,x.x.250.50,80,TCP,ALLOWED,1:2001999:9,"ET MALWARE BTGrab.com Spyware Downloading Ads",1`

---

## 5. CEF (Common Event Format)

- **Format:** Uses key-value pairs to structure data.
- **Components:**
  - `CEF:Version|Device Vendor|Device Product|Device Version|Signature ID|Name|Severity|Extension`
  - `Extension field is optional.`
- **Example:** 
  
  `Sep 29 08:26:10 host CEF:1|Security|threatmanager|1.0|100|worm successfully stopped|10|src=10.0.0.2 dst=2.1.2.2 spt=1232`
- **Here is a breakdown of the fields**:
  - **Syslog Timestamp**: `Sep 29 08:26:10`
  
  - **Syslog Hostname**: `host`
  
  - **Version**: `CEF:1`
  
  - **Device Vendor**: `Security`
  
  - **Device Product**: `threatmanager`
  
  - **Device Version**: `1.0`
  
  - **Signature ID**: `100`
  
  - **Name**: `worm successfully stopped`
  
  - **Severity**: `10`
  
  - **Extension**: This field contains data written as key-value pairs. There are two IP addresses, `src=10.0.0.2` and `dst=2.1.2.2`, and a source port number` spt=1232`. Extensions are not required and are optional to add.
    
    - This log entry contains details about a Security application called `threatmanager `that `successfully stopped` a `worm `from spreading from the internal network at `10.0.0.2` to the external network `2.1.2.2 `through the port `1232`. A high severity level of `10` is reported.
    
    **Note**: Extensions and syslog prefix are optional to add to a CEF log.

## Resources for More Information

- [The Syslog Protocol](<Link to Syslog Protocol>)
- [Open-source test data generator tool](<Link to Test Data Generator Tool>)
- [Date and Time on the Internet: Timestamps](<Link to Timestamp Format Resource>)


