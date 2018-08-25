import { combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import { alert } from './alert.reducer';
import { risks } from './risks.reducer';
import { risk } from './risk.reducer';
import {riskconfig} from './riskconfig.reducer';
import {risksconfig} from './risksconfig.reducer'
const rootReducer = combineReducers({
  form:formReducer,
  alert,
  risks,
  risk,
  riskconfig,
  risksconfig
});

export default rootReducer;