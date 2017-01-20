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
        <tr *ngFor="let mealInstance of mealList">
          <td>{{mealInstance.getName()}}</td>
          <td>{{mealInstance.getDetails()}}</td>
          <td>{{mealInstance.getCalories()}}</td>
          <td><a (click)="viewMeal(mealInstance.getId())">View Meal</a></td>
        </tr>
      </tbody>
    </table>
  `
})

export class MealListComponent {
  @Input() mealList: Array<Meal>;
  @Output() viewMealSender = new EventEmitter();

  viewMeal(mealId: number) {
    this.viewMealSender.emit(mealId);
  }
}
