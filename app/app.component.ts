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
    <br>
    <button class="btn blue darken-3" (click)="toggleShowNewMeal()">New Meal</button>
    <button class="btn blue darken-3" (click)="toggleShowMealList()">Meal List</button>
    <meal-list *ngIf="showMealList === true" [mealList]="allMeals" (viewMealSender)="viewMealPage($event)"></meal-list>
    <meal-page *ngIf="showMealPage === true" [thisMeal]="selectedMeal" (saveEditSender)="saveUpdate($event)"></meal-page>
    <new-meal *ngIf="showNewMeal === true" (newMealSender)= "saveMeal($event)" (cancelNewSender)="toggleShowNewMeal()"></new-meal>
  </div>
  `
})

export class AppComponent {
  allMeals: Array<Meal> = Meal.getAll();
  selectedMeal: Meal = this.allMeals[0];

  showMealPage: boolean = false;
  showMealList: boolean = false;
  showNewMeal: boolean = false;

  saveMeal(sentMeal: Meal): void {
    this.showNewMeal = false;
    this.showMealPage = false;

    sentMeal.save();
    this.showMealList = true;
  }

  viewMealPage(targetId: number): void {
    this.showNewMeal = false;
    this.showMealList = false;

    this.selectedMeal = Meal.findById(targetId);
    this.showMealPage = true;
  }

  toggleShowNewMeal(): void {
    this.showMealList = false;
    this.showMealPage = false;

    this.showNewMeal = !this.showNewMeal;
  }

  toggleShowMealList(): void {
    this.showMealPage = false;
    this.showNewMeal = false;

    this.showMealList = !this.showMealList;
  }


}
