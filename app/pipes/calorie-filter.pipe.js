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
var CalorieFilterPipe = (function () {
    function CalorieFilterPipe() {
    }
    CalorieFilterPipe.prototype.transform = function (mealList, filterBy) {
        var filteredList = [];
        if (filterBy === "high") {
            for (var _i = 0, mealList_1 = mealList; _i < mealList_1.length; _i++) {
                var currentMeal = mealList_1[_i];
                if (currentMeal.getCalories() >= 500) {
                    filteredList.push(currentMeal);
                }
            }
        }
        else if (filterBy === "low") {
            for (var _a = 0, mealList_2 = mealList; _a < mealList_2.length; _a++) {
                var currentMeal = mealList_2[_a];
                if (currentMeal.getCalories() <= 500) {
                    filteredList.push(currentMeal);
                }
            }
        }
        else {
            filteredList = mealList;
        }
        return filteredList;
    };
    CalorieFilterPipe = __decorate([
        core_1.Pipe({
            name: 'calorieFilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], CalorieFilterPipe);
    return CalorieFilterPipe;
}());
exports.CalorieFilterPipe = CalorieFilterPipe;
//# sourceMappingURL=calorie-filter.pipe.js.map