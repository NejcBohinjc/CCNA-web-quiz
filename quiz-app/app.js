/* ─────────────────────────────────────────
   CCNA1 ITN Quiz — Questions Data + Logic
   ───────────────────────────────────────── */

const QUESTIONS = [
  {
    id: 1,
    text: "Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "video",           c: true  },
      { l: "B", t: "web",             c: false },
      { l: "C", t: "file transfer",   c: false },
      { l: "D", t: "voice",           c: true  },
      { l: "E", t: "peer to peer",    c: false }
    ]
  },
  {
    id: 2,
    text: "Which wireless technology has low-power and data rate requirements making it popular in home automation applications?",
    multi: false,
    options: [
      { l: "A", t: "ZigBee",   c: true  },
      { l: "B", t: "LoRaWAN",  c: false },
      { l: "C", t: "5G",       c: false },
      { l: "D", t: "Wi-Fi",    c: false }
    ]
  },
  {
    id: 3,
    text: "Which layer of the TCP/IP model provides a route to forward messages through an internetwork?",
    multi: false,
    options: [
      { l: "A", t: "application",    c: false },
      { l: "B", t: "network access", c: false },
      { l: "C", t: "internet",       c: true  },
      { l: "D", t: "transport",      c: false }
    ]
  },
  {
    id: 4,
    text: "Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?",
    multi: false,
    options: [
      { l: "A", t: "DNS",   c: true  },
      { l: "B", t: "email", c: false },
      { l: "C", t: "file",  c: false },
      { l: "D", t: "web",   c: false }
    ]
  },
  {
    id: 5,
    text: "What are proprietary protocols?",
    multi: false,
    options: [
      { l: "A", t: "protocols developed by private organizations to operate on any vendor hardware",     c: false },
      { l: "B", t: "protocols that can be freely used by any organization or vendor",                   c: false },
      { l: "C", t: "protocols developed by organizations who have control over their definition and operation", c: true },
      { l: "D", t: "a collection of protocols known as the TCP/IP protocol suite",                      c: false }
    ]
  },
  {
    id: 6,
    text: "What service is provided by DNS?",
    multi: false,
    options: [
      { l: "A", t: "Resolves domain names, such as cisco.com, into IP addresses.",                                                  c: true  },
      { l: "B", t: "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.", c: false },
      { l: "C", t: "Allows for data transfers between a client and a file server.",                                                  c: false },
      { l: "D", t: "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",                  c: false }
    ]
  },
  {
    id: 7,
    text: "A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "DNS",   c: false },
      { l: "B", t: "DHCP",  c: false },
      { l: "C", t: "SMTP",  c: false },
      { l: "D", t: "POP3",  c: true  }
    ]
  },
  {
    id: 8,
    text: "What command can be used on a Windows PC to see the IP configuration of that computer?",
    multi: false,
    options: [
      { l: "A", t: "show ip interface brief", c: false },
      { l: "B", t: "ping",                   c: false },
      { l: "C", t: "show interfaces",        c: false },
      { l: "D", t: "ipconfig",               c: true  }
    ]
  },
  {
    id: 9,
    text: "A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?",
    multi: false,
    options: [
      { l: "A", t: "client-based",       c: false },
      { l: "B", t: "master-slave",       c: false },
      { l: "C", t: "point-to-point",     c: false },
      { l: "D", t: "peer-to-peer (P2P)", c: true  }
    ]
  },
  {
    id: 10,
    text: "What characteristic describes a virus?",
    multi: false,
    options: [
      { l: "A", t: "a network device that filters access and traffic coming into a network",  c: false },
      { l: "B", t: "the use of stolen credentials to access private data",                   c: false },
      { l: "C", t: "an attack that slows or crashes a device or network service",            c: false },
      { l: "D", t: "malicious software or code running on an end device",                   c: true  }
    ]
  },
  {
    id: 11,
    text: "Three bank employees are using the corporate network. One uses a web browser to view a company web page. Another accesses the corporate database for financial transactions. The third participates in an important live audio conference. If QoS is implemented, what will be the priorities from highest to lowest of the different data types?",
    multi: false,
    options: [
      { l: "A", t: "financial transactions, web page, audio conference",   c: false },
      { l: "B", t: "audio conference, financial transactions, web page",   c: true  },
      { l: "C", t: "financial transactions, audio conference, web page",   c: false },
      { l: "D", t: "audio conference, web page, financial transactions",   c: false }
    ]
  },
  {
    id: 13,
    text: "Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?",
    multi: false,
    options: [
      { l: "A", t: "only application and Internet layers",                                         c: false },
      { l: "B", t: "only Internet and network access layers",                                      c: false },
      { l: "C", t: "only application, Internet, and network access layers",                        c: false },
      { l: "D", t: "application, transport, Internet, and network access layers",                  c: true  },
      { l: "E", t: "only application, transport, network, data link, and physical layers",         c: false },
      { l: "F", t: "application, session, transport, network, data link, and physical layers",     c: false }
    ]
  },
  {
    id: 15,
    text: "Refer to the exhibit. The IP address of which device interface should be used as the default gateway setting of host H1?",
    multi: false,
    options: [
      { l: "A", t: "R1: S0/0/0",  c: false },
      { l: "B", t: "R2: S0/0/1",  c: false },
      { l: "C", t: "R1: G0/0",    c: true  },
      { l: "D", t: "R2: S0/0/0",  c: false }
    ]
  },
  {
    id: 16,
    text: "What service is provided by Internet Messenger?",
    multi: false,
    options: [
      { l: "A", t: "An application that allows real-time chatting among remote users.",    c: true  },
      { l: "B", t: "Allows remote access to network devices and servers.",                 c: false },
      { l: "C", t: "Resolves domain names, such as cisco.com, into IP addresses.",        c: false },
      { l: "D", t: "Uses encryption to provide secure remote access to network devices.", c: false }
    ]
  },
  {
    id: 17,
    text: "Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network. (Network A=192.168.0.128/25, B=192.168.0.0/26, C=192.168.0.96/27, D=192.168.0.80/30) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "Network A: 192.168.0.128 /25",  c: true },
      { l: "B", t: "Network B: 192.168.0.0 /26",    c: true },
      { l: "C", t: "Network C: 192.168.0.96 /27",   c: true },
      { l: "D", t: "Network D: 192.168.0.80 /30",   c: true }
    ]
  },
  {
    id: 18,
    text: "Refer to the exhibit. Which protocol was responsible for building the table that is shown? (Output of arp -a)",
    multi: false,
    options: [
      { l: "A", t: "DHCP",  c: false },
      { l: "B", t: "ARP",   c: true  },
      { l: "C", t: "DNS",   c: false },
      { l: "D", t: "ICMP",  c: false }
    ]
  },
  {
    id: 19,
    text: "A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "crosstalk",          c: false },
      { l: "B", t: "extended length of cabling", c: false },
      { l: "C", t: "RFI",                c: true  },
      { l: "D", t: "EMI",                c: true  },
      { l: "E", t: "signal attenuation", c: false }
    ]
  },
  {
    id: 20,
    text: "A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?",
    multi: false,
    options: [
      { l: "A", t: "It will send the frame and use its own MAC address as the destination.",       c: false },
      { l: "B", t: "It will send an ARP request for the MAC address of the destination device.",    c: false },
      { l: "C", t: "It will send the frame with a broadcast MAC address.",                         c: false },
      { l: "D", t: "It will send a request to the DNS server for the destination MAC address.",    c: false },
      { l: "E", t: "It will send an ARP request for the MAC address of the default gateway.",      c: true  }
    ]
  },
  {
    id: 22,
    text: "A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "DNS",             c: true  },
      { l: "B", t: "NetBIOS (NetBT)", c: false },
      { l: "C", t: "POP3",            c: false },
      { l: "D", t: "IMAP",            c: false }
    ]
  },
  {
    id: 23,
    text: "A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the administrator can use for the new network?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.128", c: false },
      { l: "B", t: "255.255.255.192", c: false },
      { l: "C", t: "255.255.255.224", c: true  },
      { l: "D", t: "255.255.255.240", c: false }
    ]
  },
  {
    id: 24,
    text: "What characteristic describes a Trojan horse?",
    multi: false,
    options: [
      { l: "A", t: "malicious software or code running on an end device",                   c: true  },
      { l: "B", t: "an attack that slows or crashes a device or network service",           c: false },
      { l: "C", t: "the use of stolen credentials to access private data",                  c: false },
      { l: "D", t: "a network device that filters access and traffic coming into a network", c: false }
    ]
  },
  {
    id: 25,
    text: "What service is provided by HTTPS?",
    multi: false,
    options: [
      { l: "A", t: "Uses encryption to provide secure remote access to network devices and servers.",              c: false },
      { l: "B", t: "Resolves domain names, such as cisco.com, into IP addresses.",                                c: false },
      { l: "C", t: "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.", c: true  },
      { l: "D", t: "Allows remote access to network devices and servers.",                                         c: false }
    ]
  },
  {
    id: 26,
    text: "A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?",
    multi: false,
    options: [
      { l: "A", t: "The data flow is tracked based on the destination MAC address of the PC.",                      c: false },
      { l: "B", t: "The data flow is tracked based on the source port number used by each application.",            c: true  },
      { l: "C", t: "The data flow is tracked based on the source IP address used by the PC.",                       c: false },
      { l: "D", t: "The data flow is tracked based on the destination IP address used by the PC.",                  c: false }
    ]
  },
  {
    id: 27,
    text: "A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the administrator can use?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.240", c: false },
      { l: "B", t: "255.255.255.224", c: false },
      { l: "C", t: "255.255.255.192", c: true  },
      { l: "D", t: "255.255.255.128", c: false }
    ]
  },
  {
    id: 28,
    text: "Match the network with the correct IP address and prefix. (A=192.168.0.0/25, B=192.168.0.128/26, C=192.168.0.192/27, D=192.168.0.224/30) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "Network A: 192.168.0.0 /25",    c: true },
      { l: "B", t: "Network B: 192.168.0.128 /26",  c: true },
      { l: "C", t: "Network C: 192.168.0.192 /27",  c: true },
      { l: "D", t: "Network D: 192.168.0.224 /30",  c: true }
    ]
  },
  {
    id: 29,
    text: "What characteristic describes a DoS attack?",
    multi: false,
    options: [
      { l: "A", t: "the use of stolen credentials to access private data",                   c: false },
      { l: "B", t: "a network device that filters access and traffic coming into a network", c: false },
      { l: "C", t: "software that is installed on a user device and collects information",   c: false },
      { l: "D", t: "an attack that slows or crashes a device or network service",            c: true  }
    ]
  },
  {
    id: 31,
    text: "What service is provided by SMTP?",
    multi: false,
    options: [
      { l: "A", t: "Allows clients to send email to a mail server and the servers to send email to other servers.", c: true  },
      { l: "B", t: "Allows remote access to network devices and servers.",                                          c: false },
      { l: "C", t: "Uses encryption to provide secure remote access to network devices and servers.",               c: false },
      { l: "D", t: "An application that allows real-time chatting among remote users.",                             c: false }
    ]
  },
  {
    id: 32,
    text: "Which scenario describes a function provided by the transport layer?",
    multi: false,
    options: [
      { l: "A", t: "A student uses a VoIP phone; the unique identifier burned into the phone is a transport layer address.",    c: false },
      { l: "B", t: "A student plays a web-based movie; the movie and sound are encoded within the transport layer header.",     c: false },
      { l: "C", t: "A student has two web browser windows open; the transport layer ensures the correct web page is delivered to the correct browser window.", c: true },
      { l: "D", t: "A worker accesses a web server; the transport layer formats the screen so the page appears properly.",      c: false }
    ]
  },
  {
    id: 33,
    text: "Refer to the exhibit. Host B on subnet Teachers transmits a packet to host D on subnet Students. Which Layer 2 and Layer 3 addresses are contained in the PDUs transmitted from host B to the router?",
    multi: false,
    options: [
      { l: "A", t: "L2 dest=00-00-0c-94-36-ab, L2 src=00-00-0c-94-36-bb, L3 dest=172.16.20.200, L3 src=172.16.10.200",   c: true  },
      { l: "B", t: "L2 dest=00-00-0c-94-36-dd, L2 src=00-00-0c-94-36-bb, L3 dest=172.16.20.200, L3 src=172.16.10.200",   c: false },
      { l: "C", t: "L2 dest=00-00-0c-94-36-cd, L2 src=00-00-0c-94-36-bb, L3 dest=172.16.20.99, L3 src=172.16.10.200",    c: false },
      { l: "D", t: "L2 dest=00-00-0c-94-36-ab, L2 src=00-00-0c-94-36-bb, L3 dest=172.16.20.200, L3 src=172.16.100.200",  c: false }
    ]
  },
  {
    id: 34,
    text: "What does the term \"attenuation\" mean in data communications?",
    multi: false,
    options: [
      { l: "A", t: "strengthening of a signal by a networking device",   c: false },
      { l: "B", t: "leakage of signals from one cable pair to another",  c: false },
      { l: "C", t: "time for a signal to reach its destination",         c: false },
      { l: "D", t: "loss of signal strength as distance increases",      c: true  }
    ]
  },
  {
    id: 35,
    text: "Refer to the exhibit. An administrator is trying to configure the switch but receives an error message. What is the problem?",
    multi: false,
    options: [
      { l: "A", t: "The entire command, configure terminal, must be used.",                               c: false },
      { l: "B", t: "The administrator is already in global configuration mode.",                          c: false },
      { l: "C", t: "The administrator must first enter privileged EXEC mode before issuing the command.", c: true  },
      { l: "D", t: "The administrator must connect via the console port to access global configuration.", c: false }
    ]
  },
  {
    id: 36,
    text: "Which two protocols operate at the top layer of the TCP/IP protocol suite? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "TCP",      c: false },
      { l: "B", t: "IP",       c: false },
      { l: "C", t: "UDP",      c: false },
      { l: "D", t: "POP",      c: true  },
      { l: "E", t: "DNS",      c: true  },
      { l: "F", t: "Ethernet", c: false }
    ]
  },
  {
    id: 37,
    text: "A company has a file server that shares a folder named Public. The security policy specifies that Read-Only rights are assigned to anyone who can log in, while Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?",
    multi: false,
    options: [
      { l: "A", t: "automation",    c: false },
      { l: "B", t: "accounting",    c: false },
      { l: "C", t: "authentication", c: false },
      { l: "D", t: "authorization",  c: true  }
    ]
  },
  {
    id: 38,
    text: "What three requirements are defined by protocols used in network communications to allow message transmission across a network? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "message size",             c: true  },
      { l: "B", t: "message encoding",         c: true  },
      { l: "C", t: "connector specifications", c: false },
      { l: "D", t: "media selection",          c: false },
      { l: "E", t: "delivery options",         c: true  },
      { l: "F", t: "end-device installation",  c: false }
    ]
  },
  {
    id: 39,
    text: "What are two characteristics of IP? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "does not require a dedicated end-to-end connection",                   c: true  },
      { l: "B", t: "operates independently of the network media",                          c: true  },
      { l: "C", t: "retransmits packets if errors occur",                                  c: false },
      { l: "D", t: "re-assembles out of order packets into the correct order at receiver", c: false },
      { l: "E", t: "guarantees delivery of packets",                                       c: false }
    ]
  },
  {
    id: 40,
    text: "An employee remotely logs into the company to attend a video conference. The connection to the ISP failed but a secondary connection activated within seconds, unnoticed. What three network characteristics are described in this scenario? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "security",           c: true  },
      { l: "B", t: "quality of service", c: true  },
      { l: "C", t: "scalability",        c: false },
      { l: "D", t: "powerline networking", c: false },
      { l: "E", t: "integrity",          c: false },
      { l: "F", t: "fault tolerance",    c: true  }
    ]
  },
  {
    id: 41,
    text: "What are two common causes of signal degradation when using UTP cabling? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "improper termination",             c: true  },
      { l: "B", t: "low-quality shielding in cable",   c: false },
      { l: "C", t: "installing cables in conduit",     c: false },
      { l: "D", t: "low-quality cable or connectors",  c: true  },
      { l: "E", t: "loss of light over long distances", c: false }
    ]
  },
  {
    id: 42,
    text: "Which subnet would include the address 192.168.1.96 as a usable host address?",
    multi: false,
    options: [
      { l: "A", t: "192.168.1.64/26",  c: true  },
      { l: "B", t: "192.168.1.32/27",  c: false },
      { l: "C", t: "192.168.1.32/28",  c: false },
      { l: "D", t: "192.168.1.64/29",  c: false }
    ]
  },
  {
    id: 43,
    text: "Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "This host does not have a default gateway configured.",                       c: false },
      { l: "B", t: "There are 4 hops between this device and the device at 192.168.100.1.",       c: true  },
      { l: "C", t: "There is connectivity between this device and the device at 192.168.100.1.",  c: true  },
      { l: "D", t: "The connectivity allows for videoconferencing calls.",                        c: false },
      { l: "E", t: "The average transmission time between the two hosts is 2 milliseconds.",       c: false }
    ]
  },
  {
    id: 44,
    text: "Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "Capture traffic on the weekends when most employees are off work.",                                               c: false },
      { l: "B", t: "Capture traffic during peak utilization times to get a good representation of the different traffic types.",       c: true  },
      { l: "C", t: "Only capture traffic in the areas of the network that receive most of the traffic such as the data center.",      c: false },
      { l: "D", t: "Perform the capture on different network segments.",                                                              c: true  },
      { l: "E", t: "Only capture WAN traffic because traffic to the web is responsible for the largest amount of traffic on a network.", c: false }
    ]
  },
  {
    id: 45,
    text: "What is the consequence of configuring a router with the ipv6 unicast-routing global configuration command?",
    multi: false,
    options: [
      { l: "A", t: "All router interfaces will be automatically activated.",                                        c: false },
      { l: "B", t: "The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.",        c: true  },
      { l: "C", t: "Each router interface will generate an IPv6 link-local address.",                              c: false },
      { l: "D", t: "It statically creates a global unicast address on this router.",                               c: false }
    ]
  },
  {
    id: 46,
    text: "Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "application",  c: true  },
      { l: "B", t: "network",      c: false },
      { l: "C", t: "data link",    c: false },
      { l: "D", t: "session",      c: true  },
      { l: "E", t: "presentation", c: true  },
      { l: "F", t: "transport",    c: false }
    ]
  },
  {
    id: 47,
    text: "Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?",
    multi: false,
    options: [
      { l: "A", t: "nothing, because the router has a route to the destination network",                                     c: false },
      { l: "B", t: "open the header and use it to determine whether the data is to be sent out S0/0/0",                     c: false },
      { l: "C", t: "open the header and replace the destination MAC address with a new one",                                 c: false },
      { l: "D", t: "remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0",            c: true  }
    ]
  },
  {
    id: 48,
    text: "What will happen if the default gateway address is incorrectly configured on a host?",
    multi: false,
    options: [
      { l: "A", t: "The host cannot communicate with other hosts in the local network.",                          c: false },
      { l: "B", t: "The host cannot communicate with hosts in other networks.",                                   c: true  },
      { l: "C", t: "A ping from the host to 127.0.0.1 would not be successful.",                                 c: false },
      { l: "D", t: "The host will have to use ARP to determine the correct address of the default gateway.",     c: false },
      { l: "E", t: "The switch will not forward packets initiated by the host.",                                  c: false }
    ]
  },
  {
    id: 49,
    text: "What are two features of ARP? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "When encapsulating a packet, a host refers to the MAC address table to map IP to MAC addresses.",                          c: false },
      { l: "B", t: "An ARP request is sent to all devices and contains the IP address of the destination and its multicast MAC address.",      c: false },
      { l: "C", t: "If a host needs to send to a local destination and has the IP but not the MAC address, it generates an ARP broadcast.",    c: true  },
      { l: "D", t: "If no device responds to the ARP request, the originating node will broadcast the data packet to all devices.",            c: false },
      { l: "E", t: "If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.",                    c: true  }
    ]
  },
  {
    id: 50,
    text: "A network administrator is adding a new LAN to a branch office. The new LAN must support 90 connected devices. What is the smallest network mask the administrator can use?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.128", c: true  },
      { l: "B", t: "255.255.255.240", c: false },
      { l: "C", t: "255.255.255.248", c: false },
      { l: "D", t: "255.255.255.224", c: false }
    ]
  },
  {
    id: 51,
    text: "What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "Neighbor Solicitation",   c: true  },
      { l: "B", t: "Destination Unreachable", c: false },
      { l: "C", t: "Host Confirmation",       c: false },
      { l: "D", t: "Time Exceeded",           c: false },
      { l: "E", t: "Router Advertisement",    c: true  },
      { l: "F", t: "Route Redirection",       c: false }
    ]
  },
  {
    id: 52,
    text: "A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "DHCP", c: false },
      { l: "B", t: "SMTP", c: false },
      { l: "C", t: "DNS",  c: false },
      { l: "D", t: "HTTP", c: true  }
    ]
  },
  {
    id: 53,
    text: "What is an advantage for small organizations of adopting IMAP instead of POP?",
    multi: false,
    options: [
      { l: "A", t: "POP only allows the client to store messages in a centralized way, while IMAP allows distributed storage.",  c: false },
      { l: "B", t: "Messages are kept in the mail servers until they are manually deleted from the email client.",               c: true  },
      { l: "C", t: "When the user connects to a POP server, copies of messages are kept on the server for a short time, but IMAP keeps them for a long time.", c: false },
      { l: "D", t: "IMAP sends and retrieves email, but POP only retrieves email.",                                             c: false }
    ]
  },
  {
    id: 54,
    text: "A technician can ping the IP address of a web server but cannot successfully ping the URL address of the same server. Which software utility can the technician use to diagnose the problem?",
    multi: false,
    options: [
      { l: "A", t: "tracert",   c: false },
      { l: "B", t: "ipconfig",  c: false },
      { l: "C", t: "netstat",   c: false },
      { l: "D", t: "nslookup",  c: true  }
    ]
  },
  {
    id: 55,
    text: "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "implements CSMA/CD over legacy shared half-duplex media",                                                   c: false },
      { l: "B", t: "enables IPv4 and IPv6 to utilize the same physical medium",                                                 c: true  },
      { l: "C", t: "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",       c: false },
      { l: "D", t: "implements a process to delimit fields within an Ethernet 2 frame",                                         c: false },
      { l: "E", t: "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated", c: true  }
    ]
  },
  {
    id: 56,
    text: "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
    multi: false,
    options: [
      { l: "A", t: "The switch can communicate with other hosts on the 172.16.100.0 network.",                  c: false },
      { l: "B", t: "The switch can be remotely managed from a host on another network.",                         c: true  },
      { l: "C", t: "The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.", c: false },
      { l: "D", t: "The switch will have a management interface with the address 172.16.100.1.",                 c: false }
    ]
  },
  {
    id: 57,
    text: "What happens when the transport input ssh command is entered on the switch vty lines?",
    multi: false,
    options: [
      { l: "A", t: "The SSH client on the switch is enabled.",                                                  c: false },
      { l: "B", t: "The switch requires a username/password combination for remote access.",                    c: false },
      { l: "C", t: "Communication between the switch and remote users is encrypted.",                           c: true  },
      { l: "D", t: "The switch requires remote connections via a proprietary client software.",                 c: false }
    ]
  },
  {
    id: 58,
    text: "Match the type of threat with the cause. (electrical / hardware / environmental / maintenance) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "electrical threats → voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss",    c: true },
      { l: "B", t: "hardware threats → physical damage to servers, routers, switches, cabling plant, and workstations",                                  c: true },
      { l: "C", t: "environmental threats → temperature extremes or humidity extremes",                                                                    c: true },
      { l: "D", t: "maintenance threats → poor handling of key electrical components (ESD), lack of critical spare parts, poor cabling and labeling",    c: true }
    ]
  },
  {
    id: 59,
    text: "A disgruntled employee is using free wireless networking tools to determine information about the enterprise wireless networks, planning to use this information to hack it. What type of attack is this?",
    multi: false,
    options: [
      { l: "A", t: "DoS",           c: false },
      { l: "B", t: "access",        c: false },
      { l: "C", t: "reconnaissance", c: true  },
      { l: "D", t: "Trojan horse",   c: false }
    ]
  },
  {
    id: 60,
    text: "What service is provided by HTTP?",
    multi: false,
    options: [
      { l: "A", t: "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",                    c: false },
      { l: "B", t: "Allows for data transfers between a client and a file server.",                                                   c: false },
      { l: "C", t: "An application that allows real-time chatting among remote users.",                                               c: false },
      { l: "D", t: "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",  c: true  }
    ]
  },
  {
    id: 61,
    text: "A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "FTP",    c: false },
      { l: "B", t: "DHCP",   c: true  },
      { l: "C", t: "Telnet", c: false },
      { l: "D", t: "SSH",    c: false }
    ]
  },
  {
    id: 62,
    text: "What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "Switches become overloaded because they concentrate all the traffic from attached subnets.",                              c: false },
      { l: "B", t: "The ARP request is sent as a broadcast, and will flood the entire subnet.",                                              c: true  },
      { l: "C", t: "The network may become overloaded because ARP reply messages have a very large payload due to the MAC and IP addresses.", c: false },
      { l: "D", t: "A large number of ARP messages may slow down the switching process, causing the switch to make many MAC table changes.",  c: false },
      { l: "E", t: "All ARP request messages must be processed by all nodes on the local network.",                                          c: true  }
    ]
  },
  {
    id: 63,
    text: "A group of Windows PCs in a new subnet can access local network resources but not the Internet. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "netsh interface ipv6 show neighbor", c: false },
      { l: "B", t: "arp -a",    c: false },
      { l: "C", t: "tracert",   c: false },
      { l: "D", t: "ping",      c: true  },
      { l: "E", t: "ipconfig",  c: true  },
      { l: "F", t: "nslookup",  c: true  },
      { l: "G", t: "telnet",    c: false }
    ]
  },
  {
    id: 64,
    text: "During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?",
    multi: false,
    options: [
      { l: "A", t: "analyze the destination IP address",                       c: false },
      { l: "B", t: "switch the packet to the directly connected interface",    c: true  },
      { l: "C", t: "look up the next-hop address for the packet",              c: false },
      { l: "D", t: "discard the traffic after consulting the route table",     c: false }
    ]
  },
  {
    id: 65,
    text: "What characteristic describes antispyware?",
    multi: false,
    options: [
      { l: "A", t: "applications that protect end devices from becoming infected with malicious software",     c: true  },
      { l: "B", t: "a network device that filters access and traffic coming into a network",                  c: false },
      { l: "C", t: "software on a router that filters traffic based on IP addresses or applications",         c: false },
      { l: "D", t: "a tunneling protocol that provides remote users with secure access into the network",     c: false }
    ]
  },
  {
    id: 66,
    text: "A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?",
    multi: false,
    options: [
      { l: "A", t: "Telnet",  c: false },
      { l: "B", t: "AUX",    c: false },
      { l: "C", t: "SSH",    c: true  },
      { l: "D", t: "Console", c: false }
    ]
  },
  {
    id: 67,
    text: "What are the two most effective ways to defend against malware? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "Implement a VPN.",                                           c: false },
      { l: "B", t: "Implement network firewalls.",                               c: false },
      { l: "C", t: "Implement RAID.",                                            c: false },
      { l: "D", t: "Implement strong passwords.",                                c: false },
      { l: "E", t: "Update the operating system and other application software.", c: true  },
      { l: "F", t: "Install and update antivirus software.",                     c: true  }
    ]
  },
  {
    id: 68,
    text: "Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?",
    multi: false,
    options: [
      { l: "A", t: "brute-force attack", c: false },
      { l: "B", t: "Trojan horse",       c: true  },
      { l: "C", t: "DoS",               c: false },
      { l: "D", t: "buffer overflow",   c: false }
    ]
  },
  {
    id: 69,
    text: "Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?",
    multi: false,
    options: [
      { l: "A", t: "User Datagram Protocol field",    c: false },
      { l: "B", t: "transport layer error check field", c: false },
      { l: "C", t: "flow control field",              c: false },
      { l: "D", t: "frame check sequence field",      c: true  },
      { l: "E", t: "error correction process field",  c: false }
    ]
  },
  {
    id: 70,
    text: "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask the administrator can use?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.248", c: true  },
      { l: "B", t: "255.255.255.0",   c: false },
      { l: "C", t: "255.255.255.128", c: false },
      { l: "D", t: "255.255.255.192", c: false }
    ]
  },
  {
    id: 71,
    text: "What service is provided by POP3?",
    multi: false,
    options: [
      { l: "A", t: "Retrieves email from the server by downloading the email to the local mail application of the client.", c: true  },
      { l: "B", t: "An application that allows real-time chatting among remote users.",                                    c: false },
      { l: "C", t: "Allows remote access to network devices and servers.",                                                 c: false },
      { l: "D", t: "Uses encryption to provide secure remote access to network devices and servers.",                      c: false }
    ]
  },
  {
    id: 72,
    text: "What two security solutions are most likely to be used only in a corporate environment? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "antispyware",                c: false },
      { l: "B", t: "virtual private networks",   c: true  },
      { l: "C", t: "intrusion prevention systems", c: true },
      { l: "D", t: "strong passwords",            c: false },
      { l: "E", t: "antivirus software",          c: false }
    ]
  },
  {
    id: 73,
    text: "What characteristic describes antivirus software?",
    multi: false,
    options: [
      { l: "A", t: "applications that protect end devices from becoming infected with malicious software",  c: true  },
      { l: "B", t: "a network device that filters access and traffic coming into a network",               c: false },
      { l: "C", t: "a tunneling protocol that provides remote users with secure access into the network",  c: false },
      { l: "D", t: "software on a router that filters traffic based on IP addresses or applications",      c: false }
    ]
  },
  {
    id: 74,
    text: "What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?",
    multi: false,
    options: [
      { l: "A", t: "It checks the TTL field and if it is 0, discards the packet and sends a Destination Unreachable message.",         c: false },
      { l: "B", t: "It checks the TTL field and if it is 100, discards the packet and sends a Destination Unreachable message.",       c: false },
      { l: "C", t: "It decrements the TTL field by 1; if the result is 0, it discards the packet and sends a Time Exceeded message.", c: true  },
      { l: "D", t: "It increments the TTL field by 1; if the result is 100, it discards the packet and sends a Parameter Problem message.", c: false }
    ]
  },
  {
    id: 75,
    text: "A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "DNS",  c: false },
      { l: "B", t: "DHCP", c: false },
      { l: "C", t: "SMTP", c: false },
      { l: "D", t: "TFTP", c: true  }
    ]
  },
  {
    id: 76,
    text: "An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "Configure DNS on the router.",                 c: false },
      { l: "B", t: "Generate two-way pre-shared keys.",            c: false },
      { l: "C", t: "Configure the IP domain name on the router.",  c: true  },
      { l: "D", t: "Generate the SSH keys.",                       c: true  },
      { l: "E", t: "Enable inbound vty SSH sessions.",             c: true  },
      { l: "F", t: "Enable inbound vty Telnet sessions.",          c: false }
    ]
  },
  {
    id: 77,
    text: "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "handles communication between upper layer networking software and Ethernet NIC hardware",  c: false },
      { l: "B", t: "implements trailer with frame check sequence for error detection",                         c: true  },
      { l: "C", t: "places information in the frame that identifies which network layer protocol is encapsulated", c: false },
      { l: "D", t: "implements a process to delimit fields within an Ethernet 2 frame",                        c: true  },
      { l: "E", t: "adds Ethernet control information to network protocol data",                               c: false }
    ]
  },
  {
    id: 78,
    text: "An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?",
    multi: false,
    options: [
      { l: "A", t: "all IPv6 enabled devices on the local link",    c: false },
      { l: "B", t: "all IPv6 DHCP servers",                         c: false },
      { l: "C", t: "all IPv6 enabled devices across the network",   c: false },
      { l: "D", t: "all IPv6 configured routers on the local link", c: true  }
    ]
  },
  {
    id: 79,
    text: "What are the three parts of an IPv6 global unicast address? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "subnet ID",           c: true  },
      { l: "B", t: "subnet mask",         c: false },
      { l: "C", t: "broadcast address",   c: false },
      { l: "D", t: "global routing prefix", c: true },
      { l: "E", t: "interface ID",        c: true  }
    ]
  },
  {
    id: 80,
    text: "A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "extensive cabling",   c: false },
      { l: "B", t: "mobility options",    c: false },
      { l: "C", t: "packet collision",    c: false },
      { l: "D", t: "interference",        c: true  },
      { l: "E", t: "security",            c: true  },
      { l: "F", t: "coverage area",       c: true  }
    ]
  },
  {
    id: 81,
    text: "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way to test whether the banner is properly configured?",
    multi: false,
    options: [
      { l: "A", t: "Enter CTRL-Z at the privileged mode prompt.",           c: false },
      { l: "B", t: "Exit global configuration mode.",                       c: false },
      { l: "C", t: "Power cycle the device.",                               c: false },
      { l: "D", t: "Reboot the device.",                                    c: false },
      { l: "E", t: "Exit privileged EXEC mode and press Enter.",            c: true  }
    ]
  },
  {
    id: 82,
    text: "What method is used to manage contention-based access on a wireless network?",
    multi: false,
    options: [
      { l: "A", t: "token passing",    c: false },
      { l: "B", t: "CSMA/CA",         c: true  },
      { l: "C", t: "priority ordering", c: false },
      { l: "D", t: "CSMA/CD",         c: false }
    ]
  },
  {
    id: 83,
    text: "What is a function of the data link layer?",
    multi: false,
    options: [
      { l: "A", t: "provides the formatting of data",                              c: false },
      { l: "B", t: "provides end-to-end delivery of data between hosts",           c: false },
      { l: "C", t: "provides delivery of data between two applications",           c: false },
      { l: "D", t: "provides for the exchange of frames over a common local media", c: true }
    ]
  },
  {
    id: 84,
    text: "What is the purpose of the TCP sliding window?",
    multi: false,
    options: [
      { l: "A", t: "to ensure that segments arrive in order at the destination",  c: false },
      { l: "B", t: "to end communication when data transmission is complete",      c: false },
      { l: "C", t: "to inform a source to retransmit data from a specific point forward", c: false },
      { l: "D", t: "to request that a source decrease the rate at which it transmits data", c: true }
    ]
  },
  {
    id: 85,
    text: "What characteristic describes spyware?",
    multi: false,
    options: [
      { l: "A", t: "a network device that filters access and traffic coming into a network", c: false },
      { l: "B", t: "software that is installed on a user device and collects information about the user", c: true },
      { l: "C", t: "an attack that slows or crashes a device or network service",            c: false },
      { l: "D", t: "the use of stolen credentials to access private data",                   c: false }
    ]
  },
  {
    id: 86,
    text: "Which switching method drops frames that fail the FCS check?",
    multi: false,
    options: [
      { l: "A", t: "store-and-forward switching", c: true  },
      { l: "B", t: "borderless switching",        c: false },
      { l: "C", t: "ingress port buffering",       c: false },
      { l: "D", t: "cut-through switching",        c: false }
    ]
  },
  {
    id: 87,
    text: "Which range of link-local addresses can be assigned to an IPv6-enabled interface?",
    multi: false,
    options: [
      { l: "A", t: "FEC0::/10", c: false },
      { l: "B", t: "FDEE::/7",  c: false },
      { l: "C", t: "FE80::/10", c: true  },
      { l: "D", t: "FF00::/8",  c: false }
    ]
  },
  {
    id: 88,
    text: "What service is provided by FTP?",
    multi: false,
    options: [
      { l: "A", t: "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.", c: false },
      { l: "B", t: "An application that allows real-time chatting among remote users.",                                              c: false },
      { l: "C", t: "Allows for data transfers between a client and a file server.",                                                  c: true  },
      { l: "D", t: "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",                  c: false }
    ]
  },
  {
    id: 89,
    text: "A user is attempting to access http://www.cisco.com/ without success. Which two configuration values must be set on the host to allow this access? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "DNS server",         c: true  },
      { l: "B", t: "source port number", c: false },
      { l: "C", t: "HTTP server",        c: false },
      { l: "D", t: "source MAC address", c: false },
      { l: "E", t: "default gateway",    c: true  }
    ]
  },
  {
    id: 90,
    text: "Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "NAT adds authentication capability to IPv4.",                                              c: false },
      { l: "B", t: "NAT introduces problems for some applications that require end-to-end connectivity.",      c: true  },
      { l: "C", t: "NAT will impact negatively on switch performance.",                                        c: false },
      { l: "D", t: "NAT provides a solution to slow down the IPv4 address depletion.",                        c: true  },
      { l: "E", t: "NAT improves packet handling.",                                                            c: false },
      { l: "F", t: "NAT causes routing tables to include more information.",                                   c: false }
    ]
  },
  {
    id: 91,
    text: "What would be the interface ID of an IPv6 enabled interface with a MAC address of 1C-6F-65-C2-BD-F8 when the interface ID is generated by using the EUI-64 process?",
    multi: false,
    options: [
      { l: "A", t: "0C6F:65FF:FEC2:BDF8", c: false },
      { l: "B", t: "1E6F:65FF:FEC2:BDF8", c: true  },
      { l: "C", t: "C16F:65FF:FEC2:BDF8", c: false },
      { l: "D", t: "106F:65FF:FEC2:BDF8", c: false }
    ]
  },
  {
    id: 92,
    text: "Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?",
    multi: false,
    options: [
      { l: "A", t: "SW1 will send an ARP reply with the SW1 Fa0/1 MAC address.",   c: false },
      { l: "B", t: "SW1 will send an ARP reply with the PC2 MAC address.",          c: false },
      { l: "C", t: "PC2 will send an ARP reply with the PC2 MAC address.",          c: true  },
      { l: "D", t: "RT1 will send an ARP reply with the RT1 Fa0/0 MAC address.",    c: false },
      { l: "E", t: "RT1 will send an ARP reply with the PC2 MAC address.",          c: false }
    ]
  },
  {
    id: 93,
    text: "What service is provided by BOOTP?",
    multi: false,
    options: [
      { l: "A", t: "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.", c: false },
      { l: "B", t: "Allows for data transfers between a client and a file server.",                                c: false },
      { l: "C", t: "Legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network.", c: true },
      { l: "D", t: "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.", c: false }
    ]
  },
  {
    id: 94,
    text: "What characteristic describes adware?",
    multi: false,
    options: [
      { l: "A", t: "a network device that filters access and traffic coming into a network",             c: false },
      { l: "B", t: "software that is installed on a user device and collects information about the user", c: true  },
      { l: "C", t: "the use of stolen credentials to access private data",                               c: false },
      { l: "D", t: "an attack that slows or crashes a device or network service",                        c: false }
    ]
  },
  {
    id: 95,
    text: "When a switch configuration includes a user-defined error threshold on a per-port basis, to which switching method will the switch revert when the error threshold is reached?",
    multi: false,
    options: [
      { l: "A", t: "cut-through",     c: false },
      { l: "B", t: "store-and-forward", c: true },
      { l: "C", t: "fast-forward",    c: false },
      { l: "D", t: "fragment-free",   c: false }
    ]
  },
  {
    id: 96,
    text: "Match a statement to the related network model. (P2P network / P2P application) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "Peer-to-peer NETWORK → no dedicated server is required",           c: true },
      { l: "B", t: "Peer-to-peer NETWORK → client and server roles are set on a per request basis", c: true },
      { l: "C", t: "Peer-to-peer APPLICATION → requires a specific user interface",    c: true },
      { l: "D", t: "Peer-to-peer APPLICATION → a background service is required",      c: true }
    ]
  },
  {
    id: 97,
    text: "What are two primary responsibilities of the Ethernet MAC sublayer? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "error detection",     c: false },
      { l: "B", t: "frame delimiting",    c: false },
      { l: "C", t: "accessing the media", c: true  },
      { l: "D", t: "data encapsulation",  c: true  },
      { l: "E", t: "logical addressing",  c: false }
    ]
  },
  {
    id: 98,
    text: "Refer to the exhibit. What three facts can be determined from the viewable output of the show ip interface brief command? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "Two physical interfaces have been configured.",        c: false },
      { l: "B", t: "The switch can be remotely managed.",                  c: true  },
      { l: "C", t: "One device is attached to a physical interface.",      c: true  },
      { l: "D", t: "Passwords have been configured on the switch.",        c: false },
      { l: "E", t: "Two devices are attached to the switch.",              c: false },
      { l: "F", t: "The default SVI has been configured.",                 c: true  }
    ]
  },
  {
    id: 99,
    text: "Match each type of frame field to its function. (addressing / error detection / type / frame start) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "addressing → This field helps to direct the frame toward its destination.",             c: true },
      { l: "B", t: "error detection → This field checks if the frame has been damaged during transfer.",    c: true },
      { l: "C", t: "type → This field is used by the LLC to identify the Layer 3 protocol.",               c: true },
      { l: "D", t: "frame start → This field identifies the beginning of a frame.",                        c: true }
    ]
  },
  {
    id: 100,
    text: "What is the subnet ID associated with the IPv6 address 2001:DA48:FC5:A4:3D1B::1/64?",
    multi: false,
    options: [
      { l: "A", t: "2001:DA48::/64",       c: false },
      { l: "B", t: "2001:DA48:FC5::A4:/64", c: false },
      { l: "C", t: "2001:DA48:FC5:A4::/64", c: true  },
      { l: "D", t: "2001::/64",             c: false }
    ]
  },
  {
    id: 101,
    text: "Match the firewall function to the type of threat protection it provides. — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "prevents access by port number → application filtering",           c: true },
      { l: "B", t: "prevents access based on IP or MAC address → packet filtering",    c: true },
      { l: "C", t: "prevents unsolicited incoming sessions → stateful packet inspection", c: true },
      { l: "D", t: "prevents access to websites → URL filtering",                      c: true }
    ]
  },
  {
    id: 102,
    text: "Users are reporting longer delays in authentication and in accessing network resources during certain time periods. What kind of information should network engineers check to find out if this is part of a normal network behavior?",
    multi: false,
    options: [
      { l: "A", t: "syslog records and messages",          c: false },
      { l: "B", t: "the network performance baseline",     c: true  },
      { l: "C", t: "debug output and packet captures",     c: false },
      { l: "D", t: "network configuration files",          c: false }
    ]
  },
  {
    id: 103,
    text: "How does the service password-encryption command enhance password security on Cisco routers and switches?",
    multi: false,
    options: [
      { l: "A", t: "It requires encrypted passwords to be used when connecting remotely with Telnet.",  c: false },
      { l: "B", t: "It encrypts passwords that are stored in router or switch configuration files.",    c: true  },
      { l: "C", t: "It requires that a user type encrypted passwords to gain console access.",          c: false },
      { l: "D", t: "It encrypts passwords as they are sent across the network.",                       c: false }
    ]
  },
  {
    id: 104,
    text: "Which two statements are correct in a comparison of IPv4 and IPv6 packet headers? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "The Source Address field name from IPv4 is kept in IPv6.",                             c: true  },
      { l: "B", t: "The Version field from IPv4 is not kept in IPv6.",                                    c: false },
      { l: "C", t: "The Destination Address field is new in IPv6.",                                       c: false },
      { l: "D", t: "The Header Checksum field name from IPv4 is kept in IPv6.",                           c: false },
      { l: "E", t: "The Time-to-Live field from IPv4 has been replaced by the Hop Limit field in IPv6.", c: true  }
    ]
  },
  {
    id: 105,
    text: "A network administrator wants to have the same network mask for all networks at a particular small site (IP phones - 22 hosts, PCs - 20 hosts, Printers - 2 hosts, Scanners - 2 hosts). The site uses 192.168.10.0/24. Which single subnet mask would make the most efficient use of the available addresses for the four subnetworks?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.192", c: false },
      { l: "B", t: "255.255.255.252", c: false },
      { l: "C", t: "255.255.255.240", c: false },
      { l: "D", t: "255.255.255.248", c: false },
      { l: "E", t: "255.255.255.0",   c: false },
      { l: "F", t: "255.255.255.224", c: true  }
    ]
  },
  {
    id: 106,
    text: "What characteristic describes identity theft?",
    multi: false,
    options: [
      { l: "A", t: "the use of stolen credentials to access private data",                          c: true  },
      { l: "B", t: "software on a router that filters traffic based on IP addresses or applications", c: false },
      { l: "C", t: "software that identifies fast-spreading threats",                               c: false },
      { l: "D", t: "a tunneling protocol that provides remote users with secure access into the network", c: false }
    ]
  },
  {
    id: 107,
    text: "A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask the administrator can use?",
    multi: false,
    options: [
      { l: "A", t: "255.255.255.240", c: false },
      { l: "B", t: "255.255.255.0",   c: true  },
      { l: "C", t: "255.255.255.248", c: false },
      { l: "D", t: "255.255.255.224", c: false }
    ]
  },
  {
    id: 108,
    text: "What are three commonly followed standards for constructing and installing cabling? (Choose three.)",
    multi: true,
    options: [
      { l: "A", t: "cost per meter (foot)",                 c: false },
      { l: "B", t: "cable lengths",                         c: true  },
      { l: "C", t: "connector color",                       c: false },
      { l: "D", t: "pinouts",                               c: true  },
      { l: "E", t: "connector types",                       c: true  },
      { l: "F", t: "tensile strength of plastic insulator", c: false }
    ]
  },
  {
    id: 109,
    text: "Refer to the exhibit. What is wrong with the displayed termination?",
    multi: false,
    options: [
      { l: "A", t: "The woven copper braid should not have been removed.",   c: false },
      { l: "B", t: "The wrong type of connector is being used.",              c: false },
      { l: "C", t: "The untwisted length of each wire is too long.",         c: true  },
      { l: "D", t: "The wires are too thick for the connector that is used.", c: false }
    ]
  },
  {
    id: 110,
    text: "Match the characteristic to the category. (IP address vs MAC address) — Select ALL correct matches.",
    multi: true,
    options: [
      { l: "A", t: "IP address → contained in the Layer 3 header",                 c: true },
      { l: "B", t: "MAC address → contained in the Layer 2 header",                c: true },
      { l: "C", t: "IP address → separated into a network portion and a unique identifier", c: true },
      { l: "D", t: "MAC address → separated into OUI and a unique identifier",     c: true },
      { l: "E", t: "IP address → 32 or 128 bits",                                  c: true },
      { l: "F", t: "MAC address → 48 bits",                                        c: true }
    ]
  },
  {
    id: 111,
    text: "A client packet is received by a server. The packet has a destination port number of 143. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "IMAP",   c: true  },
      { l: "B", t: "FTP",    c: false },
      { l: "C", t: "SSH",    c: false },
      { l: "D", t: "Telnet", c: false }
    ]
  },
  {
    id: 112,
    text: "What are two characteristics shared by TCP and UDP? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "default window size",           c: false },
      { l: "B", t: "connectionless communication",  c: false },
      { l: "C", t: "port numbering",                c: true  },
      { l: "D", t: "3-way handshake",               c: false },
      { l: "E", t: "ability to carry digitized voice", c: false },
      { l: "F", t: "use of checksum",               c: true  }
    ]
  },
  {
    id: 113,
    text: "Refer to the exhibit. Which two network addresses can be assigned to the network containing 10 hosts, within the 10.18.10.0/24 range, wasting the fewest addresses? (Choose two.)",
    multi: true,
    options: [
      { l: "A", t: "10.18.10.200/28", c: false },
      { l: "B", t: "10.18.10.208/28", c: true  },
      { l: "C", t: "10.18.10.240/27", c: false },
      { l: "D", t: "10.18.10.200/27", c: false },
      { l: "E", t: "10.18.10.224/27", c: false },
      { l: "F", t: "10.18.10.224/28", c: true  }
    ]
  },
  {
    id: 114,
    text: "A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?",
    multi: false,
    options: [
      { l: "A", t: "FTP",  c: true  },
      { l: "B", t: "LDAP", c: false },
      { l: "C", t: "SLP",  c: false },
      { l: "D", t: "SNMP", c: false }
    ]
  },
  {
    id: 115,
    text: "What attribute of a NIC would place it at the data link layer of the OSI model?",
    multi: false,
    options: [
      { l: "A", t: "attached Ethernet cable",  c: false },
      { l: "B", t: "IP address",              c: false },
      { l: "C", t: "MAC address",             c: true  },
      { l: "D", t: "RJ-45 port",              c: false },
      { l: "E", t: "TCP/IP protocol stack",   c: false }
    ]
  }
];

