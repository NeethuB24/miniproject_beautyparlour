import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadpageComponent } from './threadpage.component';

describe('ThreadpageComponent', () => {
  let component: ThreadpageComponent;
  let fixture: ComponentFixture<ThreadpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
