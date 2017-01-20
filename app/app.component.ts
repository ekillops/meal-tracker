import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Meal } from './models/meal.model';

@Component({
  selector: 'app-root',
  template: `
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <span class="brand-logo center light">Meal Tracker</span>
    </div>
  </nav>
  <div class="container">
    <meal-list *ngIf="showMealList === true" (viewMealSender)="viewMealPage($event)"></meal-list>
  </div>
  `
})

export class AppComponent {
  selectedMeal: Meal;

  showMealPage: boolean = false;
  showMealList: boolean = false;

  viewMealPage(targetId: number) {
    this.selectedMeal = Meal.findById(targetId);

    this.showMealList = false;
    this.showMealPage = true;
  }


}
