import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpapageComponent } from './spapage.component';

describe('SpapageComponent', () => {
  let component: SpapageComponent;
  let fixture: ComponentFixture<SpapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
