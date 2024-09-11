import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHComponent } from './edit-h.component';

describe('EditHComponent', () => {
  let component: EditHComponent;
  let fixture: ComponentFixture<EditHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
