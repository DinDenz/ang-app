import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent {

  @Input() backColor!: string;

  shadow = '2px 2px 7px red'

  changeShadowColor(): void {
    this.shadow = '3px 4px 8px blue'
  }

  @Output() ChangeSsilText = new EventEmitter<string>();

  textChange() {
    this.ChangeSsilText.emit('ссылка');
  }
  //----------------------------------------------------------------------------------------------------
  phone = "147369258";

  ngOnInit(): void {
    setTimeout(() => { this.updatePhone() }, 3000)
  }

  updatePhone(): void {
    this.phone = Math.round(Math.random() * 1000000000).toString();
  }

  user = {
    name: "Jhon",
    surname: "Doe",
  }

  fullName(): string {
    return this.user.name + " " + this.user.surname
  }

  onInput(event : Event) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
    //console.log(this.user, this.phone)
  }

  login = '';
  password = '';

  onSubmit () {
    if (this.login && this.password) {
      console.log(`Успешно авторизировались с логином:${this.login} и паролем:${this.password}`);
      this.login = '';
      this.password = '';
      return 
    }
    console.log('заполните форму');
  }


}
