import { Component, Input, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'meal-page',
  template: `
    <h4>{{thisMeal.getName()}}</h4>
    <hr>
    <p>Calories: <span>{{thisMeal.getCalories()}}</span></p>
    <p>Notes: {{thisMeal.getDetails()}}</p>
    <br>
    <button class="btn blue darken-2" (click)="toggleEditMeal()">Edit</button>
    <edit-meal *ngIf="showEditForm === true" [currentMeal]="thisMeal" (updateMealListener)="saveEdit()"></edit-meal>
  `
})

export class MealPageComponent {
  @Input() thisMeal: Meal;

  showEditForm: boolean = false;

  toggleEditMeal(): void {
    this.showEditForm = !this.showEditForm;
  }

  saveEdit(): void {
    this.showEditForm = false;
  }
}
