import React from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { riskconfigActions } from '../_actions';
import {renderField} from '../_components';
import { history } from '../_helpers';
const validate = values => {
    const errors = {}
    
    if (!values.label) {
      errors.label = 'Required'
    } 
    if (!values.type){
        errors.type="Required"
    }
    
    return errors
  }

  


class riskconfigPage extends React.Component{
    
    componentDidMount()
    {
                
    }
    handlsubmit(e)
    {
        e.preventDefault()

        if(this.props.valid)
        {
            
            const {values}=this.props.formdata.riskconfigForm
            this.props.dispatch(riskconfigActions.add_field(this.props.riskconfig.riskconfig[0].risktype.id,values));
            
        }
        else {
            const toTouch=[]
            for (const key in this.props.formdata.riskconfigForm.registeredFields) {
                this.props.touch(key)
                this.props.blur(key)
            }
        }
        
        
    }


    render(){
        
        //const {riskconfig}=this.props
        
        const {riskconfig} = this.props
        
        return (
            <div>
            <div className=" bp3-card .modifier col-xs-10 col-md-8 col-md-offset-2">
            {riskconfig.riskconfig&&
            <div>
            <h1>{riskconfig.riskconfig[0].risktype.name}</h1>
            </div>}
            </div>
            
            <div className=" bp3-card .modifier col-xs-10 col-md-8 col-md-offset-2">
                <form onSubmit={(e)=>this.handlsubmit(e)}>
                <div className="form-inline">
                    <div className="form-group">
                    <Field 
                            name = 'label'
                            component={renderField}  
                            type='TEXT' 
                            placehoder='Field label' 
                            className='form-control'
                            label='Field Label'
                            key='1'
                                                
                    />
                    </div>
                    <div className="form-group">
                    <Field 
                            name = 'type'
                            component={renderField}  
                            type='ENUM' 
                            placehoder='Field TYPE' 
                            className='form-control'
                            label='Type'
                            key='2'
                            options={[{"options":"TEXT"},{"options":"DATE"},{"options":"NUMBER"},{"options":"ENUM"}]}
                            
                    />
                    
                    <button className="bp3-button  btn btn-primary bp3-icon-add"  >Add Field</button>    

                    </div></div>
                    
                    </form>
                    
                    
                    
                    <table className="bp3-html-table .modifier table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Field Type</th>
                            <th>Field Label</th>
                            
                        </tr>
                    </thead>
                    <tbody>   

                    
                    {riskconfig.riskconfig&&riskconfig.riskconfig.map((r,i,a)=>
                    <tr key={i} >
                        <td>{r.field_type}</td>
                        <td>{r.field_label}</td>
                    </tr>
                    )}
                    </tbody>
                    </table>
                
                    
            

            </div></div>
    );
    }
}


riskconfigPage=reduxForm({
    form: 'riskconfigForm',
    validate,
    shouldValidate: params=>{
        return true
    }
    
})(riskconfigPage)

const ConectedriskconfigPage=connect(
    state=>({
        riskconfig:state.riskconfig,
        formdata:state.form,
        
    })
)(riskconfigPage)



export {ConectedriskconfigPage as riskconfigPage} 