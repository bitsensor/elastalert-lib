export default class Rule {
  /**
   * @param name {string}
   * @param type {string}
   */
  constructor(name, type) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {string}
     */
    this.type = type;
    /**
     * @type {Alert[]}
     */
    this.alert = [];
    /**
     * @type {Map}
     */
    this.config = new Map();
  }
}
