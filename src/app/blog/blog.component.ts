import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public links = ['./assets/open-graph-test/medium-angular.json'];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public apiCallbackFn = (route: string) => {
    return this.http.get('./assets/open-graph-test/medium-angular.json').pipe(delay(2500));
  };

}
