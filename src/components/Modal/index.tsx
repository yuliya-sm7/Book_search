import React from "react";

const Modal: React.FC = () => (
    <div style={{border: "2px solid black"}}>
        <img src="http://covers.openlibrary.org/b/isbn/0385472579-L.jpg"></img>
        <h3>Название книги</h3>
        <p>Автор книги</p>
        <p>Дата публикации</p>
        <p>Издатель</p>
        <p>ISBN книги</p>
    </div>
);

export default Modal;
