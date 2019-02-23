import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailListComponent } from './movie-detail-list.component';

describe('MovieDetailListComponent', () => {
  let component: MovieDetailListComponent;
  let fixture: ComponentFixture<MovieDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
