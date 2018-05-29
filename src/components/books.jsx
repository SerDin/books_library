import React from "react";
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class Books extends React.Component {
	render() {
        const {
            // newFirstName,
            authors
        } = this.props;

        const itemAuthor = authors.map((item, index) => {
            const authorAndBooks = authors[index].book.map((item) => {
                return( <li>
                    {item.name_book} <br/>
                    Genre: {item.genre}   Price: {item.price}$ <button onClick = { () => {  } }>Bye</button></li> )
            })
            return ( <ul><li> {item.author_name} {item.author_second_name}</li> <li>{ authorAndBooks}</li> </ul>)
        })        

		return (

			<div style={ {backgroundColor: "green", minNeight: 400} }>
				<h3>Books</h3> 
                <div>{itemAuthor}</div>
			</div>

		)
	}

}

const putStateToProps = (state) => {
    return{
        authors: state.books,
        // books_author: state.books.book,
    }
}

export default connect(putStateToProps)(Books);
