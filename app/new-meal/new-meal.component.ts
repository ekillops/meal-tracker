import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h4>New Meal</h4>
    <div class="input-field">
      <input #newName placeholder="Meal name" required>
    </div>
    <div class="input-field">
      <input #newDetails placeholder="Details">
    </div>
    <div class="input-field">
      <input type="number" #newCalories placeholder="Calories">
    </div>
    <button class="blue darken-3 btn" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';">Save</button>
    <button class="blue darken-3 btn"(click)="cancelListener()">Cancel</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  @Output() cancelNewSender = new EventEmitter();

  submitForm(nameInput: string, detailsInput: string, caloriesInput: string): void {
    let parsedCalories = parseInt(caloriesInput) ? parseInt(caloriesInput) : 0;
    let newMeal: Meal = new Meal(nameInput, detailsInput, parsedCalories);
    this.newMealSender.emit(newMeal);
  }

  cancelListener(): void {
    this.cancelNewSender.emit();
  }

}
