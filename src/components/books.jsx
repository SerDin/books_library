import React from "react";
import BookItems from './book/BookItems';

class Books extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users: [
                {
                    user_name: 'Alex',
                    user_second_name: 'Pavlov',
                    user_price: null,
                    user_books_id: []
                }
            ],

            books: [
                { author_name: 'Jule',
                author_second_name: 'Vern',        
                book: [    
                    {
                        name_book: '20.000 lie undo water',
                        id: '1vsdvsv',
                        genre: 'fantastick',
                        price: 12
                    },
                    {
                        name_book: 'Lottmann',
                        id: '2sfbdfb',
                        genre: 'fantastick',
                        price: 20
                    }
                ]
                },
                { author_name: 'Erich Maria',
                author_second_name: 'Remarque',
                book: [    
                    {
                        name_book: 'The Road Back',
                        id: '3fgnfgn',
                        genre: 'fantastick',
                        price: 5
                    },
                    {
                        name_book: 'Three Comrades',
                        id: '4ndghmdghnfg',
                        genre: 'fantastick',
                        price: 7
                    },
                    {
                        name_book: 'Spark of Life ',
                        id: '5jcyjfyj',
                        genre: 'fantastick',
                        price: 10
                    }          
                ]
                },
                { author_name: 'Роберт',
                author_second_name: 'Маккаммон',
                book: [    
                    {
                        name_book: 'A Life in the Day of',
                        id: '6rg',
                        genre: 'fantastick',
                        price: 8
                    },
                    {
                        name_book: 'T Swan Song',
                        id: 'tyyjeyj7',
                        genre: 'fantastick',
                        price: 3
                    },
                    {
                        name_book: 'The Wolf Hour',
                        id: '8jet',
                        genre: 'fantastick',
                        price: 2
                    }          
                ]
                }
            ]
        }
    }

    addKeyToUser(id){
        // let arrCopy = [...this.state.users[0].user_books_id];
        let arrCopy2 = this.state.users[0].user_books_id;

        arrCopy2.push(id);
        this.setState(arrCopy2)
        // this.setState( { user_books_id: arrCopy});
        console.log('___ book ID', this.state.users[0].user_books_id);
        console.log('___ id', id);
        console.log('___ STATE', this.state.users[0]);
    };


    
        

	render() {

        let arrCopy = [...this.state.books];

        const itemBook = arrCopy.map( (item, index) => {
            return <BookItems
            key={item.author_name}
            index={this.index} 
            author_name={item.author_name} 
            author_second_name={item.author_second_name} 
            state={this.state} 
            book={this.state.books[index].book}
            addIdToUser={this.addKeyToUser.bind(this)}
            />
        
        } );

        const writeBookToId = this.state.users[0].user_books_id.map((item, index) => {
                       
            if ( item === this.state.books[0].book[index].id ){
                let uli = this.state.books[0].book[index].name_book;
                return (
                    <li>{uli}</li>
                )
            } else if ( item === this.state.books[1].book[index].id ){
                let uli = this.state.books[1].book[index].name_book;
                return (
                    <li>{uli}</li>
                )
            } else if ( item === this.state.books[2].book[index].id ){
                let uli = this.state.books[2].book[index].name_book;
                return (
                    <li>{uli}</li>
                )
            }
            
        })

		return (
			<div style={ {backgroundColor: "green", minHeight: 200} }>
				<h3>Books library:</h3> 
                <ul>{itemBook}</ul>
                <ul>{writeBookToId}</ul>
            </div>
		);
	}
}

export default Books;