import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() Courses: number=0;
  @Input() Movies: number = 0;


  selectedRadioButtonValue: string = 'Courses';
  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectedChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue)
  }
}
