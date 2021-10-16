import "./body.scss"
import Me from "../assets/images/me.jpg"

function Body() {

    return (

        <div className= "i">
            <div className = "i-left">
                <div className  = "i-left-wrapper">
                    <h2 className = "i-intro">Hello my name is</h2>
                    <h1 className = "i-name">Juan Rojas</h1>
                    <div className= "i-title">
                        <div className = "i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Data Analysis</div>
                            <div className="i-title-item">num 3</div>
                            <div className="i-title-item">num 4</div>
                            <div className="i-title-item">num 5</div>    
                        </div>
                    </div>
                    <div className = "i-description">
                        I have been working with computers almost my whole life. My goal is to gain experience in a
computer science related field and be able to learn under others. I hope to use this
experience gained to further improve my skills and help others in need. I have worked in a
team environment as a team leader so I know the importance of communication with others. I
am always open to feedback on my current performance.
                    </div>
                </div>
            </div>
            <div className = "i-right">
                <div className = "i-bg">

                
                <img src ={Me} className = "i-img" />
                </div>
            </div>
          
        </div>

    )
}


export default Body;