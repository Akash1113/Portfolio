import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkexpComponent } from './my-workexp.component';

describe('MyWorkexpComponent', () => {
  let component: MyWorkexpComponent;
  let fixture: ComponentFixture<MyWorkexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
