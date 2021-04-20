import React from "react";
import Search from "components/Search";
import Gallery from "components/Gallery";
import Modal from "components/Modal";

const App: React.FC = () => {
    return (
        <>
            <Search />
            <Gallery />
            <Modal />
        </>
    );
};

export default App;
