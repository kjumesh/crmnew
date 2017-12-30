import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CalendarService {
	constructor(private http: Http) { }

  	getCalenderdata(){
  		console.log('ajax call');
  	// return this.http.get('https://jsonplaceholder.typicode.com/posts')
   //    .map(res => res.json());
   		return this.http.get('assets/calendardata.json')
            .map(res => res.json());
  	}
}
