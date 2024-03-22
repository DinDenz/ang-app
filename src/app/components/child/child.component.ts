import { Component } from '@angular/core';

interface User {
  id : number;
  name : string;
  font : string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  newClass: boolean = true;
  secClass: boolean = false;

  changeClass (event : Event) : void {
    this.newClass = false;
    this.secClass = true;
  }

  expression = true;
  changeExpression() :void {
    this.expression = !this.expression;
  }

  deepObject : any = null;

  generateUser () {
    this.deepObject = {
      user : {
        name : "Ivan",
        surname : "Petrov",
      }
    }
  }

  users = [
    {
      id : 1,
      name: "Petr",
      font : "italic",
    },
    {
      id : 2,
      name: "Ivan",
      font : "bold",
    },
    {
      id : 3,
      name: "Alexey",
      font : "underline",
    }
  ]
  trackBy (index : number, user : User) {
    return user.id //так мы трекаем цикл по айдишникам(а ля кеу???)
  }
}
