import React from "react";

const Search: React.FC = () => (
    <>
        <h2>Поиск книг</h2>
        <form>
            <label>
                Хочу
                <input type="submit" value="найти книгу" />
                <input type="text" placeholder="название" />
            </label>
        </form>
    </>
);

export default Search;
