import { Component, computed, inject, input } from '@angular/core';
import { BlogService } from '../../../../shared/services/blog-service';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {
  limit = input<number>();
  private blogService = inject(BlogService);
  recentPosts = computed(() => this.blogService.getRecent(this.limit()));
}
