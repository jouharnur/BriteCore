import React from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { riskActions } from '../_actions';
import {renderField} from '../_components';
import { history } from '../_helpers';



class riskPage extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.props.dispatch(riskActions.get_list_risks());
        
    }
 
    handlechange(e)
    {
        this.props.dispatch(riskActions.get(e.target.value));
        
        //alert(e.target.value)
    }

    render(){
        
        //const {risk}=this.props
        
        const {risk,risks} = this.props
        
        return (
            
            <div className=" bp3-card .modifier col-xs-10 col-md-8 col-md-offset-2">
            
            <select className='form-control' onChange={(e)=>this.handlechange(e)}>
            <option key={-1} value=''>Select Risk Type</option>
                    
            {this.props.risks.items&&
                        this.props.risks.items.map((o,i,a)=>
                    <option key={i} value={o.id}>{o.name}</option>
                        )
                    
            }
            </select>
            
                

                
            
            {risk&&risk.fieldTypes&&
            <form onSubmit={(e)=>this.handlesubmit(e)}>
                {
                        risk.fieldTypes.map((f,i,a)=>
                        <Field 
                            name = {f.field_label} 
                            component={renderField}  
                            type={f.field_type} 
                            placehoder={f.field_label} 
                            className='form-control'
                            label={f.field_label}
                            key={i}
                            options={f.options}
                        >
                        
                        
                        </Field>
                    )
                    
                }
                <button className="bp3-button  btn btn-primary bp3-icon-add"  >Create</button>    
            </form>
            }
            </div>
    );
    }
}


riskPage=reduxForm({
    form: 'riskForm',
    
})(riskPage)

const ConectedriskPage=connect(
    state=>({
        risk:state.risk,
        formdata:state.form,
        risks:state.risks,
    })
)(riskPage)



export {ConectedriskPage as riskPage} 