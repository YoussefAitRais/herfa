import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisArtisantComponent } from './devis-artisant.component';

describe('DevisArtisantComponent', () => {
  let component: DevisArtisantComponent;
  let fixture: ComponentFixture<DevisArtisantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevisArtisantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevisArtisantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});