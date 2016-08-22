import 'babel-polyfill';
import Alert from './alert';
import Rule from './alert';
import RuleSerializer from './serialization/RuleSerializer';

let elastalertLib = {
  Alert: Alert,
  Rule: Rule,
  RuleSerializer: RuleSerializer
};

export default elastalertLib;
