import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisDashboardComponent } from './devis-dashboard.component';

describe('DevisDashboardComponent', () => {
  let component: DevisDashboardComponent;
  let fixture: ComponentFixture<DevisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevisDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
