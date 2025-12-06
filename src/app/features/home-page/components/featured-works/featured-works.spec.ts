import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWorks } from './featured-works';

describe('FeaturedWorks', () => {
  let component: FeaturedWorks;
  let fixture: ComponentFixture<FeaturedWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedWorks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedWorks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