/* ─────────────────────────────────────────
   QUIZ STATE
   ───────────────────────────────────────── */
let pool = [];         // shuffled subset for this session
let current = 0;       // index into pool
let score = 0;
let wrongItems = [];   // { question, yourLetters, correctLetters }
let selectedLetters = new Set();
let answered = false;
let postAnswerClicks = 0;

/* ─────────────────────────────────────────
   DOM REFS
   ───────────────────────────────────────── */
const screens    = { start: id('screen-start'), quiz: id('screen-quiz'), results: id('screen-results') };
const startBtn   = id('start-btn');
const nextBtn    = id('next-btn');
const retryBtn   = id('retry-btn');
const newBtn     = id('new-btn');
const exitBtn    = id('exit-btn');
const qCount     = id('q-count');
const qSlider    = id('q-slider');
const qCounter   = id('q-counter');
const progress   = id('progress-fill');
const scoreLive  = id('q-score-live');
const wrongLive  = id('q-wrong-live');
const multiHint  = id('multi-hint');
const qText      = id('q-text');
const optWrap    = id('options-wrap');
const resPct     = id('res-pct');
const resFrac    = id('res-fraction');
const resMsg     = id('res-message');
const wrongList  = id('wrong-list');
const ringFill   = id('ring-fill');
const themeBtn   = id('theme-toggle');

