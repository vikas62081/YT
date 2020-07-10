import React from 'react';
const books = [
    { id: 1, title: "One Indian Girl", author: "Chetan Bhagat" },
    { id: 2, title: "The Archemist", author: "Paulo Coelho" },
    { id: 3, title: "Half GirlFriend", author: "Chetan Bhagat" },
    { id: 4, title: "I Too Had a Love Story", author: "Ravinder Singh" },
]
const Books = () => {
    const bookStyle={
        border:"3px green solid",
        margin:10,
        padding:10,
        borderRadius:5,
        width:280,
        display:"inline-block"
    }
    return <div>{books.map(book => <div style={bookStyle}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
    </div>)}</div>
}
export default Books;