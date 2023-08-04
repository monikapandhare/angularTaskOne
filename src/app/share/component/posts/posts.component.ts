import { Component, OnInit } from '@angular/core';
import { Iposts } from '../../models/post';
import { posts } from '../../const/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postArray!: Array<Iposts>
  constructor() { }

  ngOnInit(): void {
    this.postArray = posts
    console.log(this.postArray)
  }

}
