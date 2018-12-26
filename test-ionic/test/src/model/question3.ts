export class Question3Model {
  private _status: boolean;
  private _results: Array<Question3Result>;

  /**
   * Getter status
   * @return {boolean}
   */
  public get status(): boolean {
    return this._status;
  }

  /**
   * Setter status
   * @param {boolean} value
   */
  public set status(value: boolean) {
    this._status = value;
  }

  /**
   * Getter results
   * @return {Array<Question3Result>}
   */
  public get results(): Array<Question3Result> {
    return this._results;
  }

  /**
   * Setter results
   * @param {Array<Question3Result>} value
   */
  public set results(value: Array<Question3Result>) {
    this._results = value;
  }
}

export class Question3Result {
  private _index: number;
  private _value: string;
  /**
   * Getter index
   * @return {number}
   */
  public get index(): number {
    return this._index;
  }

  /**
   * Getter value
   * @return {string}
   */
  public get value(): string {
    return this._value;
  }

  /**
   * Setter index
   * @param {number} value
   */
  public set index(value: number) {
    this._index = value;
  }

  /**
   * Setter value
   * @param {string} value
   */
  public set value(value: string) {
    this._value = value;
  }
}
