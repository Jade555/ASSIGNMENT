export class Question1Model {
  private _status: boolean;
  private _results: Array<number>;

  /**
   * Getter status
   * @return {boolean}
   */
  public get status(): boolean {
    return this._status;
  }

  /**
   * Getter results
   * @return {Array<number>}
   */
  public get results(): Array<number> {
    return this._results;
  }

  /**
   * Setter status
   * @param {boolean} value
   */
  public set status(value: boolean) {
    this._status = value;
  }

  /**
   * Setter results
   * @param {Array<number>} value
   */
  public set results(value: Array<number>) {
    this._results = value;
  }
}
