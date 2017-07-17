import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    apiValues: string[] = [];

    constructor(private _httpService: Http) { }

	ngOnInit() {
    
	  this._httpService.get('/api/values').subscribe(values => {
      
	     this.apiValues = values.json() as string[];
	  });
	}
}
