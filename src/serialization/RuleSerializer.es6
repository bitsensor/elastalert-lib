import jsyaml from "js-yaml";
import Rule from "../Rule";

export default class RuleSerializer {
  /**
   * Convert a {Rule} to YAML.
   *
   * @param rule {Rule}
   */
  static toYaml(rule) {

  }

  /**
   * Convert YAML to a {Rule}.
   * @param yaml {string}
   * @returns {Rule}
   */
  static fromYaml(yaml) {
    return RuleSerializer._fromJson(jsyaml.safeLoad(yaml));
  }

  /**
   * @param rule {Rule}
   * @private
   */
  static _toJson(rule) {

  }

  /**
   * @param json {object}
   * @private
   */
  static _fromJson(json) {
    var rule = new Rule(json.name, json.type);
    for (var key in json) {
      if (json.hasOwnProperty(key) && !['name', 'type'].includes(key)) {
        rule.config.set(key, json[key]);
      }
    }

    return rule;
  }
}
