import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { RecentPosts } from './components/recent-posts/recent-posts';
import { FeaturedWorks } from './components/featured-works/featured-works';

@Component({
  selector: 'app-home-page',
  imports: [Hero, RecentPosts, FeaturedWorks],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
