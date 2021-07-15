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

   blogImages = [
     {"imageName": "IMG_2170.jpeg", "title": "Titulo Noticia 1"},
     {"imageName": "foto 2.jpg", "title": "Titulo Noticia 2"},
     {"imageName": "metodologia plays.jpg", "title": "Titulo Noticia 3"},
     {"imageName": "IMG_2160.jpeg", "title": "Titulo Noticia 4"},
     {"imageName": "metologia arts and crafts.jpg", "title": "Titulo Noticia 5"},
     {"imageName": "foto 6.jpg", "title": "Titulo Noticia 6"},
     {"imageName": "foto 7.jpg", "title": "Titulo Noticia 7"},
     {"imageName": "foto 8.jpg", "title": "Titulo Noticia 8"}
    ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public apiCallbackFn = (route: string) => {
    return this.http.get('./assets/open-graph-test/medium-angular.json').pipe(delay(2500));
  };

}
