import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailedComponent } from './post-detailed.component';

describe('PostDetailedComponent', () => {
  let component: PostDetailedComponent;
  let fixture: ComponentFixture<PostDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
