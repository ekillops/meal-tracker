import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { MealListComponent } from './meal-list/meal-list.component';

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent ],
 bootstrap:    [ AppComponent ]
})

export class AppModule { }
