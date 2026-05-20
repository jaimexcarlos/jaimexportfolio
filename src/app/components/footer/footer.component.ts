import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	footerLinks = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
