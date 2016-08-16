/**
 * Represents an ElastAlert rule.
 */
export default class Rule {
  /**
   * @param name {string}
   * @param type {string}
   */
  constructor(name, type) {
    /**
     * The name of this rule.
     * @type {string}
     */
    this.name = name;
    /**
     * The type of this rule.
     * @type {string}
     * @see https://elastalert.readthedocs.io/en/latest/ruletypes.html#ruletypes The ElastAlert documentation of available types.
     */
    this.type = type;
    /**
     * A list of alerts. This is not yet implemented. Alert options can be passed using {@link Rule.config}.
     * @type {Alert[]}
     * @private
     */
    this.alert = [];
    /**
     * A map containing the config for this rule. The values here can be used to override the {@link Rule.name} and {@link Rule.type}.
     * @type {Map}
     * @see https://elastalert.readthedocs.io/en/latest/ruletypes.html#rule-configuration-cheat-sheet The ElastAlert documentation for available keys.
     */
    this.config = new Map();
  }
}
