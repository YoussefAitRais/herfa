import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArtisantComponent } from './dashboard-artisant.component';

describe('DashboardArtisantComponent', () => {
  let component: DashboardArtisantComponent;
  let fixture: ComponentFixture<DashboardArtisantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardArtisantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardArtisantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});