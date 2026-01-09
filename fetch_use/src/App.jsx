import { useEffect, useState } from 'react'

function App() {
  //获取学生信息
  const [list, setlist] = useState([])
  useEffect(() => {
    getstudents()
  }, [])
  async function getstudents() {
    const res = await fetch('http://localhost:3000/students')
    const data = await res.json()
    setlist(data)
  }

  //添加学生信息
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  async function addStudent(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age })
    })
    if (res.ok) {
      setName('')
      setAge('')
      getstudents()
    } else {
      console.log(err);
    }
  }

  //删除学生信息
  async function deleteStudent(id) {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: 'DELETE'
    })
    getstudents()
  }
  return (
    <div>
      <h2>学生信息管理</h2>

      <form onSubmit={addStudent}>
        <input placeholder='姓名' value={name} onChange={e => { setName(e.target.value) }} />
        <input placeholder='年龄' value={age} onChange={e => { setAge(e.target.value) }} />
        <button type='submit'>新增</button>
      </form>

      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                {item.name}-{item.age}
                <button onClick={() => { deleteStudent(item.id) }}>删除</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
