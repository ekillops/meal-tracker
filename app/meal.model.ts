export class Meal {
  private _name: string;
  private _details: string;
  private _calories: number;

  constructor(newName: string, newDetails: string, newCalories: number){
    this._name = newName;
    this._details = newDetails;
    this._calories = newCalories;
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