function id(s) { return document.getElementById(s); }

/* ─────────────────────────────────────────
   THEME TOGGLE
   ───────────────────────────────────────── */
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

/* ─────────────────────────────────────────
   SLIDER ↔ NUMBER SYNC
   ───────────────────────────────────────── */
const timeEstimate = id('time-estimate');

function formatTime(n) {
  const mins = n;
  if (mins < 60) return `~ ${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `~ ${h}h` : `~ ${h}h ${m}min`;
}

function syncCount(v) {
  qCount.value = v;
  qSlider.value = v;
  timeEstimate.textContent = formatTime(v);
}

qSlider.addEventListener('input', () => syncCount(parseInt(qSlider.value)));
qCount.addEventListener('input', () => {
  const v = Math.max(1, Math.min(111, parseInt(qCount.value) || 1));
  syncCount(v);
});

document.querySelectorAll('.pick-btn').forEach(btn => {
  btn.addEventListener('click', () => syncCount(parseInt(btn.dataset.n)));
});

/* ─────────────────────────────────────────
   CANVAS BACKGROUND — animated nodes/packets
   ───────────────────────────────────────── */
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  const nodes = [];
  const edges = [];
  const packets = [];
  const NODE_COUNT = 40;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(a, b) { return a + Math.random() * (b - a); }

  function buildGraph() {
    nodes.length = 0; edges.length = 0; packets.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({ x: rand(0.02, 0.98), y: rand(0.02, 0.98) });
    }
    for (let i = 0; i < NODE_COUNT; i++) {
      const dists = nodes.map((n, j) => ({ j, d: Math.hypot(n.x - nodes[i].x, n.y - nodes[i].y) }))
        .filter(e => e.j !== i).sort((a, b) => a.d - b.d).slice(0, 3);
      dists.forEach(e => {
        if (!edges.find(ed => (ed.a === i && ed.b === e.j) || (ed.a === e.j && ed.b === i)))
          edges.push({ a: i, b: e.j });
      });
    }
  }
  buildGraph();

  function spawnPacket() {
    const edge = edges[Math.floor(Math.random() * edges.length)];
    const rev  = Math.random() < 0.5;
    packets.push({ edge, t: 0, speed: rand(0.003, 0.008), rev });
  }
  for (let i = 0; i < 15; i++) spawnPacket();

  let raf;
  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const dark = document.documentElement.dataset.theme !== 'light';
    const edgeColor  = dark ? 'rgba(79,142,247,0.10)'  : 'rgba(29,95,232,0.08)';
    const nodeColor  = dark ? 'rgba(79,142,247,0.07)'  : 'rgba(29,95,232,0.06)';
    const pktColor   = dark ? '#4F8EF7'                : '#1D5FE8';

    // edges
    ctx.strokeStyle = edgeColor;
    ctx.lineWidth = 1.5;
    edges.forEach(e => {
      const a = nodes[e.a], b = nodes[e.b];
      ctx.beginPath();
      ctx.moveTo(a.x * W, a.y * H);
      ctx.lineTo(b.x * W, b.y * H);
      ctx.stroke();
    });

    // nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x * W, n.y * H, 3, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    });

    // packets
    ctx.fillStyle = pktColor;
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      const a = nodes[p.rev ? p.edge.b : p.edge.a];
      const b = nodes[p.rev ? p.edge.a : p.edge.b];
      p.t += p.speed;
      if (p.t >= 1) { packets.splice(i, 1); spawnPacket(); continue; }
      const x = (a.x + (b.x - a.x) * p.t) * W;
      const y = (a.y + (b.y - a.y) * p.t) * H;
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────
   NAVIGATION HELPERS
   ───────────────────────────────────────── */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

/* ─────────────────────────────────────────
   START QUIZ
   ───────────────────────────────────────── */
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  const n = Math.max(1, Math.min(111, parseInt(qCount.value) || 10));
  syncCount(n);

  pool = shuffle([...QUESTIONS]).slice(0, n);
  current = 0; score = 0; wrongItems = [];
  showScreen('quiz');
  renderQuestion();
}

/* ─────────────────────────────────────────
   RENDER QUESTION
   ───────────────────────────────────────── */
function renderQuestion() {
  const q = pool[current];
  answered = false;
  selectedLetters = new Set();
  postAnswerClicks = 0;

  // topbar
  qCounter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(pool.length).padStart(2, '0')}`;
  scoreLive.textContent = `✓ ${score}`;
  wrongLive.textContent = `✗ ${wrongItems.length}`;
  const pct = ((current + 1) / pool.length) * 100;
  progress.style.width = pct + '%';

  // hint
  if (q.multi) {
    multiHint.classList.remove('hidden');
  } else {
    multiHint.classList.add('hidden');
  }

  qText.textContent = `Q${q.id}. ${q.text}`;
  nextBtn.disabled = true;
  nextBtn.textContent = current < pool.length - 1 ? 'Confirm →' : 'Finish →';

  // render options
  optWrap.innerHTML = '';
  q.options.forEach(opt => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.dataset.letter = opt.l;

    const input = document.createElement('input');
    input.type = q.multi ? 'checkbox' : 'radio';
    input.name = 'option';
    input.value = opt.l;

    const letter = document.createElement('span');
    letter.className = 'option-letter';
    letter.textContent = opt.l;

    const text = document.createElement('span');
    text.textContent = opt.t;

    label.append(input, letter, text);
    label.addEventListener('click', (e) => {
      e.preventDefault();
      if (answered) {
        if (++postAnswerClicks >= 3) advance();
        return;
      }
      if (selectedLetters.has(opt.l)) {
        confirmAnswer();
      } else {
        handleSelect(opt.l, q.multi);
      }
    });
    optWrap.appendChild(label);
  });
}

