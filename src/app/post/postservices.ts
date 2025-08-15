import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Postservices {

  private readonly BASE_ULR= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http:HttpClient){

  }

  getPosts(): Observable<PostModel[]>{
     return this.http.get<PostModel[]>(`${this.BASE_ULR}`);
  }
  
  getPostsById(id:number): Observable<PostModel>{
     return this.http.get<PostModel>("https://jsonplaceholder.typicode.com/posts/1");
  }

}
