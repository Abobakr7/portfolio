import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  profileData = {
    name: 'John',
    title: 'Creative Technologist',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    image: 'assets/images/person.svg',
  };

  downloadResume(): void {
    console.log('Downloading resume...');
  }
}
