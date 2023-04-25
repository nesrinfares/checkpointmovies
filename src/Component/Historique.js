import React from 'react'

function Historique()
 {
  return (
   <div className='movieslike' style={{backgroundColor:"black",width:"100%", height:"700px" , paddingTop:"0%" ,marginTop:"85%"}}>
    <h1 style={{display:"flex",justifyContent:"center" , color:"white",paddingTop:"70px",marginTop:"50px"}}> Me favorité :</h1>
    <div className='grp' style={{display:"flex", justifyContent:"space-around",paddingTop:"85px"}}>
    <div className='11'style={{width:"400px",height:"450px" ,display:"flex", justifyContent:"center", marginLeft:"20px"}}>
    <a 
       href="https://www.mythrillfiction.com/the-dark-rider"
       alt="Mythrill"
       target="_blank"

    >
      <div className="cardd" style={{display:"flex", justifyContent:"center" , flexWrap:"none"}}>
        <div className="wrapperr" style={{display:"flex", justifyContent:"center"}}>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            className="cover-image"
          />
        </div>
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
          className="title"
        />
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          className="character"
        />
      </div>
    </a>
    </div>
    <div className='12'style={{width:"400px",height:"450px",display:"flex", justifyContent:"center",marginRight:"20px"}}>
    <a href="https://www.mythrillfiction.com/force-mage"
      alt="Mythrill" 
      target="_blank"
    >
      <div className="cardd" style={{display:"flex", justifyContent:"center", flexWrap:"none"}}>
        <div className="wrapperr" style={{height:"375px"}}>
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
            className="cover-image"
          />
        
        
        <img
          src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
          className="title" style={{marginBlockStart:"-285px", color:"yellow"}}
        />
        </div>
        
        <img
          src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
          className="character"
          / >
           
      </div>
    </a>
    </div>
    <div>
    <a 
       href="https://www.mythrillfiction.com/the-dark-rider"
       alt="Mythrill"
       target="_blank"

    >
      <div className="cardd" style={{display:"flex", justifyContent:"center" , flexWrap:"none"}}>
        <div className="wrapperr" style={{display:"flex", justifyContent:"center"}}>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            className="cover-image"
          />
        </div>
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
          className="title"
        />
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          className="character"
        />
      </div>
    </a>
    </div>
    </div>
    </div>
);
   
};

export default Historique
