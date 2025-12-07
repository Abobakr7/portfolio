import { Component, OnInit } from '@angular/core';
import { Work } from '../../shared/models/work-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-detail-page',
  imports: [],
  templateUrl: './work-detail-page.html',
  styleUrl: './work-detail-page.scss',
})
export class WorkDetailPage implements OnInit {
  work: Work | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.work = this.route.snapshot.data['workData'];
    if (!this.work) {
      this.router.navigate(['/works']);
      return;
    }
    console.log(this.work);
  }
}
