import React, {useState} from "react";
import './modalstyle/modal.css'
import hero from './modalstyle/imgs/heroshirt.jpg'

const Modal = ()=>{
    const [modal, setModal] = useState(true)
    const left = document.querySelector('.body-left')
    const toggleModal = ()=>{
        setModal(!modal)
    }
    if(modal===false){
        left.style.position='fixed'
    }
    
    
    return(
        <>
        {modal && (
            <div className="overlay" >
            <div className="modal-container" >
                
                <div className="inner">
                    <div className="left">
                    <h1>Hello there👋</h1>
                    <div>
                        <p>I am <span>Daniel Anagu.</span> I am eager to utilize my skills for your company's<span> growth!</span> </p>
                    </div>
                    <div>
                    <h3>CLICK <span>CONTINUE</span> TO <span>EXPLORE</span> MY PORTFOLIO</h3>
                    <div className="mod-btn">
                    <button type="button" onClick={toggleModal}>CONTINUE</button>
                    </div>
                   </div>
                    </div>

                    <div className="right">
                    <img src={hero} alt='hero'/>
                    </div>
                </div>
            </div>
            </div>
            )}
        </>
      
        
    )
   
}

export default Modal