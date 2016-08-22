import 'babel-polyfill';
import Alert from './classes/Alert';
import Rule from './classes/Rule';
import * as ruleSerialisation from './serialization/rule';

let elastalertLib = {
  Alert: Alert,
  Rule: Rule,
  serialisation: {
    rule: ruleSerialisation
  }
};

export default elastalertLib;
