    import React,{ useState } from 'react'
   
    import PropTypes from 'prop-types'

    export default function About(props) {
        
        
    
        //const[myStyle,setMyStyle]= useState({
        //  color:'white',
            //backgroundColor:'black'
        //})
    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#521683':'white'
    }
    /*const[btnText,setBtnText]= useState("Enable Dark Mode")
    const toggleStyle=()=>{
    if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
            backgroundColor:'white',
            border: '1px solid white'
        })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
    }*/
    return (
        <>
    
        <div className="container1" style={myStyle} >
            <h1>About Us</h1>
                <div className="accordion" id="accordionExample"style={myStyle}>
                        <div className="accordion-item"style={myStyle}>
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
                                Credibility
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style={myStyle}>
                            <div className="accordion-body" style={myStyle}>
                                <strong> We prioritize accuracy and reliability in our news reporting.  </strong>  Our team follows rigorous journalistic standards to ensure that the information we provide is verified and trustworthy. <code>.accordion-body</code>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={myStyle}>
                            <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={myStyle}>
                               User Friendly Exp
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={myStyle}>
                            <div className="accordion-body"style={myStyle}>
                                <strong>We understand that your time is valuable.</strong>  Our website is designed with user-friendliness in mind, allowing you to quickly find the news stories that matter to you.

Unbiased Reporting: Our commitment to impartiality means that our news articles are free from bias and political agendas. We present the facts and let you form your own opinions. <code>.accordion-body</code>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={myStyle}>
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Global Perspective:
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the third item's accordion body.</strong>  With a global network of correspondents, we bring you stories from every corner of the world. Our goal is to provide a well-rounded view of international events and their impactes. <code></code>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-dark">{btnText}</button>
    </div> */}
    </div>
    <div className="container1 my-4" style={myStyle} >Welcome to Newser, your go-to destination for staying informed about the latest news and developments from around the world. At Newser, we believe that access to accurate and timely information is essential for making informed decisions, understanding global events, and staying engaged with the world around us.
    Our mission is simple yet powerful: to deliver the news that matters most to you, presented in a clear, concise, and unbiased manner. We aim to provide a comprehensive view of current events, spanning a wide range of topics from politics and technology to science, entertainment, and beyond. Our dedicated team of journalists and writers work tirelessly to bring you well-researched, fact-checked news stories that you can trust.
    </div>
    
    </>
    );
    }
