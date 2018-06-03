import React from "react";

class UserItems extends React.Component {
	render() {	
        console.log("state", this.props.stateUser)
		return (
			<div>
				<h3>
                    <p>{this.props.stateUser.users[1].user}</p>
                </h3>
			</div>
		)
	}
}

export default UserItems;
