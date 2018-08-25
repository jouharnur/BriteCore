import React from 'react';
import { Router, Route,Redirect,Switch,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from "lodash"
import { history } from '../_helpers';
import { alertActions } from '../_actions';

import { risksPage } from '../Pages';
import { riskPage} from '../Pages'
import {NotFoundPage} from '../Pages'
import { risksconfigPage } from  '../Pages'
import { riskconfigPage } from '../Pages';


import {Spinner,Navbar,Position, Toaster,Button,Alignment,intent} from "@blueprintjs/core"


export const AppToaster=Toaster.create({
    position: Position.TOP, 
    
});


class App extends React.Component {
    constructor(props) {
        
        super(props);
    
    }
    
    componentDidUpdate()
    {
        
        if (this.props.alert.message)
             this.showToast(this.props.alert.message)
        
        
    }

    myaccountclick()
    {
        
        
    }

    showToast(msg) {
        AppToaster.show({ message: msg });
        this.props.dispatch(alertActions.clear());
    }

    render() {
        
        const { alert,authentication } = this.props;
        return (
            <div>
            
            <Navbar className="bp3-navbar bp3-dark" >
            
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>
                    Insurance Risks
                    </Navbar.Heading>
                    <Navbar.Divider />
                    
                    <Button className="bp3-minimal" icon="document" text="Risks" onClick={()=>{history.push('/')}} />                
                    <Button className="bp3-minimal" icon="cog" text="" onClick={()=>{history.push('/risksconfig')}} />                
                </Navbar.Group>
                {
                    this.props.alert.processing&&
                    <Spinner size={30} value={null}/>
                }
            </Navbar>
            
            <br/>
                
            <Router history={history}>
                <div>
                            <Switch>
                                <Route exact path="/" component={risksPage} />
                                <Route exact path="/risks" component={risksPage} />
                                <Route exact path="/risk" component={riskPage} />
                                <Route exact path="/risksconfig" component={risksconfigPage} />
                                <Route exact path="/riskconfig" component={riskconfigPage} />
                                <Route exact path="*" component={NotFoundPage} />
                            </Switch>
                            
                </div>
            </Router>
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    const { alert} = state;
    return {
        alert,
        
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 

