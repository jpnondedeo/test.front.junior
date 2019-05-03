import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { IActivities } from './components/activities/destination-activities.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DestinationService {
	constructor(protected http: HttpClient) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		const params = {} as any;
		params.orderBy = 'name';
		if (!!clue) {
			params['name$like'] = clue;
		}
		return this.http.get<IDestination[]>(`/api/destinations`, { params: params });
	}
	getDestinationById(id: string): Observable<IDestination> {
		return this.http.get<IDestination>(`/api/destination/${id}`);
	}
	getDestinationActivities(id: string): Observable<IActivities[]> {
		const params = {} as any;
		params.orderBy = 'name';
		params.destinationId = id;
		return this.http.get<IActivities[]>(`/api/activities`, {params: params});
	}
}
