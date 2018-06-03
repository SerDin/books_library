import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Books from './books';
import Author from './author';
import MyRoom from './myroom';


class MainComponent extends React.Component {
    render() {
        return (
            <Router>
                <div>
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


export default MainComponent;
