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
}
