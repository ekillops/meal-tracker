import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'meal-page',
  template: `
    <h3>{{thisMeal.getName()}}</h3>
    <hr>
    <p>Calories: <span>{{thisMeal.getCalories()}}</span></p>
    <p>Notes: {{thisMeal.getDetails()}}</p>
  `
})

export class MealPageComponent {
  @Input() thisMeal: Meal;
}
