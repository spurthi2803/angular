import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
  template: `
    <button (click)="toggleParagraph()">Toggle Paragraph</button>
    <p *ngIf="isParagraphVisible">This is a hidden paragraph.</p>
  `,
})
export class ToggleParagraphComponent {
  isParagraphVisible = true;

  toggleParagraph() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
