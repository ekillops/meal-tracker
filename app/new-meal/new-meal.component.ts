import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h3>New Meal</h3>
    <div class="input-field">
      <input #newName placeholder="Meal name">
    </div>
    <div class="input-field">
      <input #newDetails placeholder="Details">
    </div>
    <div class="input-field">
      <input #newCalories placeholder="Calories">
    </div>
    <button class="blue darken-3 btn" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';">Save</button>
    <button class="blue darken-3 btn"(click)="cancelListener()">Cancel</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  @Output() cancelNewSender = new EventEmitter();

  submitForm(nameInput: string, detailsInput: string, caloriesInput: string): void {
    let newMeal: Meal = new Meal(nameInput, detailsInput, parseInt(caloriesInput));
    this.newMealSender.emit();
  }

  cancelListener(): void {
    this.cancelNewSender.emit();
  }

}
