import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {

/*   @Input() title = 'title';
 */
@Input() title! : string;

@Output() sayHi = new EventEmitter<string>();

onSayHi() {
 this.sayHi.emit(this.title + 'Hello');
}

@Input() counter! : number;
@Output() counterChange = new EventEmitter<number>();

increment() {
  this.counterChange.emit(this.counter + 1);
}
decrement() {
  this.counterChange.emit(this.counter - 1);
}

}
