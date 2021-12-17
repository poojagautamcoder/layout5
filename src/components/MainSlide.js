import React from "react";
import styles from '../styles/MainSlide.css'
import Clock from "../Icons/Clock";

const MainSlide = () =>{
    return(
        <div className = "CenterSlide">

    {/* /////////////////////////////////TITLE//////////////////////////////////// */}
<div className = "TitleText">
    <p>Blog Post Title</p>
</div>

{/* //////////////////////////////////////TITILE EDS//////////////////////////////////// */}


{/* //////////////////////////////////subtittle Starts/////////////////////////////////// */}
<span className="SubTitle">
<p className = "by">by</p><p className = "Test">Test</p>
</span>

{/* ////////////////////////////////////////////subtitle ends //////////////////////////////// */}

{/* ///////////////////////TITLE DATA////////////////////////// */}
<div className ="Title-Data">
    <div className= "Clocktime">
    <Clock/>
    </div>
<div   className = "PostDetails">
<p>posted on August 24, 2013 at 9:00 pm</p>
</div>
</div>
{/* //////////////////////////////TITLE DATA ENDS//////////////////////////// */}
   
   {/* /////////////////////////////BLOG IMAGE ///////////////////// */}

<div className="BlogPicture">
   <img width ="95%" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACBCAMAAAAYG1bYAAAAM1BMVEXMzMyVlZWWlpaSkpLPz8/IyMjLy8uqqqrBwcHExMS9vb2dnZ2ampq2trawsLCcnJylpaV8iB3nAAAEPklEQVR4nO3ai27bOgyAYUuibMu3+P2f9pCSfKuTNcMO1gX4PwxrhZgFQlnUxW4aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAnEXVtvmz9T4G4iXPXzXFPWb+cWpKWbumfp1MscEn7pRq4HIHxdSBuZPDBueDmmrH13JJZWy50zwNd/nCp7S63jsDwKhB3rXNe//mQrCVL8Jrc2mr62pqf3NStfpA/HHLgXC/t84epthZGwzty2pfFe9dZwqL9MjycW60lo3PjsDo3tfdAS/vc6xWrNdvJnQPXEuh9/Ltf50NZoheRRRNm6dMKNIroEMjpi3o3R2l9vd+vgZroTi/VAWFdNAQ36SyiPZMDbWxJM7kngbgTn4tIDJpvbXXWJ3Zj58qiqR1Lvu+VRbsvFypXAheXB9Oj5L0Gds8CcWd3rd7LEkpFXzW1Je+a4Zpa+5HrTHNZiI454VJmFFlzn9QOkzlH1B/4lhYd3+5DQmuIG7Zqc+Q0uEdO5mK1R/oyV6fU2yCYSi+U4mN3vwWWH7lM0QtvSLo+qr1gpUSrfF+Suco2JDSZ3lkyuzC2WvsnGy47XypSWR3VYbPVMAv8oe/1WWKZXWsWW01bOpJZS78mM9ilOlDGNukSdN3DbXb29ksoQ0IDx6P7dJYP99UVbmKp623YJmlX51rL9CPPEnsyoy1ctfR0W5WJaa7NtvaCzgQ6LTfj0QssVd+gdV0TJkPJ16kXLJlfeqGJD9vi7Rti6WyDPOalaV1j7b2QB1GiF94jtrUahsnlopMuvdDWded+S+eNxLGDEzu0GNu82zt64dHSC79NR4EPdhgxytdeaL70giTdWVvea6jMq04VNp3TC39I8vHdVE4wfl2Rkk0C47kbpLXjjabMC1SkPzGv3bCWu/46O29rpNoL0Q5JxcrUeASneoB3mZ2F2fn3iaR6YPd6pVoOmfJ4GV1/ivX5xLXuvU8r1aX2wk99qc+z7XVtD7bt2rrL5isf9Uk5movnhze6ac77a/9i1+Z/4vt8pliS39hMsJ1gLLKdxuUyczuIaGPMM/ZUjpzGywlGPdvbjz7wvVpHmv1QLs+uzX4ot2wj5awP4dEcFanuluuhnqZ/PR8D4nvt/jStJnwbG4Pey8dce9WXNWksD9tqwtupBPZ55fT8SBxP7Y94GrvDdZq2W3nKTVsASdofgJ7Z0ceQHw/lZVCyB0OyTwR2xCrRbw9A8a3oTw+W9b5/dNsDYy3z3ndTfah5ZZtut+b/5BRYald+jmqB4z0Qz1gxOU4lBnuTwtehoB1krwY49+yO7kN+bcD5+qKAy4G+/KV2yoE88HxXdOH0qoQMUwhh3fZacdTW9PS9Iukf4XSp9BY47oGrBQ7MCu/6+oZd6o9XxBqJfXqVSvusvVz6ZiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B/1HwCMIRyp8LHkAAAAAElFTkSuQmCC" alt = " "></img>
</div>


{/* /////////////////////////////////////BLOG IMAGE ENDS//////////////////////////////////// */}



{/* //////////////////////////////////MAIN CONTENTS /////////////////////////////////////*/}
<div className="TitleDiscription">
  <p>Lorem Ipsum is simpl typeen 1500s, when an unknown printer took a galley specimen book. typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
</div>
<div className = "paragraph">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviing essentially unchanged. It was popularised in the ding versions of Lorem Ipsum.</p>
    <br/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviing essentially unchanged. It was popularised in the ding versions of Lorem Ipsum.</p>
<br/>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviing essentially unchanged. It was popularised in the ding versions of Lorem Ipsum.</p>
<br/>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviing essentially unchanged. It was popularised in the ding versions of Lorem Ipsum.</p>
</div>
<div className="footer">
    <p>Copyright@ Your Website 2014</p>
</div>



{/* //////////////////////////////////MAIN CONTENTS ENDS//////////////////////////////////////////// */}

</div>

    );
}
export default MainSlide