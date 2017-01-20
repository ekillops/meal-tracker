"use strict";
var Meal = (function () {
    //Default constructor
    function Meal(newName, newDetails, newCalories) {
        this._id = Meal.instances.length + 1;
        this._name = newName;
        this._details = newDetails;
        this._calories = newCalories;
        Meal.instances.push(this);
    }
    Meal.findById = function (targetId) {
        return Meal.instances[targetId - 1];
    };
    Meal.prototype.setId = function (newId) {
        this._id = newId;
    };
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
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map