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
     {"imageName": "foto 1.jpg", "title": "Titulo Noticia 1"},
     {"imageName": "foto 2.jpg", "title": "Titulo Noticia 2"},
     {"imageName": "foto 3.jpg", "title": "Titulo Noticia 3"},
     {"imageName": "foto 4.jpg", "title": "Titulo Noticia 4"},
     {"imageName": "foto 5.jpg", "title": "Titulo Noticia 5"},
     {"imageName": "foto 6.jpg", "title": "Titulo Noticia 6"},
     {"imageName": "foto 7.jpg", "title": "Titulo Noticia 7"},
     {"imageName": "foto 8.jpg", "title": "Titulo Noticia 8"},
     {"imageName": "foto 9.jpg", "title": "Titulo Noticia 9"},
     {"imageName": "foto 10.jpg", "title": "Titulo Noticia 10"},


    ];

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.blogImages.forEach(element => {

      console.log(element.imageName)
      
    });

  }

  public apiCallbackFn = (route: string) => {
    return this.http.get('./assets/open-graph-test/medium-angular.json').pipe(delay(2500));
  };

}
