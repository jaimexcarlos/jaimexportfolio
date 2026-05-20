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
				icon: "fa-brands:linux",
				text: "Linux"
			},
			{
				icon: "mdi:shield-lock",
				text: "Wazuh (SIEM)"
			},
			{
				icon: "mdi:console-network",
				text: "Nmap"
			},
			{
				icon: "mdi:bug",
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
				icon: "mdi:monitor",
				text: "VirtualBox"
			},
			{
				icon: "mdi:robot-industrial",
				text: "UiPath (RPA)"
			},
		];

		this.feWebStack = [
			{
				icon: "fa-brands:react",
				text: "React"
			},
			{
				icon: "fa-brands:js-square",
				text: "JavaScript"
			},
			{
				icon: "fa-brands:html5",
				text: "HTML5"
			},
			{
				icon: "fa-brands:css3-alt",
				text: "CSS3"
			},
			{
				icon: "mdi:tailwind",
				text: "Tailwind CSS"
			},
			{
				icon: "mdi:lightning-bolt",
				text: "Vite"
			},
			{
				icon: "fa-brands:figma",
				text: "Figma"
			},
		];

		this.beWebStack = [
			{
				icon: "fa-brands:node-js",
				text: "Node.js"
			},
			{
				icon: "mdi:server",
				text: "Express.js"
			},
			{
				icon: "mdi:database",
				text: "Supabase"
			},
			{
				icon: "mdi:memory",
				text: "Redis"
			},
			{
				icon: "mdi:lan-connect",
				text: "Socket.IO"
			},
			{
				icon: "fa-brands:python",
				text: "Python"
			},
			{
				icon: "mdi:database-search",
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
				icon: "mdi:cloud-upload",
				text: "Render"
			},
			{
				icon: "fa-brands:wordpress",
				text: "WordPress"
			},
			{
				icon: "mdi:test-tube",
				text: "Vitest"
			},
			{
				icon: "mdi:microsoft-visual-studio-code",
				text: "VSCode"
			},
			{
				icon: "mdi:robot",
				text: "OpenAI API"
			},
		];
	}

	ngOnInit(): void {
	}

}
