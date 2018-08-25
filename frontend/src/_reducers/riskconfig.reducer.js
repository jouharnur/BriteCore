import { riskconfigConstants } from '../_constants';

export function riskconfig(state = {}, action) {
    
  switch (action.type) {

    case riskconfigConstants.ADD_FIELD_SUCCESS:
         return state;

      case riskconfigConstants.GET_REQUEST:
        return {
          loading:true
        };
      case riskconfigConstants.GET_SUCCESS:
        return {
          riskconfig: action.riskconfig
        };  
      case riskconfigConstants.GET_FAILURE:
        return {
          error: action.error.message,
          
        };
      
      case riskconfigConstants.ADD_REQUEST:
        return {
          submitting:true
        };
      case riskconfigConstants.ADD_SUCCESS:
        return {
          ...state,
          risk: action.riskconfig
        };  
      case riskconfigConstants.ADD_FAILURE:
        return {
          error: action.error.message,
          
        };
      case riskconfigConstants.ADD_NEW:
      return {
        
        risk: {
          
        }
      };

      
      default:
      return state
}
}