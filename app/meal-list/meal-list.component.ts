import { Component, Output, EventEmitter } from '@angular/core';
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
        <tr *ngFor="let mealInstance of Meal.instances">
          <tr>{{mealInstance.getName()}}</tr>
          <tr>{{mealInstance.getDetails()}}</tr>
          <tr>{{mealInstance.getCalories()}}</tr>
          <tr><a (click)="viewMeal(mealInstance.getId())">View Meal</a></tr>
        </tr>
      </tbody>
    </table>
  `
})

export class MealListComponent {
  @Output() viewMealSender = new EventEmitter();

  viewMeal(mealId: number) {
    this.viewMealSender.emit(mealId);
  }
}
