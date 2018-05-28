import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
    firstName: 'Alex',
    lastName: 'Pavlov'
};

const ACTION_FIRST_NAME = 'ACTION_FIRST_NAME';


const newFirstName = () => {
    return {
        type: ACTION_FIRST_NAME,
        payload: {firstName: 'Sergey', lastName: 'Din'}
    }
}

const rootReduser = (state = initialState, action) => {
    switch ( action.type ) {
        case ACTION_FIRST_NAME:
        return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
    };
    return state;
};

const store = createStore(rootReduser);

console.log(store.getState());

class MainComponent extends React.Component {

    

    render() {
        return (
            <div>
               <p>{this.props.firstName}{this.props.lastName}
                </p>
                <br/>
                <button onClick = { () => { this.props.dispatch (newFirstName()); } }>Click me</button>
            </div>
            
        )
    }
};

const mapStateToProps = (state) => {
    return{
        firstName: state.firstName,
        lastName: state.lastName
    }
}

const WrapMainComponent = connect(mapStateToProps)(MainComponent);

ReactDOM.render(<Provider store={store}> 
<WrapMainComponent/>
</Provider>, document.getElementById('root'));
