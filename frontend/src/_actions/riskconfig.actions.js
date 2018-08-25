

import { riskconfigConstants } from '../_constants';
import { riskconfigService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
export const riskconfigActions = {
    newriskconfig,
    get,
    getAll,
    add_field,
};


function newriskconfig(){
    return {type: riskconfigConstants.ADD_NEW}
}


function get(id){
    return dispatch => {
        dispatch(alertActions.processing())
        dispatch(request());

        riskconfigService.get(id)
            .then(
                data => 
                {
                    dispatch(success(data))
                    dispatch(alertActions.success(''));
                    history.push('/riskconfig');
                },
                error => {
                     dispatch(failure(error))
                     dispatch(alertActions.error(error.message));
                }
            );
    };

    function request() { return { type: riskconfigConstants.GET_REQUEST } }
    function success(riskconfig) { return { type: riskconfigConstants.GET_SUCCESS, riskconfig } }
    function failure(error) { return { type: riskconfigConstants.GET_FAILURE, error } }
 
}

function getAll() {
    
    return dispatch => {
        dispatch(alertActions.processing())
        dispatch(request());

        riskconfigService.getAll()
            .then(
                data => {
                            dispatch(success(data)),
                            dispatch(alertActions.success(''))
                },
                error =>
                { 
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request() { return { type: riskconfigConstants.GETALL_REQUEST } }
    function success(data) { return { type: riskconfigConstants.GETALL_SUCCESS, data } }
    function failure(error) { return { type: riskconfigConstants.GETALL_FAILURE, error } }
}


function add_field(riskid, values){
    
    return dispatch => {
        
        dispatch(alertActions.processing())
        dispatch(request());
        
        riskconfigService.put_field(riskid,values)
            .then(
                data => 
                {
                    dispatch(success(data))
                    var msg="Field added"
                    dispatch(alertActions.success(msg));
                    history.push('/risksconfig')
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
            );
    };
    
    function request() { return { type: riskconfigConstants.ADD_FIELD_REQUEST } }
    function success(field) { return { type: riskconfigConstants.ADD_FIELD_SUCCESS, field } }
    function failure(error) { return { type: riskconfigConstants.ADD_FIELD_FAILURE, error } }
 
}
