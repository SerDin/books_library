// import { ACTION_FIRST_NAME } from '../index';
// import { newFirstName } from '../store/actions';

const initialState = {
    users: [
        {
            user_name: 'Alex',
            user_second_name: 'Pavlov',
            user_price: null,
            user_books: []
        }
    ],

    books: [
        { author_name: 'Jule',
        author_second_name: 'Vern',        
        book: [    
            {
                name_book: '20.000 lie undo water',
                genre: 'fantastick',
                price: 12,

            },
            {
                name_book: 'Lottmann',
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
                genre: 'fantastick',
                price: 5
            },
            {
                name_book: 'Three Comrades',
                genre: 'fantastick',
                price: 7
            },
            {
                name_book: 'Spark of Life ',
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
                genre: 'fantastick',
                price: 8
            },
            {
                name_book: 'T Swan Song',
                genre: 'fantastick',
                price: 3
            },
            {
                name_book: 'The Wolf Hour',
                genre: 'fantastick',
                price: 2
            }          
        ]
        }
    ]
};

export const rootReducer = (state = initialState, action) => {
    // switch ( action.type ) 
    // {
    //     case ACTION_FIRST_NAME:
    //     return { ...state, 
    //         firstName: action.payload.firstName, lastName: action.payload.lastName
    //      };
    // };
    return state;
};
