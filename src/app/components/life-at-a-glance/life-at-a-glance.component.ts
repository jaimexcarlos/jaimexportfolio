import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'life-at-a-glance',
	templateUrl: './life-at-a-glance.component.html',
	styleUrls: ['./life-at-a-glance.component.scss']
})
export class LifeAtAGlanceComponent implements OnInit {
	featureIndex = 0;
	features = [
		{
			title: "At a glance",
			icon: "lightbulb",
			link: "#",
			shortDescription: "A quick overview of my interests and hobbies.",
			description: ["Click any of the cards below to learn about the activities and interests that keep me busy outside of work. Cards will be updated as I pick up new hobbies."],
		},
		{
			title: "Gaming",
			icon: "sports_esports",
			link: "#",
			shortDescription: "I love playing video games on my Nintendo Switch and Mac during my spare time.",
			description: ["I enjoy playing games like Stardew Valley, NBA 2K, and more on my Nintendo Switch and Mac.", "Gaming is my go-to way to unwind after a long day of work or studying."],
			isNew: false
		},
		{
			title: "Movies",
			icon: "movie",
			link: "https://boxd.it/3vt7P",
			shortDescription: "I love watching films — I've logged 1,040 films on my Letterboxd account!",
			description: ["I'm a huge film enthusiast. I've logged over 1,040 films on Letterboxd and I'm always looking for new recommendations.", "I enjoy a wide range of genres, from indie films to blockbusters. Tracking and reviewing films has become a hobby in itself."],
		},
		{
			title: "Reading",
			icon: "menu_book",
			link: "#",
			shortDescription: "I love reading YA books and fantasy novels.",
			description: ["I'm a big fan of Young Adult fiction and fantasy novels. Harry Potter and Percy Jackson are some of my all-time favorites.", "Reading is how I escape into different worlds and recharge my imagination."],
		},
		{
			title: "Cybersecurity",
			icon: "security",
			link: "#",
			shortDescription: "Passionate about securing systems and understanding threats.",
			description: ["My specialization in Information Security sparked a deep interest in cybersecurity operations, incident response, and threat detection.", "I enjoy staying updated on the latest vulnerabilities and security tools like Wazuh, Nmap, and Burp Suite."],
		},
		{
			title: "Learning",
			icon: "psychology",
			link: "#",
			shortDescription: "Continuous learning is key in the ever-evolving tech landscape.",
			description: ["I'm always picking up new skills — from full-stack development to cloud deployment and automation.", "Certifications from Google and Microsoft have been part of my journey, and I plan to keep expanding my knowledge."],
		},
	];
	feature: string;

	constructor() {
		this.feature = this.features[this.featureIndex].title;
	}

	ngOnInit(): void {
	}

	setFeature(index: number) {
		this.featureIndex = index;
		this.feature = this.features[index].title;
	}

	skipFeature(action: "previous" | "next") {
		let newFeatureIndex = this.featureIndex;
		if (action === "previous") {
			if (this.featureIndex !== 1 && this.featureIndex !== 0) {
				newFeatureIndex -= 1;
			}
		} else {
			if (this.featureIndex !== this.features.length - 1) {
				newFeatureIndex += 1;
			}
		}
		this.setFeature(newFeatureIndex);
	}

	shuffleFeature() {
		let randomFeatureIndex: number;

		do {
			randomFeatureIndex = this.getRandomNumberFromFeatures();
		} while (randomFeatureIndex === this.featureIndex);

		this.setFeature(randomFeatureIndex);
	}

	getRandomNumberFromFeatures() {
		const min = 1;
		const max = (this.features.length - 1);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
