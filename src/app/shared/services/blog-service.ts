import { Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/blog-post-model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      tags: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      tags: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 3,
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: ['Express', 'Handlebars'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 4,
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: ['Express', 'Handlebars'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]);

  getPosts() {
    return this.blogPosts();
  }

  getRecent(limit: number = 2) {
    return this.blogPosts().slice(0, limit);
  }
}
