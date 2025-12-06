import { Component, input } from '@angular/core';
import { WorksList } from '../../shared/components/works-list/works-list';

@Component({
  selector: 'app-works-page',
  imports: [WorksList],
  templateUrl: './works-page.html',
  styleUrl: './works-page.scss',
})
export class WorksPage {
  worksLimit = input<number>(4);
}
