import { Component } from '@angular/core';
import { ChildcmpComponent } from '../childcmp/childcmp.component';

@Component({
  selector: 'app-parentcmp',
  imports: [ChildcmpComponent],
  template: `
    <p>
      <!-- Passing a @InputValue using PropertyBinding to the ChildCmp that is using @Input -->
      <app-childcmp
        [inputValue]="'Value from Parent'"
        (messageEvent)="receivedMsg($event)"
      ></app-childcmp>
      <!-- Using a @OutputActionFn() using EventBinding that is been send from childcmp-->
      <!-- <app-childcmp (messageEvent)="receivedMsg($event)" ></app-childcmp> -->
    </p>
  `,
  styles: ``,
})
export class ParentcmpComponent {
  receivedMsg(msg: string) {
    console.log('msg: ' + msg);
  }
}
