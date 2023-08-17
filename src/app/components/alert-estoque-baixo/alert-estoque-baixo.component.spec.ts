import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertEstoqueBaixoComponent } from './alert-estoque-baixo.component';

describe('AlertEstoqueBaixoComponent', () => {
  let component: AlertEstoqueBaixoComponent;
  let fixture: ComponentFixture<AlertEstoqueBaixoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertEstoqueBaixoComponent]
    });
    fixture = TestBed.createComponent(AlertEstoqueBaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
