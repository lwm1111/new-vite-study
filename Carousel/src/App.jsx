import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //图片素材
  const images = [
    "../public/pictrun/3-21-1.jpg",
    "../public/pictrun/calendar.jpg",
    "../public/pictrun/3.jpg",
    "../public/pictrun/4.jpg",
    "../public/pictrun/minji4.jpg",
  ]

  //定义当前索引值
  const [index, setIndex] = useState(0)
  //暂停状态
  const [isPaused, setIsPaused] = useState(false)
  //过渡动画
  const [isFading, setIsFading] = useState(false)

  const switchImage = (newIndex) => {
    setIsFading(true)
    setTimeout(() => {
      setIndex(newIndex)
      setIsFading(false)
    }, 300) // 动画时间
  }

  //自动轮播
  useEffect(() => {
    if (isPaused) return //暂停时不启动

    const timer = setInterval(() => {
      switchImage(index === images.length - 1 ? 0 : index + 1)
    }, 3000)
    return () => clearInterval(timer);
  }, [images.length, isPaused, index])

  return (
    <>
      <h2>轮播图</h2>
      <div
        className="carousel"
        onMouseEnter={() => { setIsPaused(true) }}
        onMouseLeave={() => { setIsPaused(false) }}
      >
        <img src={images[index]} className={isFading ? "fade fade-out" : "fade fade-in"} alt="" />
      </div>
      <div className="btn">
        <button onClick={() => {
          switchImage(index === 0 ? images.length - 1 : index - 1)
        }}>上一张</button>
        <p>{index + 1}</p>
        <button onClick={() => {
          switchImage(index === images.length - 1 ? 0 : index + 1)
        }}>下一张</button>
      </div>
    </>
  )
}

export default App
