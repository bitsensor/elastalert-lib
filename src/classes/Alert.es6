export default class Alert {
  /**
   * @param name {string}
   */
  constructor(name) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {Map}
     */
    this.config = new Map();
  }
}
