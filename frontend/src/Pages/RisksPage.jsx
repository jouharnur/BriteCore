import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { riskActions } from '../_actions';
import {filterActions} from '../_actions';
import {Field, reduxForm,getFormValues,immutable} from 'redux-form';
import {renderField} from '../_components';
import _ from 'lodash';
import { Overlay,Classes,Position } from '@blueprintjs/core';



class risksPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.props.dispatch(riskActions.getAll());
        
    }
    
    handleNew()
    {
        //this.props.dispatch(riskActions.newrisk())
        history.push('/risk')
        //alert('new')
    }
    
    handleClick(id)
    {
        
        this.props.dispatch(riskActions.get(id));
    }

    render() {
        
        const {values,risk, risks} = this.props;
        
        return (
            <div>
            
            
            <div className="bp3-card .modifier col-xs-10 col-md-8 col-md-offset-2">
                
                
                <h2>Risks</h2>
                <button className="bp3-button bp3-large btn btn-primary bp3-icon-add pull-right" onClick={()=>this.handleNew()}>Add risk</button>
                {risks.error && <span className="text-danger">ERROR: {risks.error}</span>}
                {risks.items && risks.items.length>0&&
                
                    <table className="bp3-html-table .modifier table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Risk Type</th>
                            <th>Date Create</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            risks.items.map((m,i,a)=>
                                <tr key={i} style={{cursor:'pointer'}} onClick={(k)=>this.handleClick(m.id)}>
                                    <td>{m.ref}</td>
                                    <td>{m.risktype.name}</td>
                                    <td>{m.datecreated}</td>
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
        risks:state.risks,
        risk:state.risk,
        
    })
    );
    
}

const connectedrisksPage = connect(mapStateToProps)(risksPage);
export { connectedrisksPage as risksPage };