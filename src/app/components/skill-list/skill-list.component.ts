import { Component, OnInit } from '@angular/core';
// import { locate } from '@iconify/json';

@Component({
	selector: 'skill-list',
	templateUrl: './skill-list.component.html',
	styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
	devOpsStack: Array<any>;
	feWebStack: Array<any>;
	beWebStack: Array<any>;
	generalStack: Array<any>;

	constructor() {
		this.devOpsStack = [
			{
				icon: "cib:linux",
				text: "Linux"
			},
			{
				icon: "simple-icons:wazuh",
				text: "Wazuh (SIEM)"
			},
			{
				icon: "mdi:radar",
				text: "Nmap"
			},
			{
				icon: "simple-icons:portswigger",
				text: "Burp Suite"
			},
			{
				icon: "mdi:shield-search",
				text: "Tenable Nessus"
			},
			{
				icon: "fa-brands:docker",
				text: "Docker"
			},
			{
				icon: "simple-icons:virtualbox",
				text: "VirtualBox"
			},
			{
				icon: "mdi:robot",
				text: "UiPath (RPA)"
			},
		];

		this.feWebStack = [
			{
				icon: "fa-brands:react",
				text: "React"
			},
			{
				icon: "cib:javascript",
				text: "JavaScript"
			},
			{
				icon: "fa-brands:html5",
				text: "HTML5"
			},
			{
				icon: "fa-brands:css3",
				text: "CSS3"
			},
			{
				icon: "simple-icons:tailwindcss",
				text: "Tailwind CSS"
			},
			{
				icon: "simple-icons:vite",
				text: "Vite"
			},
			{
				icon: "simple-icons:figma",
				text: "Figma"
			},
		];

		this.beWebStack = [
			{
				icon: "fa-brands:node-js",
				text: "Node.js"
			},
			{
				icon: "simple-icons:express",
				text: "Express.js"
			},
			{
				icon: "simple-icons:supabase",
				text: "Supabase"
			},
			{
				icon: "simple-icons:redis",
				text: "Redis"
			},
			{
				icon: "simple-icons:socketdotio",
				text: "Socket.IO"
			},
			{
				icon: "fa-brands:python",
				text: "Python"
			},
			{
				icon: "simple-icons:mysql",
				text: "MySQL"
			},
		];

		this.generalStack = [
			{
				icon: "fa-brands:git-alt",
				text: "Git"
			},
			{
				icon: "fa-brands:github",
				text: "GitHub"
			},
			{
				icon: "simple-icons:render",
				text: "Render"
			},
			{
				icon: "fa-brands:wordpress",
				text: "WordPress"
			},
			{
				icon: "simple-icons:vitest",
				text: "Vitest"
			},
			{
				icon: "simple-icons:visualstudiocode",
				text: "VSCode"
			},
			{
				icon: "simple-icons:openai",
				text: "OpenAI API"
			},
		];
	}

	ngOnInit(): void {
	}

}
