import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLoganwigginsComponent } from './project-loganwiggins.component';

describe('ProjectLoganwigginsComponent', () => {
  let component: ProjectLoganwigginsComponent;
  let fixture: ComponentFixture<ProjectLoganwigginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLoganwigginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLoganwigginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
