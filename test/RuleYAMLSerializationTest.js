var elastalertLib = require('../lib/index');
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
  var rule = new elastalertLib.Rule('Example rule', 'frequency');

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

  it('output', function () {
    assert.equal(elastalertLib.serialisation.rule.toYaml(rule), data);
  });
});
