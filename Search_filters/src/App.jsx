import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'

function App() {
  // 搜索过滤器
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <div>
        <div className="Search-Bar">
          <input
            type="text"
            placeholder='输入搜索内容...'
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value) }}
          />
        </div>
        <div className="Filters-books">
          <SearchFilter keyword={keyword} />
        </div>
      </div>
    </>
  )
}

export default App
