import { Component } from '@angular/core';

import { HomePageService } from '../../services/home/homePageService';
import { HomePage } from '../../dashboard/home/home.model';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent { }

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
	providers: [HomePageService]
})

export class HomeComponent {
	homePage: HomePage[] = [];
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];
	/* END */
	/* Alert component */
	public alerts: Array<Object> = [
		{
			type: 'info',
			msg: 'You have no current online assessments'
		},
		{
			type: 'success',
			msg: 'Hi, this is another test notification',
			closable: true
		}
	];

	public closeAlert(i: number): void {
		this.alerts.splice(i, 1);
	}
	/* END*/

	constructor(private _homePageService: HomePageService) {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */

	getHomePageCounts() {
		this._homePageService
			.getAll()
			.subscribe(
			p => this.homePage = p)
		console.info(this.homePage);
	}
}
