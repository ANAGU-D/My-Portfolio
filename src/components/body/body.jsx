
import './bodystyle/body.css';
import coffee from './bodystyle/bodyimage/coffee.png';
import Modal from '../modal/modal';
import About from '../about/about';
import Project from '../project/project';
import Blog from '../blog/blog';
const Body = ()=>{
    return(
        
        <div>
            <Modal/>
            <div className="body">
               <div className="body-left">
                <p>Hi there👋!</p>
                <div className="Name">
                <h1>I am <span>Daniel Anagu</span></h1>
                </div>

                <div className="About">
                <h1>I am a <span>Frontend Developer,</span> focused on creating <span>efficient,</span> effective <span>and reusable</span> web applications, using current and efficient technologies.</h1>
                </div>
                <div>
                    <button>Download Resume ❤<h1 className="hidden">Thank you ❤</h1></button>
                </div>
                {/* <div className="social-media">
                    <div class='icon facebook'>
                        <div class='tooltip'>Github</div>
                        <span><i class='fab fa-github'></i></span>
                    </div>

                    <div class='icon facebook'>
                        <div class='tooltip'>Twitter</div>
                        <span><i class='fab fa-twitter'></i></span>
                    </div>
                    <div class='icon facebook'>
                        <div class='tooltip'>LinkedIn</div>
                        <span><i class='fab fa-linkedin  '></i></span>
                    </div>
                    <div class='icon facebook'>
                        <div class='tooltip'>Instagram</div>
                        <span><i class='fab fa-instagram  '></i></span>
                    </div> 
                </div> */}
                <div className="coffee">
               <img src={coffee} alt='coffee'/>
                    <h1><a href="https://www.buymeacoffee.com/anagudanieg">Buy me a Coffee</a></h1>
                </div>
                </div> 
            </div>
            <div className="body-right">
                <Project/>
                <About/>
                <Blog/>
            </div>
            
        </div>
    )
}

export default Body