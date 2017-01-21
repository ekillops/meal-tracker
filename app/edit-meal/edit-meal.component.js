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
var meal_model_1 = require('../models/meal.model');
var EditMealComponent = (function () {
    function EditMealComponent() {
        this.updateMealListener = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.submitForm = function (nameInput, detailsInput, caloriesInput) {
        if (nameInput !== "")
            this.currentMeal.setName(nameInput);
        if (detailsInput !== "")
            this.currentMeal.setDetails(detailsInput);
        if (caloriesInput !== "")
            this.currentMeal.setCalories(parseInt(caloriesInput));
        this.updateMealListener.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], EditMealComponent.prototype, "currentMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "updateMealListener", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n  <h4>New Meal</h4>\n    <div class=\"input-field\">\n      <input #newName value={{currentMeal.getName()}} required>\n    </div>\n    <div class=\"input-field\">\n      <input #newDetails value={{currentMeal.getDetails()}}>\n    </div>\n    <div class=\"input-field\">\n      <input type=\"number\" #newCalories value={{currentMeal.getCalories()}}>\n    </div>\n    <button class=\"blue darken-3 btn\" (click)=\"submitForm(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';\">Save</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map