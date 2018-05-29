import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newFirstName } from '../store/actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Books from './books';
import Author from './author';
import MyRoom from './myroom';


class MainComponent extends React.Component {
    render() {
        // const {
        //     // newFirstName, 
        //     // books_author, 
        //     // author 
        //     } = this.props;

        // const itemAuthor = author.map((item) => {
        //     return ( <li>{item.author}</li> )
        // })

        // .book.map((item) => {
        //         <p>{item.name_book}</p>
            // })

        return (
            <Router>
                <div>
                    {/* <button onClick = { () => { newFirstName() } }>Click me</button> */}
               
                    <nav style={{height: 50, backgroundColor: "lightgrey", textAlign: "center", lineHeight: "50px"}}>
                        <Link to="/">Книги</Link>&nbsp;&nbsp;
                        <Link to="/author">Авторы</Link>&nbsp;&nbsp;
                        <Link to="/my_room">Личный кабинет</Link>
                    </nav>                    

                    <Route exact path="/" component={Books} />
                    <Route path="/author" component={Author} />
                    <Route path="/my_room" component={MyRoom} />
                </div>
            </Router>
        )
    }
};

const putStateToProps = (state) => {
    return{
        author: state.books,
        books_author: state.books.book,
        // lastName: state.books[0].book[0]
    }
}

const putActionsToProps = (dispatch) => {
    return {
        newFirstName: bindActionCreators(newFirstName, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(MainComponent);
