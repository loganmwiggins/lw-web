import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIntconvertComponent } from './project-intconvert.component';

describe('ProjectIntconvertComponent', () => {
  let component: ProjectIntconvertComponent;
  let fixture: ComponentFixture<ProjectIntconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIntconvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIntconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
