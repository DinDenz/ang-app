import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-application';

  tooltip = "подсказка";
  text = "ghbnd"

  user = {
    name: "Ivan",
    age: 40,
  }

  arrOfAges = [{ age: 18 }, { age: 38 }, { age: 28 }];

  handleClick(): void {
    this.arrOfAges.push({ age: 25 })
  }

  color = 'blue';

  changeColor(color: string): void {

    switch (color) {
      case 'yellow':
        this.color = "yellow";
        break;
      case 'red':
        this.color = "red";
        break;
      case 'default':
        this.color = "blue";
        break;
    }
  }

  backColor = 'rgba(150,115,200,0.7)';

  setNewSsilName(newText : string) {
    this.text = newText;
  }


}

