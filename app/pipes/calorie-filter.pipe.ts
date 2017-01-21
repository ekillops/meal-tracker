import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../models/meal.model';

@Pipe({
  name: 'calorieFilter',
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {
  transform(mealList: Array<Meal>, filterBy: string): Array<Meal> {
    let filteredList: Array<Meal> = [];

        if(filterBy === "high") {
          for (let currentMeal of mealList) {
            if (currentMeal.getCalories() >= 500) {
              filteredList.push(currentMeal);
            }
          }
        } else if (filterBy === "low") {
          for (let currentMeal of mealList) {
            if (currentMeal.getCalories() <= 500) {
              filteredList.push(currentMeal);
            }
          }
        } else {
          filteredList = mealList;
        }
    return filteredList;
  }
}
