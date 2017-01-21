export class Meal {
  private static _idCounter: number = 1;
  private static _instances: Array<Meal> = [];
  private _id: number;
  private _name: string;
  private _details: string;
  private _calories: number;

  constructor(newName: string, newDetails: string, newCalories: number){
    this._id = Meal._idCounter;
    this._name = newName;
    this._details = newDetails;
    this._calories = newCalories;
    Meal._idCounter++;
  }

  public static findById(targetId: number): Meal {
    return Meal._instances[targetId - 1];
  }

  public static getAll(): Array<Meal> {
    return Meal._instances;
  }

  public save() {
    Meal._instances.push(this);
  }

  // public setId(newId: number): void {
  //   this._id = newId;
  // }

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
