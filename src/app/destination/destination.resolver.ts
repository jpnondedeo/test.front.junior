import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IDestination } from './destination.model';
import { IActivities } from './components/activities/destination-activities.model';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Injectable()
export class DestinationResolver implements Resolve<[IDestination, IActivities[]]> {
	constructor(
		protected destinationService: DestinationService,
	) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[IDestination, IActivities[]]> {
		const id = route.paramMap.get('id');
		return this.destinationService.getDestinationById(id).pipe(
			withLatestFrom(
				this.destinationService.getDestinationActivities(id)
			)
		);
	}
}
