"use strict";
var Meal = (function () {
    function Meal(newName, newDetails, newCalories) {
        this._id = Meal._idCounter;
        this._name = newName;
        this._details = newDetails;
        this._calories = newCalories;
        Meal._idCounter++;
    }
    Meal.findById = function (targetId) {
        return Meal._instances[targetId - 1];
    };
    Meal.getAll = function () {
        return Meal._instances;
    };
    Meal.prototype.save = function () {
        Meal._instances.push(this);
    };
    // public setId(newId: number): void {
    //   this._id = newId;
    // }
    Meal.prototype.getId = function () {
        return this._id;
    };
    Meal.prototype.setName = function (newName) {
        this._name = newName;
    };
    Meal.prototype.getName = function () {
        return this._name;
    };
    Meal.prototype.setDetails = function (newDetails) {
        this._details = newDetails;
    };
    Meal.prototype.getDetails = function () {
        return this._details;
    };
    Meal.prototype.setCalories = function (newCalories) {
        this._calories = newCalories;
    };
    Meal.prototype.getCalories = function () {
        return this._calories;
    };
    Meal._idCounter = 1;
    Meal._instances = [];
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map