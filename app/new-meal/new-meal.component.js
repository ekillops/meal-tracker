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
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
        this.cancelNewSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.submitForm = function (nameInput, detailsInput, caloriesInput) {
        var parsedCalories = parseInt(caloriesInput) ? parseInt(caloriesInput) : 0;
        var newMeal = new meal_model_1.Meal(nameInput, detailsInput, parsedCalories);
        this.newMealSender.emit(newMeal);
    };
    NewMealComponent.prototype.cancelListener = function () {
        this.cancelNewSender.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "cancelNewSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n  <h4>New Meal</h4>\n    <div class=\"input-field\">\n      <input #newName placeholder=\"Meal name\" required>\n    </div>\n    <div class=\"input-field\">\n      <input #newDetails placeholder=\"Details\">\n    </div>\n    <div class=\"input-field\">\n      <input type=\"number\" #newCalories placeholder=\"Calories\">\n    </div>\n    <button class=\"blue darken-3 btn\" (click)=\"submitForm(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';\">Save</button>\n    <button class=\"blue darken-3 btn\"(click)=\"cancelListener()\">Cancel</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map