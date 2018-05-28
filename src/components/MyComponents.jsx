import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newFirstName } from '../store/actions';

class MainComponent extends React.Component {
    render() {
        const {newFirstName, firstName, lastName } = this.props;
        return (
            <div>
                <p>
                    {firstName} {lastName}
                </p>
                <br/>
                <button onClick = { () => { newFirstName() } }>Click me</button>
            </div>
            
        )
    }
};

const putStateToProps = (state) => {
return{
    firstName: state.firstName,
    lastName: state.lastName
}
}

const putActionsToProps = (dispatch) => {
return {
    newFirstName: bindActionCreators(newFirstName, dispatch)
}
}

export default connect(putStateToProps, putActionsToProps)(MainComponent);
