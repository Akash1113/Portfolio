import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConceptualComponent } from './my-conceptual.component';

describe('MyConceptualComponent', () => {
  let component: MyConceptualComponent;
  let fixture: ComponentFixture<MyConceptualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConceptualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
