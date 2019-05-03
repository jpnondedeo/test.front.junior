import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivities } from './components/activities/destination-activities.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities: IActivities[];
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.destination = this.route.snapshot.data['destination'][0];
		this.activities = this.route.snapshot.data['destination'][1];
	}
}
