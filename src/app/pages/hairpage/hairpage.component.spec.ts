import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairpageComponent } from './hairpage.component';

describe('HairpageComponent', () => {
  let component: HairpageComponent;
  let fixture: ComponentFixture<HairpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
