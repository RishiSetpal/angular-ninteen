import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() startValue: number = 0; //Input Property
  counter: number = 0;
  intervalId: any; // To store timer ID for cleanup

  constructor() {
    console.log('Constructor: counter component Created!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Detect chnages in input properties: ', changes);
    if (changes['startValue']) {
      this.counter = this.startValue; // Reset counter if startValue changes
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initializing counter');
    this.counter = this.startValue; // Initialize counter
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change Detection Running');
  }

  ngDoChanges(): void {
    console.log('ngDoChanges: ');
  }

  increment(): void {
    this.counter++;
    console.log('Counter Increamented to: ', this.counter);
  }

  decrement(): void {
    this.counter--;
    console.log('Counter Decreamented to: ', this.counter);
  }

  startAutoIncrement(): void {
    this.stopAutoIncrement(); // Ensure no duplicate intervals
    this.intervalId = setInterval(() => {
      this.counter++;
      console.log(`Auto-Increment Counter: ${this.counter}`);
    }, 1000);
  }

  stopAutoIncrement(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log(`Auto-Increment Stopped`);
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Cleaning up');
    this.stopAutoIncrement();
  }
}
