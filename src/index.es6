import 'babel-polyfill';
import Alert from './Alert';
import Rule from './Rule';
import RuleSerializer from './serialization/RuleSerializer';

let elastalertLib = {
  Alert: Alert,
  Rule: Rule,
  RuleSerializer: RuleSerializer
};

export default elastalertLib;
