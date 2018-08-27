import { riskconfigConstants } from '../_constants';

export function risksconfig(state = {}, action) {
  
  switch (action.type) {
    case riskconfigConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case riskconfigConstants.GETALL_SUCCESS:
      
    return {
        items: action.data
      };
    case riskconfigConstants.GETALL_FAILURE:
      return { 
        ...state,
        error: action.error.message,
        
      };
    case riskconfigConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting:true
      };
    case riskconfigConstants.DELETE_SUCCESS:
      
      return 
        state;
        
      
      case riskconfigConstants.DELETE_FAILURE:
      return {
        ...state,
        error: action.error.message,
        
      };
      default:
      return state
  }
}