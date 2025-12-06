import { Component, input } from '@angular/core';
import { BlogList } from './components/blog-list/blog-list';

@Component({
  selector: 'app-blog-page',
  imports: [BlogList],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  postsLimit = input<number>(4);
}
