import React from 'react'
import memesData from '../components/memesData'
const Meme = () => {
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg",
    height:"",
    width:"",
  })
  const [allmemeImage,setAllMemeImage]=React.useState(memesData)
  const memesArray=allmemeImage.data.memes;
     function getmeme(){
      const a=Math.floor(Math.random()*memesArray.length)
        setMeme((prevMeme)=>{
          return {
            ...prevMeme,
            randomImage:memesArray[a].url,
            height:memesArray[a].height ,
            width:memesArray[a].width,
          }
        });
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
          <img src={meme.randomImage} alt="" height={meme.height} />
        </div>
    </section>
  )
}

export default Meme
