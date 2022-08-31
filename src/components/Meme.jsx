import React from 'react'

const Meme = () => {
  const [allmeme,setAllMeme]=React.useState([])
  React.useEffect(function(){
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data =>setAllMeme(data.data.memes))
  },[])
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg",
    height:"",
    width:"",
  })
  function handleChange(event){
      const {name,value}=event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
      
  }
     function getmeme(){
      const a=Math.floor(Math.random()*allmeme.length)
      if(allmeme[a].box_count==2)
        {setMeme((prevMeme)=>{
          return {
            ...prevMeme,
            randomImage:allmeme[a].url,
          }
        });}
     else  return getmeme()  
    }

  return (
    <section className="Meme">
        <div className="form">
    <div className="meme_input">
      <input type="text" placeholder="Shut up" name="topText" value={meme.topText} onChange={handleChange} />
      <input type="text" placeholder="and take my money" name="bottomText" value={meme.bottomText} onChange={handleChange} />
    </div>
    <div className="meme_button">
        <button onClick={getmeme}>Get a new meme image</button>
    </div>
        </div>
        <div className="meme_img">  
        <div className="meme--text-top">
          <h2 >{meme.topText}</h2>
        </div>  
        <div className="meme--text-bottom">
          <h2 >{meme.bottomText}</h2>
        </div> 
          <img src={meme.randomImage} alt=""  />
        </div>
    </section>
  )
}

export default Meme
