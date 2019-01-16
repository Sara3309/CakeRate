import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCakeComponent } from './edit-cake.component';

describe('EditCakeComponent', () => {
  let component: EditCakeComponent;
  let fixture: ComponentFixture<EditCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
