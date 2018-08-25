import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        processing:false
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        processing:false
      };
    case alertConstants.PROCESSING:
    return {
      type: 'alert-danger',
      message: action.message,
      processing:true
    };
    case alertConstants.CLEAR:
      return {processing:false};
    default:
      return state
  }
}