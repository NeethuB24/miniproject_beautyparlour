import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailpageComponent } from './nailpage.component';

describe('NailpageComponent', () => {
  let component: NailpageComponent;
  let fixture: ComponentFixture<NailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
