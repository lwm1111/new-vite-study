import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

//中间件
app.use(cors())
app.use(express.json())

//数据库连接 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '123456',
    database: 'fetch_practise'
})

db.connect(err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('数据库连接成功');
})


//查询学生
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM student'
    db.query(sql, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

//新增学生
app.post('/students', (req, res) => {
    const { name, age } = req.body
    const sql = 'INSERT INTO student (name, age) VALUES (?, ?)'
    db.query(sql, [name, age], (err, result) => {
        if (err) return res.send(err)
        res.json({ msg: '新增成功' })
    })
})

//删除学生
app.delete('/students/:id', (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM student WHERE id = ?'
    db.query(sql, [id], (err, result) => {
        if (err) return res.send(err)
        res.json({ msg: '删除成功' })
    })
})

// 启动服务
app.listen(3000, () => {
    console.log('后端服务启动：http://localhost:3000')
})