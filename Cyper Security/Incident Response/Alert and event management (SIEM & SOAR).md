### Alert and event management (SIEM & SOAR)

---

### Alert and event management (SIEM)

An application that collects and analyzes log data to monitor critical activities in an organization. 

### SIEM Data Processing Overview

1. **Data Collection and Aggregation**
   
   - SIEM tools collect and aggregate data.
   - Data sources include IDS/IPS, databases, firewalls, applications, etc.
   - Aggregation centralizes data from different sources.

2. **Normalization**
   
   - Raw data collected is often vast and unedited.
   - Normalization cleans and refines data by removing non-essential attributes.
   - It creates consistency in log records for easier search during incident investigation.

3. **Indexing of Data**
   Once data is collected and normalized, it needs to be organized and indexed so that it can be easily retrieved and analyzed when needed. SIEM tools index the data, making it accessible through search functionality. This indexed data includes events from all the different sources in the environment, and it's readily available for investigation.

4. **Analysis and Alerting**
   
   - Normalized data is analyzed using configured rules.
   - SIEM detects security incidents based on the rule set.
   - Incidents are categorized and reported as alerts for review by security analysts.

### SIEM Advantages

1. **Access to Event Data**:
   
   - Provides access to event and activity data on the network.
   - Can capture real-time activity.
   - Handles data from numerous network systems and devices.

2. **Monitoring, Detecting, and Alerting**:
   
   - Continuously monitors systems and networks in real-time.
   - Analyzes data using detection rules to identify malicious activity.
   - Generates alerts when matching activities are detected.

3. **Log Storage**:
   
   - Acts as a system for data retention.
   - Offers access to historical data.
   - Data retention periods can be customized based on organizational requirements.

### SOAR (Security Orchestration, Automation, and Response)

A collection of applications, tools, and workflows that uses automation to respond to security events.

- It utilizes automation to respond to security events.
- Automates analysis and response to security events and incidents.
- Can track and manage cases, centralizing multiple incidents into a single view.

While SIEM tools collect, analyze, and report on security events for security analysts to review, **SOAR automates analysis and response** to security events and incidents.
