import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksList } from './works-list';

describe('WorksList', () => {
  let component: WorksList;
  let fixture: ComponentFixture<WorksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