/* ─────────────────────────────────────────
   SELECTION HANDLING
   ───────────────────────────────────────── */
function handleSelect(letter, multi) {
  if (answered) return;

  if (multi) {
    if (selectedLetters.has(letter)) {
      selectedLetters.delete(letter);
    } else {
      selectedLetters.add(letter);
    }
  } else {
    selectedLetters = new Set([letter]);
  }

  // update visual state
  optWrap.querySelectorAll('.option-label').forEach(lbl => {
    if (selectedLetters.has(lbl.dataset.letter)) {
      lbl.classList.add('selected');
    } else {
      lbl.classList.remove('selected');
    }
  });

  nextBtn.disabled = selectedLetters.size === 0;
}

/* ─────────────────────────────────────────
   CONFIRM / NEXT
   ───────────────────────────────────────── */
nextBtn.addEventListener('click', () => {
  if (!answered) {
    confirmAnswer();
  } else {
    advance();
  }
});

function confirmAnswer() {
  answered = true;
  const q = pool[current];
  const correctLetters = new Set(q.options.filter(o => o.c).map(o => o.l));
  const isCorrect = setsEqual(selectedLetters, correctLetters);

  if (isCorrect) {
    score++;
    scoreLive.textContent = `✓ ${score}`;
  } else {
    wrongItems.push({
      question: q,
      yourLetters: new Set(selectedLetters),
      correctLetters: new Set(correctLetters)
    });
    wrongLive.textContent = `✗ ${wrongItems.length}`;
  }

  // reveal correct / incorrect
  optWrap.querySelectorAll('.option-label').forEach(lbl => {
    const letter = lbl.dataset.letter;
    lbl.classList.add('locked');
    lbl.classList.remove('selected');
    if (correctLetters.has(letter)) {
      lbl.classList.add('correct');
    } else if (selectedLetters.has(letter)) {
      lbl.classList.add('incorrect');
    }
  });

  nextBtn.disabled = false;
  nextBtn.textContent = current < pool.length - 1 ? 'Next →' : 'See Results →';
}

