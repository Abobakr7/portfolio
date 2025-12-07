import { Component, computed, inject, input } from '@angular/core';
import { WorkService } from '../../services/work-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-list',
  imports: [],
  templateUrl: './works-list.html',
  styleUrl: './works-list.scss',
})
export class WorksList {
  constructor(private router: Router) {}

  limit = input<number>();
  private workService = inject(WorkService);
  recentWorks = computed(() => this.workService.getRecent(this.limit()));

  navigate(workId: number) {
    this.router.navigate([`/works/${workId}`]);
  }
}
