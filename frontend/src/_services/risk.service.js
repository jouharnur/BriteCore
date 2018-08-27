//import config from 'config';
import { authHeader } from '../_helpers';

export const riskService = {
    get,
    getAll,
    get_list_risks,
};


function get_list_risks()
{
    let urlParameters = ''
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    
    return fetch(`/api/risks/`, requestOptions).then(handleResponse);

}


function get(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    
    return fetch(`/api/risks/${id}/`, requestOptions).then(handleResponse);

}



function getAll() {
    let urlParameters = ''
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    
    return fetch(`/api/risksdata/?${urlParameters}`, requestOptions).then(handleResponse);
}

//update and delete

function handleResponse(response) {
    
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                alert(response.statusText)
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}