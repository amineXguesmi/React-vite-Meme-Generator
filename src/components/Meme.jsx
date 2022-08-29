import React from 'react'
import memesData from '../components/memesData'
const Meme = () => {
  const memesArray=memesData.data.memes;
  const [url,setUrl]=React.useState("https://i.imgflip.com/30b1gx.jpg")
     function getmeme(){
        setUrl(memesArray[Math.floor(Math.random()*memesArray.length)].url);
    }

  return (
    <section className="Meme">
        <div className="form">
    <div className="meme_input">
      <input type="text" placeholder="Shut up"/>
      <input type="text" placeholder="and take my money"/>
    </div>
    <div className="meme_button">
        <button onClick={getmeme}>Get a new meme image</button>
    </div>
        </div>
        <div className="meme_img">
          <img src={url} alt="" />
        </div>
    </section>
  )
}

export default Meme
