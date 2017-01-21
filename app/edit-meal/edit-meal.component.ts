import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../models/meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <h4>New Meal</h4>
    <div class="input-field">
      <input #newName value={{currentMeal.getName()}} required>
    </div>
    <div class="input-field">
      <input #newDetails value={{currentMeal.getDetails()}}>
    </div>
    <div class="input-field">
      <input type="number" #newCalories value={{currentMeal.getCalories()}}>
    </div>
    <button class="blue darken-3 btn" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';">Save</button>
    `
})

export class EditMealComponent {
  @Input() currentMeal: Meal;
  @Output() updateMealListener = new EventEmitter();

  submitForm(nameInput: string, detailsInput: string, caloriesInput: string) {
    if (nameInput !== "") this.currentMeal.setName(nameInput);
    if (detailsInput !== "") this.currentMeal.setDetails(detailsInput);
    if (caloriesInput !== "") this.currentMeal.setCalories(parseInt(caloriesInput));

    this.updateMealListener.emit();
  }

}
