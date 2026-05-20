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
				icon: "codicon:terminal-linux",
				text: "Linux"
			},
			{
				icon: "simple-icons:wazuh",
				text: "Wazuh (SIEM)"
			},
			{
				icon: "simple-icons:nmap",
				text: "Nmap"
			},
			{
				icon: "simple-icons:burpsuite",
				text: "Burp Suite"
			},
			{
				icon: "simple-icons:tenableness",
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
				icon: "simple-icons:uipath",
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
				icon: "cib:node-js",
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
				icon: "cib:python",
				text: "Python"
			},
			{
				icon: "simple-icons:mysql",
				text: "MySQL"
			},
		];

		this.generalStack = [
			{
				icon: "cib:git",
				text: "Git"
			},
			{
				icon: "cib:github",
				text: "GitHub"
			},
			{
				icon: "simple-icons:render",
				text: "Render"
			},
			{
				icon: "cib:wordpress",
				text: "WordPress"
			},
			{
				icon: "simple-icons:vitest",
				text: "Vitest"
			},
			{
				icon: "akar-icons:vscode-fill",
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
