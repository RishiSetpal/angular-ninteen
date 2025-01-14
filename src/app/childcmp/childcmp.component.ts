import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcmp',
  imports: [],
  template: `
    <p>
      <!-- Using InputValue via Interpolation(that always holds String) -->
      {{inputValue}}
      <button type="button" (click)="notifyParent()">Perform Action in Parent</button>
    </p>
  `,
  styles: ``,
})
export class ChildcmpComponent {
  @Input() inputValue: string = '';
  
  @Output() messageEvent = new EventEmitter<string>();

  notifyParent() {
    this.messageEvent.emit('Going back to Parent from ChildComponent');
  }

}
