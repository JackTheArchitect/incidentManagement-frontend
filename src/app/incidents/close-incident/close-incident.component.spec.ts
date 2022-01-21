import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseIncidentComponent } from './close-incident.component';

describe('CloseIncidentComponent', () => {
  let component: CloseIncidentComponent;
  let fixture: ComponentFixture<CloseIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
