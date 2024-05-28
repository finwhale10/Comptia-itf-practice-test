const questions = [
    {
        question: "Which of the following is the primary function of the CPU?",
        choices: ["Store data", "Process instructions", "Display images", "Manage memory"],
        correctAnswer: 1
    },
    {
        question: "What does RAM stand for?",
        choices: ["Read Access Memory", "Random Access Memory", "Run Active Memory", "Random Active Memory"],
        correctAnswer: 1
    },
    {
        question: "Which type of software controls the computer hardware?",
        choices: ["Application software", "Operating system", "Utility software", "Firmware"],
        correctAnswer: 1
    },
    {
        question: "What is the binary equivalent of the decimal number 10?",
        choices: ["1010", "0101", "1100", "1001"],
        correctAnswer: 0
    },
    {
        question: "Which component is considered the 'brain' of the computer?",
        choices: ["Motherboard", "CPU", "RAM", "Hard Drive"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a non-volatile storage device?",
        choices: ["RAM", "Cache", "Hard Drive", "Register"],
        correctAnswer: 2
    },
    {
        question: "What does BIOS stand for?",
        choices: ["Basic Internal Operating System", "Basic Input Output System", "Binary Input Output System", "Basic Instruction Output System"],
        correctAnswer: 1
    },
    {
        question: "Which port is commonly used for connecting printers?",
        choices: ["USB", "HDMI", "Ethernet", "Parallel"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is an example of an input device?",
        choices: ["Monitor", "Printer", "Keyboard", "Speakers"],
        correctAnswer: 2
    },
    {
        question: "What does the acronym LAN stand for?",
        choices: ["Large Area Network", "Local Area Network", "Long Area Network", "Local Access Network"],
        correctAnswer: 1
    },
    {
        question: "Which type of memory is used for temporary storage while a computer is running?",
        choices: ["ROM", "RAM", "SSD", "HDD"],
        correctAnswer: 1
    },
    {
        question: "Which operating system is open source?",
        choices: ["Windows", "macOS", "Linux", "iOS"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is not an example of an operating system?",
        choices: ["Windows 10", "macOS", "Microsoft Office", "Linux"],
        correctAnswer: 2
    },
    {
        question: "Which protocol is used to send email?",
        choices: ["HTTP", "SMTP", "FTP", "SNMP"],
        correctAnswer: 1
    },
    {
        question: "What does URL stand for?",
        choices: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Record Locator", "Universal Record Locator"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a firewall?",
        choices: ["To store data", "To manage user accounts", "To protect networks from unauthorized access", "To compress files"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an example of an optical storage device?",
        choices: ["HDD", "SSD", "DVD", "RAM"],
        correctAnswer: 2
    },
    {
        question: "Which company developed the Windows operating system?",
        choices: ["Apple", "Google", "Microsoft", "IBM"],
        correctAnswer: 2
    },
    {
        question: "What is the main function of the motherboard?",
        choices: ["To power the computer", "To connect all of the computer's components", "To store data", "To process instructions"],
        correctAnswer: 1
    },
    {
        question: "Which type of network topology uses a central hub?",
        choices: ["Ring", "Star", "Bus", "Mesh"],
        correctAnswer: 1
    },
    {
        question: "What does HTTP stand for?",
        choices: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperTransfer Text Protocol", "HyperTransmission Text Protocol"],
        correctAnswer: 0
    },
    {
        question: "What is the main purpose of an operating system?",
        choices: ["To run software applications", "To manage hardware and software resources", "To store files", "To connect to the internet"],
        correctAnswer: 1
    },
    {
        question: "Which type of memory is permanent and cannot be changed?",
        choices: ["RAM", "Cache", "ROM", "Virtual Memory"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a programming language?",
        choices: ["HTML", "HTTP", "FTP", "SMTP"],
        correctAnswer: 0
    },
    {
        question: "What is the function of a router?",
        choices: ["To store data", "To process data", "To direct traffic between networks", "To connect peripherals to the computer"],
        correctAnswer: 2
    },
    {
        question: "Which type of malware is designed to replicate itself and spread to other systems?",
        choices: ["Virus", "Trojan", "Worm", "Spyware"],
        correctAnswer: 2
    },
    {
        question: "What is an IP address?",
        choices: ["A unique identifier for a network device", "A type of malware", "A network protocol", "A computer program"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is not a type of network?",
        choices: ["LAN", "WAN", "PAN", "SAN"],
        correctAnswer: 3
    },
    {
        question: "What is the primary function of a DNS server?",
        choices: ["To store web pages", "To translate domain names into IP addresses", "To route internet traffic", "To provide email services"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a file compression format?",
        choices: ["JPEG", "MP3", "ZIP", "HTML"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is not an example of an output device?",
        choices: ["Monitor", "Printer", "Speaker", "Keyboard"],
        correctAnswer: 3
    },
    {
        question: "Which command-line tool is used to check the connectivity between two network devices?",
        choices: ["ping", "tracert", "ipconfig", "netstat"],
        correctAnswer: 0
    },
    {
        question: "What does GUI stand for?",
        choices: ["Graphical User Interface", "General User Interface", "Graphical Unified Interface", "General Unified Interface"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a web browser?",
        choices: ["Windows", "Google", "Internet Explorer", "Bing"],
        correctAnswer: 2
    },
    {
        question: "Which type of software application would you use to create a spreadsheet?",
        choices: ["Word processor", "Database", "Presentation", "Spreadsheet"],
        correctAnswer: 3
    },
    {
        question: "What is phishing?",
        choices: ["A method of encrypting data", "A technique used to gain sensitive information by pretending to be a trustworthy entity", "A type of network protocol", "A way of compressing files"],
        correctAnswer: 1
    },
    {
        question: "Which component is responsible for executing instructions in a computer?",
        choices: ["Motherboard", "RAM", "CPU", "Hard Drive"],
        correctAnswer: 2
    },
    {
        question: "What does SSD stand for?",
        choices: ["Solid State Drive", "Secure Storage Device", "Serial Storage Disk", "Solid Storage Device"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a popular programming language for web development?",
        choices: ["C#", "Python", "JavaScript", "Java"],
        correctAnswer: 2
    },
    {
        question: "What does the 'ping' command do?",
        choices: ["Tests the reachability of a host on an IP network", "Displays the current network configuration", "Displays all active network connections", "Traces the route packets take to a network host"],
        correctAnswer: 0
    },
    {
        question: "Which device connects multiple devices on a LAN and uses MAC addresses to forward data?",
        choices: ["Router", "Switch", "Hub", "Modem"],
        correctAnswer: 1
    },
    {
        question: "What does VPN stand for?",
        choices: ["Virtual Private Network", "Virtual Personal Network", "Verified Private Network", "Verified Personal Network"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a type of volatile memory?",
        choices: ["ROM", "Hard Drive", "SSD", "RAM"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a subnet mask?",
        choices: ["To specify the network portion of an IP address", "To encrypt network traffic", "To convert domain names to IP addresses", "To control network access"],
        correctAnswer: 0
    },
    {
        question: "Which type of network topology involves every device being connected to every other device?",
        choices: ["Star", "Bus", "Ring", "Mesh"],
        correctAnswer: 3
    },
    {
        question: "What does SMTP stand for?",
        choices: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Simple Mail Transmission Protocol", "Secure Mail Transmission Protocol"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of a database management system (DBMS)?",
        choices: ["MySQL", "HTML", "CSS", "JavaScript"],
        correctAnswer: 0
    },
    {
        question: "What is the function of an IP address in a network?",
        choices: ["To uniquely identify a device on the network", "To encrypt data being transmitted", "To store user data", "To connect to a web server"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a characteristic of solid-state drives (SSDs)?",
        choices: ["Low cost", "High capacity", "Fast access times", "Mechanical parts"],
        correctAnswer: 2
    },
    {
        question: "What does HTTPS stand for?",
        choices: ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol Service", "HyperText Transfer Protocol Standard", "HyperText Transfer Protocol Simple"],
        correctAnswer: 0
    },
    {
        question: "Which protocol is used for secure communication over a computer network?",
        choices: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correctAnswer: 2
    },
    {
        question: "What is the main purpose of a computer's power supply unit (PSU)?",
        choices: ["To cool the computer", "To convert AC power to DC power", "To store data", "To manage memory"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of an open-source operating system?",
        choices: ["Windows", "macOS", "Linux", "iOS"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a network firewall?",
        choices: ["To store data", "To manage network connections", "To protect against unauthorized access", "To route network traffic"],
        correctAnswer: 2
    },
    {
        question: "What does DNS stand for?",
        choices: ["Data Network Service", "Domain Name System", "Digital Network System", "Domain Network Service"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of a mobile operating system?",
        choices: ["Windows", "Linux", "iOS", "macOS"],
        correctAnswer: 2
    },
    {
        question: "What is the function of a network switch?",
        choices: ["To connect multiple devices on a network and forward data based on MAC addresses", "To provide internet connectivity", "To connect different networks together", "To store data"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a cloud storage service?",
        choices: ["Google Drive", "Microsoft Word", "Adobe Photoshop", "Mozilla Firefox"],
        correctAnswer: 0
    },
    {
        question: "What does GUI stand for?",
        choices: ["Graphical User Interface", "General User Interface", "Graphical Universal Interface", "General Universal Interface"],
        correctAnswer: 0
    },
    {
        question: "What type of network covers a large geographic area, such as a city or country?",
        choices: ["LAN", "WAN", "PAN", "CAN"],
        correctAnswer: 1
    },
    {
        question: "Which programming language is primarily used for developing Android apps?",
        choices: ["Python", "Swift", "Java", "C++"],
        correctAnswer: 2
    },
    {
        question: "What is malware?",
        choices: ["Software designed to protect your computer", "Software designed to cause harm to your computer", "Software used to browse the internet", "Software used to compress files"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a feature of a solid-state drive (SSD)?",
        choices: ["Mechanical parts", "High latency", "Low power consumption", "High power consumption"],
        correctAnswer: 2
    },
    {
        question: "What does IoT stand for?",
        choices: ["Internet of Technology", "Internet of Things", "Interconnected of Technology", "Interconnected of Things"],
        correctAnswer: 1
    }
];

