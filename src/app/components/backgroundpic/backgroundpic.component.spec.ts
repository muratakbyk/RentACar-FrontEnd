import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundpicComponent } from './backgroundpic.component';

describe('BackgroundpicComponent', () => {
  let component: BackgroundpicComponent;
  let fixture: ComponentFixture<BackgroundpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
