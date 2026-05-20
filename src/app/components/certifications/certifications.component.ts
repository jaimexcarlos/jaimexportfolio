import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'certifications',
	templateUrl: './certifications.component.html',
	styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
	certifications = [
		{
			name: "Google Cybersecurity Professional Certificate",
			issuer: "Google",
			date: "February 2025",
			verifyLink: "https://coursera.org/verify/professional-cert/QDWM0C7PZVR3",
			type: "professional"
		},
		{
			name: "Google IT Support Professional Certificate",
			issuer: "Google",
			date: "2025",
			verifyLink: "",
			type: "professional"
		},
		{
			name: "Microsoft IT Support Specialist Professional Certificate",
			issuer: "Microsoft",
			date: "2025",
			verifyLink: "",
			type: "professional"
		},
		{
			name: "Lean Six Sigma White Belt Certified",
			issuer: "Management and Strategy Institute",
			date: "December 2024",
			verifyLink: "",
			type: "professional"
		},
		{
			name: "Foundations of Cybersecurity",
			issuer: "Google",
			date: "January 2025",
			verifyLink: "https://coursera.org/verify/6K82AJCRRNVF",
			type: "course"
		},
		{
			name: "Play It Safe: Manage Security Risks",
			issuer: "Google",
			date: "January 2025",
			verifyLink: "https://coursera.org/verify/55XWR8YS4RNQ",
			type: "course"
		},
		{
			name: "Connect and Protect: Networks and Network Security",
			issuer: "Google",
			date: "January 2025",
			verifyLink: "https://coursera.org/verify/W9QHJRG4DMWO",
			type: "course"
		},
		{
			name: "Tools of the Trade: Linux and SQL",
			issuer: "Google",
			date: "January 2025",
			verifyLink: "https://coursera.org/verify/U4A3IKGD5GPA",
			type: "course"
		},
		{
			name: "Assets, Threats, and Vulnerabilities",
			issuer: "Google",
			date: "January 2025",
			verifyLink: "https://coursera.org/verify/HCWR4L7LKVAZ",
			type: "course"
		},
		{
			name: "Sound the Alarm: Detection and Response",
			issuer: "Google",
			date: "February 2025",
			verifyLink: "https://coursera.org/verify/TKEUWNTDDU2H",
			type: "course"
		},
		{
			name: "Automate Cybersecurity Tasks with Python",
			issuer: "Google",
			date: "February 2025",
			verifyLink: "https://coursera.org/verify/5U8GDRGBJOHS",
			type: "course"
		},
		{
			name: "Technical Support Fundamentals",
			issuer: "Google",
			date: "February 2025",
			verifyLink: "https://coursera.org/verify/Q9RGYXG9XG5M",
			type: "course"
		},
		{
			name: "The Bits and Bytes of Computer Networking",
			issuer: "Google",
			date: "May 2025",
			verifyLink: "https://coursera.org/verify/GYTTFFH2M38S",
			type: "course"
		},
		{
			name: "Operating Systems and You: Becoming a Power User",
			issuer: "Google",
			date: "June 2025",
			verifyLink: "https://coursera.org/verify/DDYP91YI7N1Y",
			type: "course"
		},
		{
			name: "Foundations: Data, Data, Everywhere",
			issuer: "Google",
			date: "April 2025",
			verifyLink: "https://coursera.org/verify/5ATERDIQPY9W",
			type: "course"
		},
		{
			name: "Ask Questions to Make Data-Driven Decisions",
			issuer: "Google",
			date: "April 2025",
			verifyLink: "https://coursera.org/verify/PSKEAU10J4PW",
			type: "course"
		},
		{
			name: "Introduction to HTML, CSS, & JavaScript",
			issuer: "IBM",
			date: "February 2025",
			verifyLink: "https://coursera.org/verify/E1EJPDW4D65O",
			type: "course"
		},
		{
			name: "Smartbooks And Power BI: Basic with Analytics",
			issuer: "FIT Academy",
			date: "2025",
			verifyLink: "",
			type: "course"
		},
	];

	professionalCerts: any[];
	courseCerts: any[];

	constructor() {
		this.professionalCerts = this.certifications.filter(c => c.type === 'professional');
		this.courseCerts = this.certifications.filter(c => c.type === 'course');
	}

	ngOnInit(): void {
	}
}
