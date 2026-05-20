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
				icon: "cib:docker",
				text: "Docker"
			},
			{
				icon: "mdi:desktop-classic",
				text: "VirtualBox"
			},
			{
				icon: "mdi:robot-industrial",
				text: "UiPath (RPA)"
			},
		];

		this.feWebStack = [
			{
				icon: "cib:react",
				text: "React"
			},
			{
				icon: "cib:javascript",
				text: "JavaScript"
			},
			{
				icon: "cib:html5",
				text: "HTML5"
			},
			{
				icon: "cib:css3",
				text: "CSS3"
			},
			{
				icon: "cib:tailwind-css",
				text: "Tailwind CSS"
			},
			{
				icon: "mdi:lightning-bolt",
				text: "Vite"
			},
			{
				icon: "cib:figma",
				text: "Figma"
			},
		];

		this.beWebStack = [
			{
				icon: "cib:node-js",
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
				icon: "cib:redis",
				text: "Redis"
			},
			{
				icon: "mdi:lan-connect",
				text: "Socket.IO"
			},
			{
				icon: "cib:python",
				text: "Python"
			},
			{
				icon: "cib:mysql",
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
				icon: "mdi:cloud-upload",
				text: "Render"
			},
			{
				icon: "cib:wordpress",
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
