import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHComponent } from './create-h.component';

describe('CreateHComponent', () => {
  let component: CreateHComponent;
  let fixture: ComponentFixture<CreateHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
