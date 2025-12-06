import { Injectable, signal } from '@angular/core';
import { Work } from '../models/work-model';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private works = signal<Work[]>([
    {
      id: 1,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imgUrl: 'assets/images/dashboard.svg',
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      year: '2018',
      category: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imgUrl: 'assets/images/woman-portrait.svg',
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      year: '2018',
      category: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imgUrl: 'assets/images/sign-drawing.svg',
    },
    {
      id: 4,
      title: 'Components',
      year: '2018',
      category: 'Components, Design',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imgUrl: 'assets/images/figure.svg',
    },
  ]);

  getWorks() {
    return this.works();
  }

  getRecent(limit: number = 3) {
    return this.works().slice(0, limit);
  }

  getWorkById(id: number) {
    return this.works().find((work) => work.id === id);
  }
}
