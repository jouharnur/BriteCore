import React from 'react';

export const renderField = ({options, input, label, type, meta: { touched, error, warning } }) => (
    <div className={'form-group' + (touched && error ? ' has-error' : '')}>
      <label className="control-label">{label}</label>
      <div>
        {type=='ENUM'?
        <select {...input} placeholder={label} type={type} className="form-control">
        {options&&
                options.map((o,i,a)=>
                <option key={i}>{o.options}</option>
                )}
        </select>
        :
        <input {...input} placeholder={label} type={type} className="form-control" />
        }
        {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
