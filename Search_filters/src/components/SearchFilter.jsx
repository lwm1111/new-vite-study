import { React, useMemo } from "react";

export default function SearchFilter({ keyword }) {
    const books = [
        "JavaScript 高级程序设计",
        "深入浅出 React",
        "你不知道的 JavaScript",
        "CSS 世界",
        "Vue.js 设计与实现",
        "算法第四版",
        "React 设计模式与最佳实践"
    ];
    const filteredBooks = useMemo(() => {
        return books.filter(book =>
            book.toLowerCase().includes(keyword.toLowerCase())
        );
    }, [keyword]);

    return (
        <>
            {
                filteredBooks.length === 0 ?
                    (<p>没有找到相关书籍</p>)
                    :
                    <ul>
                        {filteredBooks.map(book => (
                            <li key={book}>{book}</li>
                        ))}
                    </ul>
            }
        </>

    )
}