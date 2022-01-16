import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCompensationComponent } from './history-compensation.component';

describe('HistoryCompensationComponent', () => {
  let component: HistoryCompensationComponent;
  let fixture: ComponentFixture<HistoryCompensationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
