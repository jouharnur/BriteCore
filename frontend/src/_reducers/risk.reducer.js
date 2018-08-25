import { riskConstants } from '../_constants';

export function risk(state = {}, action) {
    switch (action.type) {
      case riskConstants.GET_REQUEST:
        return {
          loading:true
        };
      case riskConstants.GET_SUCCESS:
        return {
          fieldTypes: action.risk
        };  
      case riskConstants.GET_FAILURE:
        return {
          error: action.error.message,
          
        };
      
      case riskConstants.ADD_REQUEST:
        return {
          submitting:true
        };
      case riskConstants.ADD_SUCCESS:
        return {
          ...state,
          risk: action.risk
        };  
      case riskConstants.ADD_FAILURE:
        return {
          error: action.error.message,
          
        };
      case riskConstants.ADD_NEW:
      debugger
      let time=new Date();
      var currentHour = time.getHours();
      var currentMinute = time.getMinutes();
      var currenttime=(currentHour<10?'0':'')+currentHour
      currenttime+= ':' + (currentMinute<10?'0':'') + currentMinute
      return {
        
        risk: {
          riskdate:new Date().toISOString().slice(0, 10),
          risktime: currenttime 
        }
      };

      
      default:
      return state
}
}