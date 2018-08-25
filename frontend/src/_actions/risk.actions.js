

import { riskConstants } from '../_constants';
import { riskService } from '../_services';
import { alertActions } from './';

import { history } from '../_helpers';
export const riskActions = {
    newrisk,
    get,
    getAll,
    get_list_risks,
};


function newrisk(){
    return {type: riskConstants.ADD_NEW}
}


function get(id){
    return dispatch => {
        dispatch(alertActions.processing())
        dispatch(request());

        riskService.get(id)
            .then(
                data => 
                {
                    dispatch(success(data))
                    dispatch(alertActions.success(''));
                    //history.push('/risk');
                },
                error => {
                     dispatch(failure(error))
                     dispatch(alertActions.error(error.message));
                }
            );
    };

    function request() { return { type: riskConstants.GET_REQUEST } }
    function success(risk) { return { type: riskConstants.GET_SUCCESS, risk } }
    function failure(error) { return { type: riskConstants.GET_FAILURE, error } }
 
}

function getAll() {
    return dispatch => {
        dispatch(alertActions.processing())
        dispatch(request());

        riskService.getAll()
            .then(
                risks => {
                            dispatch(success(risks)),
                            dispatch(alertActions.success(''))
                },
                error =>
                { 
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request() { return { type: riskConstants.GETALL_REQUEST } }
    function success(risks) { return { type: riskConstants.GETALL_SUCCESS, risks } }
    function failure(error) { return { type: riskConstants.GETALL_FAILURE, error } }
}


function get_list_risks() {
    return dispatch => {
        
        dispatch(request());

        riskService.get_list_risks()
            .then(
                risks => dispatch(success(risks)),
                error =>dispatch(failure(error))
                    
                
            );
    };

    function request() { return { type: riskConstants.GETALL_REQUEST } }
    function success(risks) { return { type: riskConstants.GETALL_SUCCESS, risks } }
    function failure(error) { return { type: riskConstants.GETALL_FAILURE, error } }
}