import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-application';

  tooltip = "подсказка";

  user = {
    name: "Ivan",
    age: 40,
  }

  arrOfAges = [{ age: 18 }, { age: 38 }, { age: 28 }];

  handleClick () : void {
    this.arrOfAges.push({age : 25})
  }
}

