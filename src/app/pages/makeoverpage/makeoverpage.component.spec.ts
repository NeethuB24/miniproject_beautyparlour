import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeoverpageComponent } from './makeoverpage.component';

describe('MakeoverpageComponent', () => {
  let component: MakeoverpageComponent;
  let fixture: ComponentFixture<MakeoverpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeoverpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeoverpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
