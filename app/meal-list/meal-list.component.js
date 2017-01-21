"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MealListComponent = (function () {
    function MealListComponent() {
        this.viewMealSender = new core_1.EventEmitter();
        this.filterBy = "all";
    }
    MealListComponent.prototype.changeFilter = function (newFilter) {
        this.filterBy = newFilter;
    };
    MealListComponent.prototype.viewMeal = function (mealId) {
        this.viewMealSender.emit(mealId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "mealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "viewMealSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Details</th>\n          <th>Calories</th>\n          <th>View</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let mealInstance of mealList | calorieFilter:filterBy\">\n          <td>{{mealInstance.getName()}}</td>\n          <td>{{mealInstance.getDetails()}}</td>\n          <td>{{mealInstance.getCalories()}}</td>\n          <td><a (click)=\"viewMeal(mealInstance.getId())\">View Meal</a></td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"btn blue darken-3\" (click)=\"changeFilter('high')\"><small>High Calorie Meals</small></button>\n    <button class=\"btn blue darken-3\" (click)=\"changeFilter('low')\"><small>Low Calorie Meals</small></button>\n    <button class=\"btn blue darken-3\" (click)=\"changeFilter('all')\"><small>All Meals</small></button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map