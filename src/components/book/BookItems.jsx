import React from "react";

export default function(props) {    
    return (
        <li key={props.item}> 
        {props.author_name} 
        {props.author_second_name}
            {props.book.map( (item, index) =>{
                return (
                    <p key={item.id}>  Name book: { item.name_book } <br/>
                        Genre: { item.genre } Price: { item.price }
                        <button onClick={ () => {  props.addIdToUser(item.id); console.log(`id book is: ${item.id}`)} }>Buy</button>
                    </p>
                )
            })}
        </li>
    )
}