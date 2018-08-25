import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { riskconfigActions } from '../_actions';
import {filterActions} from '../_actions';
import {Field, reduxForm,getFormValues,immutable} from 'redux-form';
import {renderField} from '../_components';
import _ from 'lodash';
import { Overlay,Classes,Position } from '@blueprintjs/core';



class risksconfigPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.props.dispatch(riskconfigActions.getAll());
        
    }
    
    handleNew()
    {
        this.props.dispatch(riskconfigActions.newriskconfig())
        history.push('/riskconfig')
        //alert('new')
    }
    
    handleClick(id)
    {
        
        this.props.dispatch(riskconfigActions.get(id));
    }

    render() {
        
        const {values,riskconfig, risksconfig} = this.props;
        
        return (
            <div>
            
            
            <div className="bp3-card .modifier col-xs-10 col-md-8 col-md-offset-2">
                
                
                <h2>Risk Type Configuration</h2>
                <button className="bp3-button bp3-large btn btn-primary bp3-icon-add pull-right" onClick={()=>this.handleNew()}>Add risk Type</button>
                {risksconfig.error && <span className="text-danger">ERROR: {risksconfig.error}</span>}
                {risksconfig.items && risksconfig.items.length>0&&
                
                    <table className="bp3-html-table .modifier table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Risk Type</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            risksconfig.items.map((m,i,a)=>
                                <tr key={i} style={{cursor:'pointer'}} onClick={(k)=>this.handleClick(m.id)}>
                                    
                                    <td>{m.name}</td>
                                    
                                </tr>
                              
                        )}
                    </tbody>
                    </table>
                }
            </div>
        </div>
        );
    }
}


function mapStateToProps(state) {
    return (
    state=>({
        risksconfig:state.risksconfig,
        riskconfig:state.riskconfig,
        
    })
    );
    
}

const connectedrisksconfigPage = connect(mapStateToProps)(risksconfigPage);
export { connectedrisksconfigPage as risksconfigPage };