
// skills.js
export const skills = {

    languagesAndFrameworks: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 90 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'React Native', level: 80 },
    ],
    toolsAndTechnologies: [
        { name: 'Visual Studio Code', level: 95 },
        { name: 'RapidAPI', level: 70 },
        { name: 'Eclipse', level: 80 },
        { name: 'Postman', level: 90 },
        { name: 'Android Studio', level: 75 },
        { name: 'GitHub', level: 90 },
        { name: 'Firebase', level: 80 },
        { name: 'Docker', level: 60 },
        { name: 'Kubernetes', level: 50 },
        { name: 'Figma', level: 80 },
    ],
    certifications: [
        {
            title: 'Junior Security Professional',
            issuer: 'Defronix',
            date: '2023-08-01',
            description: 'Certified as a Junior Security Professional, with foundational knowledge in network security, data protection, and vulnerability assessment.',
            link: 'https://www.defronix.com/certifications/junior-security-professional',
        },
    ],

    labs: [
        {
            title: 'OWASP Juice Shop',
            description: 'Hands-on practice with web app vulnerabilities using the OWASP Juice Shop intentionally insecure app.',
            skills: ['XSS', 'SQL Injection', 'Broken Authentication'],
            link: 'https://owasp.org/www-project-juice-shop/',
        },
        {
            title: 'TryHackMe: Pre Security Path',
            description: 'Interactive cybersecurity lab focused on basic networking, Linux, and security concepts.',
            skills: ['Networking', 'Linux Commands', 'Encryption Basics'],
            link: 'https://tryhackme.com/path/outline/presecurity',
        },
        {
            title: 'Hack The Box: Starting Point',
            description: 'Beginner-friendly virtual machines for practicing penetration testing and hacking techniques.',
            skills: ['Enumeration', 'Exploitation', 'Privilege Escalation'],
            link: 'https://www.hackthebox.com/starting-point',
        },
        {
            title: 'Over The Wire',
            description: 'The goal of the OverTheWire games is to provide educational resources to people willing to learn topics on cybersecurity',
            skills: ['Cross-Site Scripting', 'SQL Injection', 'CSRF', 'Linux Commands', 'Networking'],
            link: 'https://overthewire.org/wargames/',
        },
        {
            title: 'Metasploitable 2',
            description: 'Metasploitable 2 is an intentionally vulnerable Linux virtual machine designed for security training, testing security tools, and practicing penetration testing techniques',
            skills: ['Cross-Site Scripting', 'SQL Injection', 'Password Cracking',],
            link: 'https://www.cloudskillsboost.google/',
        },
        {
            title: 'Vulnhub',
            description: 'A collection of all labs covering various cybersecurity topics and tools.',
            skills: ['Malware Analysis', 'Cross-Site Scripting', 'SQL Injection', 'Password Cracking', 'CSRF', 'Linux Commands', 'Networking'],
            link: 'https://www.vulnhub.com/',
        },
    ],

    ctf: [
        {
            title: 'PicoCTF 2023',
            organizer: 'Carnegie Mellon University',
            skills: ['Binary Exploitation', 'Reverse Engineering', 'Cryptography'],
            link: 'https://picoctf.org/',
        },
        {
            title: 'NahamCon CTF',
            organizer: 'NahamSec',
            skills: ['Web Exploitation', 'Reconnaissance', 'Forensics'],
            link: 'https://ctf.nahamcon.com/',
        },
        {
            title: 'CTFLEARN',
            organizer: 'CTF LEARN',
            skills: ['Cryptography', 'Forensics', 'Blockchain', 'Pwn'],
            link: 'https://ctflearn.com/dashboard',
        },
        {
            title: 'Google Capture The Flag',
            organizer: 'Google',
            skills: ['Web Security', 'Cryptography', 'Reverse Engineering'],
            link: 'https://capturetheflag.withgoogle.com/',
        },
        {
            title: 'Port Swigger',
            organizer: 'portswigger',
            skills: ['Network Security', 'Cryptography', 'Reverse Engineering'],
            link: 'https://portswigger.net/',
        },
        {
            title: 'Hack This Site',
            organizer: 'hackthissite',
            skills: ['Web Security', 'Cryptography'],
            link: 'https://www.hackthissite.org/',
        },
        {
            title: 'Hack The Box CTF',
            organizer: 'Hack The Box',
            skills: ['Web Security', 'Cryptography', 'Reverse Engineering'],
            link: 'https://www.hackthebox.com/ctf',
        },
        {
            title: 'Root Me',
            organizer: 'root-me',
            skills: ['Web Security', 'Cryptography', 'Reverse Engineering'],
            link: 'https://www.root-me.org/?lang=en',
        },

    ]

};

