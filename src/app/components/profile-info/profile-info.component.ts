import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'profile-info',
	templateUrl: './profile-info.component.html',
	styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
	description: string;
	contactLinks = [
		{
			icon: "mail",
			link: "mailto:jaimecarlos.rafer08@gmail.com",
			text: "jaimecarlos.rafer08@gmail.com"
		},
		{
			icon: "code",
			link: "https://github.com/jaimexcarlos",
			text: "github.com/jaimexcarlos"
		},
		{
			icon: "work",
			link: "https://www.linkedin.com/in/jaime-carlos-rafer-bb8302208/",
			text: "linkedin.com/in/jaime-carlos-rafer"
		},
	];

	constructor() {
		this.description = "A BS Information Technology graduate from De La Salle Lipa with a strong passion for cybersecurity, IT support, and robotic process automation. My expertise includes security operations, incident response, and risk mitigation, with hands-on experience implementing Wazuh as a SIEM tool in alignment with the NIST framework for a medical supplies distributors company. I was also a student leader who actively contributed to student engagement and academic initiatives, fostering collaboration, teamwork and innovation. With a commitment to leveraging technology for security and efficiency, I aim to create impactful solutions that balance innovation with ethical responsibility in the digital landscape.";
	}

	ngOnInit(): void {
	}

}
