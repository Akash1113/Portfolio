import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterpersonalComponent } from './my-interpersonal.component';

describe('MyInterpersonalComponent', () => {
  let component: MyInterpersonalComponent;
  let fixture: ComponentFixture<MyInterpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInterpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInterpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
