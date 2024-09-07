import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHComponent } from './show-h.component';

describe('ShowHComponent', () => {
  let component: ShowHComponent;
  let fixture: ComponentFixture<ShowHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
