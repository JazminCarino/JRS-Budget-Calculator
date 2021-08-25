import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BudgetItem } from '/Users/jazmincarino/JRS cohort5/Angular/budgetCalculator/src/shared/classes/budgetItem.class';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem;

  @Output() formSubmit = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onSubmit(form) {
    console.log(form.value);
    this.formSubmit.emit(form.value)
    form.reset();
  }
}
