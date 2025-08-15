import { Component, OnInit } from '@angular/core';
import { Postservices } from './postservices';
import { PostModel } from './post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {

  posts: PostModel[]=[];

  post: PostModel | null=null;

  constructor(private readonly service:Postservices){

  }

  ngOnInit(): void {
      this.getPostById(1);
      this.service.getPosts().subscribe({
         next:data=>{
           this.posts=data;
           //console.log(this.posts);
         },
         error: err=>{
           console.log('Error cargando post',err);
         },
         complete: ()=>{
           console.log('Carga de post completada')
         }
      })

  }

  getPostById(id:number){
    this.service.getPostsById(id).subscribe({
         next:data=>{
           this.post=data;
           console.log(this.post);
         },
         error: err=>{
           console.log('Error cargando post',err);
         },
         complete: ()=>{
           console.log('Carga de post completada')
         }
      })

  }


}
