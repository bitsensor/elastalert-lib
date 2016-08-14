require('../lib/index');
var serializer = require('../lib/serialization/RuleSerializer').default;
var assert = require('assert');
var it = require("mocha").it;
var describe = require("mocha").describe;

describe('Rule YAML Deserialization', function () {
  var data = serializer.fromYaml(
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
    + '  - elastalert@example.com' + "\n");

  it('name', function () {
    assert.equal(data.name, 'Example rule');
  });

  it('type', function () {
    assert.equal(data.type, 'frequency');
  });

  it('config', function () {
    assert.equal(data.config.size, 6);
    assert.equal(data.config.get('index'), 'logstash-*');
    assert.equal(data.config.get('num_events'), 50);
    assert.equal(data.config.get('timeframe')['hours'], 4);
    assert.equal(data.config.get('filter').length, 1);
    assert.equal(data.config.get('filter')[0]['term']['some_field'], 'some_value');
    assert.equal(data.config.get('alert'), 'email');
    assert.equal(data.config.get('email'), 'elastalert@example.com');
  });
});
