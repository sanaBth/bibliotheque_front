import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivreComponent } from './addlivre.component';

describe('AddlivreComponent', () => {
  let component: AddlivreComponent;
  let fixture: ComponentFixture<AddlivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
