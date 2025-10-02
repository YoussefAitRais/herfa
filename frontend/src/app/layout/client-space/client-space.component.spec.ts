import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientSpaceComponent } from './client-space.component';
import { HttpClientModule } from '@angular/common/http';

describe('ClientSpaceComponent', () => {
  let component: ClientSpaceComponent;
  let fixture: ComponentFixture<ClientSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSpaceComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});