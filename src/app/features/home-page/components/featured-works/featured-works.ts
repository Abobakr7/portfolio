import { Component, inject, signal } from '@angular/core';
import { WorksList } from '../../../../shared/components/works-list/works-list';

@Component({
  selector: 'app-featured-works',
  imports: [WorksList],
  templateUrl: './featured-works.html',
  styleUrl: './featured-works.scss',
})
export class FeaturedWorks {
  worksLimit = signal<number>(3);
}
