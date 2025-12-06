import { Component, inject } from '@angular/core';
import { BlogService } from '../../../../shared/services/blog-service';

@Component({
  selector: 'app-recent-posts',
  imports: [],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.scss',
})
export class RecentPosts {
  private blogPostService = inject(BlogService);
  recentPosts = this.blogPostService.getRecent(2);
}
