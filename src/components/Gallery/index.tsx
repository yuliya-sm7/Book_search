import React from "react";
import Snippet from "components/Snippet";
const posts = ["Грокаем алгоритмы", "Язык программирования Си"];

const Gallery: React.FC = () => (
    <>
        {posts.map((_, index) => (
            <Snippet key={index} />
        ))}
        <Snippet />
    </>
);

export default Gallery;
