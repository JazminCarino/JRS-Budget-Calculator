import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../../shared/classes/budgetItem.class';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }
  ngOnInit(): void {
  }
  addItem(newItem: BudgetItem) {
    //add the item to a list of all budget items
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  onDelete(item: BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index,1)
    this.totalBudget -= item.amount;

  }
updateItem(updateEvent){
  this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
  this.totalBudget += updateEvent.new.amount - updateEvent.old.amount

}

}
