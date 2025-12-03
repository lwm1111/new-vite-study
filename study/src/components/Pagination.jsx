import React from 'react'

export default function Pagination({ currentPage, totalPage, onChange }) {
    const pages = Array.from({ length: totalPage }, (_, i) => i + 1)
    return (
        <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
            {/* 上一页 */}
            <button disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)}>上一页</button>

            {/* 数字页面 */}
            {
                pages.map((num) => {
                    return <button
                        key={num}
                        onClick={() => { onChange(num) }}
                        style={{
                            fontWeight: num === currentPage ? "bold" : "normal",
                            background: num === currentPage ? "#007bff" : "",
                            color: num === currentPage ? "white" : "",
                        }}
                    >
                        {num}
                    </button>
                })
            }

            {/* 下一页 */}
            <button disabled={currentPage === totalPage} onClick={() => onChange(currentPage + 1)}>下一页</button>
        </div>

    )
}