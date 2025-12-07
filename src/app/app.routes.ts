import { ResolveFn, Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { BlogPage } from './features/blog-page/blog-page';
import { WorksPage } from './features/works-page/works-page';
import { WorkDetailPage } from './features/work-detail-page/work-detail-page';
import { Work } from './shared/models/work-model';
import { inject } from '@angular/core';
import { WorkService } from './shared/services/work-service';

const workResolver: ResolveFn<Work | null> = (route) => {
  const userService = inject(WorkService);
  const workId = route.paramMap.get('workId') as string;
  return userService.getWorkById(parseInt(workId)) ?? null;
};

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'blog', component: BlogPage, title: 'Blog' },
  { path: 'works', component: WorksPage, title: 'Featured Works' },
  { path: 'works/:workId', component: WorkDetailPage, resolve: { workData: workResolver } },
];
