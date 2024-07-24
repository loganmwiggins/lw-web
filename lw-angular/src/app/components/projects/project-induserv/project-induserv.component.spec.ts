import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInduservComponent } from './project-induserv.component';

describe('ProjectInduservComponent', () => {
  let component: ProjectInduservComponent;
  let fixture: ComponentFixture<ProjectInduservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectInduservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInduservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
