import { Component, Input } from '@angular/core';
import { IActivities } from './destination-activities.model';

@Component({
	selector: 'app-destination-activities',
	templateUrl: './destination-activities.component.html',
	styleUrls: ['./destination-activities.component.scss']
})
export class DestinationActivitiesComponent {
	@Input() activities: IActivities;
	get activitiesImg() {
		return `assets/img/${this.activities.img || 'placeholder'}/thumbnail.jpg`;
	}
}