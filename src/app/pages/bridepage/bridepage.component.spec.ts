import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridepageComponent } from './bridepage.component';

describe('BridepageComponent', () => {
  let component: BridepageComponent;
  let fixture: ComponentFixture<BridepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
