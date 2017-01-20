import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'meal-page',
  template: `
    <h4>{{thisMeal.getName()}}</h4>
    <hr>
    <p>Calories: <span>{{thisMeal.getCalories()}}</span></p>
    <p>Notes: {{thisMeal.getDetails()}}</p>
  `
})

export class MealPageComponent {
  @Input() thisMeal: Meal;
}
