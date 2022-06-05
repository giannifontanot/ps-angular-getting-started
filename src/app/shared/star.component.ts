import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core'

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  cropWidth: number = 75;

  @Output() notify = new EventEmitter();
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick():void {
    console.log(`the raiting ${this.rating} was clicked`);
    this.notify.emit(`notify: the raiting ${this.rating} was clicked`);
  }
}
