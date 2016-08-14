require('../lib/index');
var serializer = require('../lib/serialization/RuleSerializer').default;
var Rule = require('../lib/Rule').default;
var assert = require('assert');
var it = require("mocha").it;
var describe = require("mocha").describe;

describe('Rule YAML Serialization', function () {
  var data =
    'name: Example rule' + "\n"
    + 'type: frequency' + "\n"
    + 'index: logstash-*' + "\n"
    + 'num_events: 50' + "\n"
    + 'timeframe:' + "\n"
    + '  hours: 4' + "\n"
    + 'filter:' + "\n"
    + '  - term:' + "\n"
    + '      some_field: some_value' + "\n"
    + 'alert:' + "\n"
    + '  - email' + "\n"
    + 'email:' + "\n"
    + '  - elastalert@example.com' + "\n";

  /**
   * @type {Rule}
   */
  var rule = new Rule('Example rule', 'frequency');

  rule.config = new Map([
    ['index', 'logstash-*'],
    ['num_events', 50],
    ['timeframe', {hours: 4}],
    ['filter', [
      {term: {some_field: 'some_value'}}
    ]],
    ['alert', ['email']],
    ['email', ['elastalert@example.com']]
  ]);

  console.log(serializer.toYaml(rule));
  it('output', function () {
    assert.equal(serializer.toYaml(rule), data);
  });
});
