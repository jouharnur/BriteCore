import { riskConstants } from '../_constants';

export function risks(state = {}, action) {
  
  switch (action.type) {
    case riskConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case riskConstants.GETALL_SUCCESS:
      return {
        items: action.risks
      };
    case riskConstants.GETALL_FAILURE:
      return { 
        ...state,
        error: action.error.message,
        
      };
    case riskConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting:true
      };
    case riskConstants.DELETE_SUCCESS:
      
      const allitems=state.items
      const d=allitems[action.id]
      
      allitems.map((v,i)=>{
          if(v['riskdate']===d['riskdate']){
            v['daily_calories']-=d['calories']
          }
      });
      allitems.splice(action.id,1)
      
      
      return {
        ...state,
        items:allitems,
        deleting:false
      };  
      case riskConstants.DELETE_FAILURE:
      return {
        ...state,
        error: action.error.message,
        
      };
      default:
      return state
  }
}