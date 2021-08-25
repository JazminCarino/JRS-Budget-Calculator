import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { BudgetItem } from 'src/shared/classes/budgetItem.class';


@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

 @Input() item: BudgetItem;
 @Output() xButtonClicked: EventEmitter<any> = new EventEmitter<any>();
 @Output() CardClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)

  }

  onXButtonClick(){
    this.xButtonClicked.emit();

  }

  onCardClick(){
    this.CardClicked.emit();

  }

}
