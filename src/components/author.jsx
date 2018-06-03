import React from "react";
import UserItems from "./User/UserItem";

class Author extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			users: [
				{
					user: "Alex"
				},
				{
					user: "Sergey"
				}
			]
		}
	}

	render() {	
		return (
			<div style={ {backgroundColor: "orange", height: 400} }>
				<h3>Author</h3>
				<ul>
					<UserItems stateUser={this.state} />
				</ul>
			</div>
			)
	}
}

export default Author;







