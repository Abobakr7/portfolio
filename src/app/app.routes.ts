import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { BlogPage } from './features/blog-page/blog-page';
import { WorksPage } from './features/works-page/works-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'blog', component: BlogPage },
  { path: 'works', component: WorksPage },
];
