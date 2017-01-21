import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
          <th>Calories</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let mealInstance of mealList | calorieFilter:filterBy">
          <td>{{mealInstance.getName()}}</td>
          <td>{{mealInstance.getDetails()}}</td>
          <td>{{mealInstance.getCalories()}}</td>
          <td><a (click)="viewMeal(mealInstance.getId())">View Meal</a></td>
        </tr>
      </tbody>
    </table>
    <button class="btn blue darken-3" (click)="changeFilter('high')"><small>High Calorie Meals</small></button>
    <button class="btn blue darken-3" (click)="changeFilter('low')"><small>Low Calorie Meals</small></button>
    <button class="btn blue darken-3" (click)="changeFilter('all')"><small>All Meals</small></button>
  `
})

export class MealListComponent {
  @Input() mealList: Array<Meal>;
  @Output() viewMealSender = new EventEmitter();

  filterBy: string = "all";

  changeFilter(newFilter: string) {
    this.filterBy = newFilter;
  }

  viewMeal(mealId: number) {
    this.viewMealSender.emit(mealId);
  }
}
