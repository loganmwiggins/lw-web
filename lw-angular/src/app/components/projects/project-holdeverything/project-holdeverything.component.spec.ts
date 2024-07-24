import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHoldeverythingComponent } from './project-holdeverything.component';

describe('ProjectHoldeverythingComponent', () => {
  let component: ProjectHoldeverythingComponent;
  let fixture: ComponentFixture<ProjectHoldeverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHoldeverythingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHoldeverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
