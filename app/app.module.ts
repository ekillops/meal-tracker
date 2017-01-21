import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealPageComponent } from './meal-page/meal-page.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { CalorieFilterPipe } from './pipes/calorie-filter.pipe';

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, MealListComponent, NewMealComponent, MealPageComponent, EditMealComponent, CalorieFilterPipe ],
 bootstrap:    [ AppComponent ]
})

export class AppModule { }
