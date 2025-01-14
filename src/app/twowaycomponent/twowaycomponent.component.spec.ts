import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaycomponentComponent } from './twowaycomponent.component';

describe('TwowaycomponentComponent', () => {
  let component: TwowaycomponentComponent;
  let fixture: ComponentFixture<TwowaycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaycomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
