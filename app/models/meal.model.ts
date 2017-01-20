export class Meal {
  public static instances: Array<Meal>;
  private _id: number;
  private _name: string;
  private _details: string;
  private _calories: number;

  constructor(newName: string, newDetails: string, newCalories: number){
    this._id = Meal.instances.length + 1;
    this._name = newName;
    this._details = newDetails;
    this._calories = newCalories;
    Meal.instances.push(this);
  }

  public static findById(targetId: number): Meal {
    return Meal.instances[targetId - 1];
  }

  public setId(newId: number): void {
    this._id = newId;
  }
  public getId(): number {
    return this._id;
  }

  public setName(newName: string): void {
    this._name = newName;
  }
  public getName(): string {
    return this._name;
  }

  public setDetails(newDetails: string): void {
    this._details = newDetails;
  }
  public getDetails(): string {
    return this._details;
  }

  public setCalories(newCalories: number): void {
    this._calories = newCalories;
  }
  public getCalories(): number {
    return this._calories;
  }
}
