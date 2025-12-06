import { Component, computed, inject, input } from '@angular/core';
import { WorkService } from '../../services/work-service';

@Component({
  selector: 'app-works-list',
  imports: [],
  templateUrl: './works-list.html',
  styleUrl: './works-list.scss',
})
export class WorksList {
  limit = input<number>();
  private workService = inject(WorkService);
  recentWorks = computed(() => this.workService.getRecent(this.limit()));
}
