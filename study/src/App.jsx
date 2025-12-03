import { useState, useMemo } from 'react'
import './App.css'
import Pagination from './components/Pagination'

function App() {
  //决定用户在哪一页
  const [currentPage, setsetCurrentPage] = useState(1)

  //构造100条数据
  const data = Array.from({ length: 100 }, (_, i) => `第 ${i + 1} 条数据`)

  //每页固定10条
  const pageSize = 10

  // 总页书
  const totalPage = Math.ceil(data.length / pageSize)

  //得出当前页内容
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [currentPage, data])

  return (
    <>
      <h2>分页示例</h2>

      {/* 展示数据 */}
      {
        pageData.map((item) => {
          return <p key={item}>{item}</p>
        })
      }

      {/* 分页组件 */}
      <Pagination currentPage={currentPage} totalPage={totalPage} onChange={setsetCurrentPage} />
    </>
  )
}

export default App
