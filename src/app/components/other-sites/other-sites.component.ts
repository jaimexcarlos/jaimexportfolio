import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'other-sites',
	templateUrl: './other-sites.component.html',
	styleUrls: ['./other-sites.component.scss']
})
export class OtherSitesComponent implements OnInit {
	otherSites: any[];

	constructor() {
		this.otherSites = [
			{
				name: "Balai Assist",
				link: "https://balai-assist.vercel.app/",
				image: "balai-assist",
				description: "A full-stack service management platform built for Club Balai Isabel featuring a guest portal with QR code authentication, real-time staff dashboards with role-based ticket routing, an executive analytics dashboard, AI-powered chatbot, and WebSocket-based live updates. Built with React, Node.js/Express, Supabase, Redis, and Socket.IO."
			},
			{
				name: "NIST Incident Response Program with SIEM",
				link: "#",
				image: "thesis-siem",
				description: "An Information Security Incident Response Program based on the NIST Incident Response Framework with the integration of Wazuh SIEM for One Agno Medical Solutions. Won Best Thesis Award at De La Salle Lipa."
			},
			{
				name: "Stock Market Blog SEO Optimization",
				link: "#",
				image: "seo-project",
				description: "Optimized and uploaded 270 stock market-related blog posts by applying SEO strategies such as metadata structuring, internal linking, and hyperlink optimization to improve search engine ranking and content discoverability."
			}
		];
	}

	ngOnInit(): void {
	}
}
