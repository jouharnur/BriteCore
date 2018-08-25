import config from 'config';
import { authHeader } from '../_helpers';

export const riskconfigService = {
    get,
    getAll,
    put_field
};



function get(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    
    return fetch(`${config.apiUrl}/api/risks/${id}/`, requestOptions).then(handleResponse);

}



function getAll() {
    let urlParameters = ''
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    
    return fetch(`${config.apiUrl}/api/risks/?${urlParameters}`, requestOptions).then(handleResponse);
}


function put_field(riskid,field){
    
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(field)
    };
    requestOptions.headers['Accept']='application/json'
    requestOptions.headers['Content-Type']='application/json; charset=UTF-8'
    let url=`${config.apiUrl}/api/risks/` + riskid +'/'
    
    return fetch(url, requestOptions).then(handleResponse);;

}







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