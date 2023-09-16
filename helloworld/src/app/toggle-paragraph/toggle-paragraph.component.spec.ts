import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleParagraphComponent } from './toggle-paragraph.component';

describe('ToggleParagraphComponent', () => {
  let component: ToggleParagraphComponent;
  let fixture: ComponentFixture<ToggleParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleParagraphComponent]
    });
    fixture = TestBed.createComponent(ToggleParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