function advance() {
  current++;
  if (current >= pool.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

/* ─────────────────────────────────────────
   RESULTS
   ───────────────────────────────────────── */
function showResults() {
  progress.style.width = '100%';
  showScreen('results');

  const pct = Math.round((score / pool.length) * 100);
  resPct.textContent = pct + '%';
  resFrac.textContent = `${score} / ${pool.length}`;

  const PASS_PCT = 70;
  const passed = pct >= PASS_PCT;

  const badge = passed
    ? `<span class="pass-badge pass">PASSED</span>`
    : `<span class="pass-badge fail">FAILED</span>`;

  let detail;
  if (passed) {
    if (pct === 100)    detail = 'Perfect score!';
    else if (pct >= 90) detail = 'Excellent work!';
    else                detail = `You scored above the ${PASS_PCT}% pass mark.`;
  } else {
    const missing = Math.ceil(pool.length * PASS_PCT / 100) - score;
    detail = `You needed ${missing} more correct answer${missing !== 1 ? 's' : ''} to pass.`;
  }

  resMsg.innerHTML = `${badge} ${detail}`;

  // animate ring
  const circumference = 327;
  const offset = circumference - (circumference * pct / 100);
  setTimeout(() => { ringFill.style.strokeDashoffset = offset; }, 80);

  // color ring by score
  ringFill.style.stroke = passed ? 'var(--correct)' : 'var(--incorrect)';

  // wrong answers list
  wrongList.innerHTML = '';
  if (wrongItems.length === 0) {
    wrongList.innerHTML = '<p style="text-align:center;color:var(--correct);font-weight:600;padding:12px 0;">All answers correct!</p>';
    return;
  }

  wrongItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'wrong-item';

    const qDiv = document.createElement('div');
    qDiv.className = 'wrong-item-q';

    const num = document.createElement('span');
    num.className = 'q-num';
    num.textContent = `Q${item.question.id}`;

    const txt = document.createTextNode(item.question.text);
    qDiv.append(num, txt);

    const optMap = Object.fromEntries(item.question.options.map(o => [o.l, o.t]));

    const yourLabel = document.createElement('span');
    yourLabel.className = 'answer-label';
    yourLabel.textContent = 'Your answer:';

    const yourPills = document.createElement('div');
    item.yourLetters.forEach(l => {
      const pill = document.createElement('span');
      pill.className = 'answer-pill pill-yours';
      pill.textContent = `${l}. ${optMap[l] || '—'}`;
      yourPills.appendChild(pill);
    });
    if (item.yourLetters.size === 0) {
      const pill = document.createElement('span');
      pill.className = 'answer-pill pill-yours';
      pill.textContent = 'No answer';
      yourPills.appendChild(pill);
    }

    const corrLabel = document.createElement('span');
    corrLabel.className = 'answer-label';
    corrLabel.style.marginTop = '8px';
    corrLabel.textContent = 'Correct answer:';

    const corrPills = document.createElement('div');
    item.correctLetters.forEach(l => {
      const pill = document.createElement('span');
      pill.className = 'answer-pill pill-correct';
      pill.textContent = `${l}. ${optMap[l] || '—'}`;
      corrPills.appendChild(pill);
    });

    div.append(qDiv, yourLabel, yourPills, corrLabel, corrPills);
    wrongList.appendChild(div);
  });
}

/* ─────────────────────────────────────────
   RESTART BUTTONS
   ───────────────────────────────────────── */
exitBtn.addEventListener('click', () => {
  showScreen('start');
});

retryBtn.addEventListener('click', () => {
  // same pool, reset state
  current = 0; score = 0; wrongItems = [];
  pool = shuffle(pool);
  ringFill.style.strokeDashoffset = 327;
  ringFill.style.stroke = 'var(--accent)';
  showScreen('quiz');
  renderQuestion();
});

newBtn.addEventListener('click', () => {
  ringFill.style.strokeDashoffset = 327;
  ringFill.style.stroke = 'var(--accent)';
  showScreen('start');
});

/* ─────────────────────────────────────────
   UTILITIES
   ───────────────────────────────────────── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}
