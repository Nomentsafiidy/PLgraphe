export class Constraint {
  private static var1: string;
  private static var2: string;
  private id: number;
  private func: string;

  constructor(id: number, func: string) {
    this.id = id;
    this.func = func;
  }

  public static setVariables = (var1: string, var2: string) => {
    Constraint.var1 = var1;
    Constraint.var2 = var2;
  };

  public static getVariables = () => {
    return { var1: Constraint.var1, var2: Constraint.var2 };
  };

  public getId = (): number => {
    return this.id;
  };

  public setId = (id: number): void => {
    this.id = id;
  };

  public getFunc = (): string => {
    return this.func;
  };

  public setFunc = (func: string): void => {
    this.func = func;
  };
}
