import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationpostComponent } from './presentationpost.component';

describe('PresentationpostComponent', () => {
  let component: PresentationpostComponent;
  let fixture: ComponentFixture<PresentationpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
