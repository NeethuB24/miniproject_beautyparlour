import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinpageComponent } from './skinpage.component';

describe('SkinpageComponent', () => {
  let component: SkinpageComponent;
  let fixture: ComponentFixture<SkinpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
