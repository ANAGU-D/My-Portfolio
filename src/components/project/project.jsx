import React from 'react'
import './projectstyle/projectstyle.css'
function Project() {
  return (
    <>
     <div className="Project"  id="PROJECT">
                    <h1>PROJECTS</h1>
                </div>
                <div className="project-container"id='PROJECT'>
                <div className="Projectone">
                    <h1>Avatarai</h1>
                    <div className="tools">
                    <p>REACT JS + TAILWINDCSS + PYTHON</p>
                    <p >A webapp for creating Artificial Intelligent Avatars. It also allows users to take courses on Avatar generation.</p>
                    <div className="action">
                        <div className="live-action">
                            <a href="#">
                            <div><span><i class="fa-sharp fa-solid fa-eye"></i></span> </div>
                            <div><p>Live</p></div></a>
                        </div>
                      
                        <div className="live-action">
                            <a href="https://github.com/workshopapps/avatarai.web/tree/payone" target='_blank'>
                            <div><span><i class="fa-solid fa-code"></i></span> </div>
                            <div><p>Code</p></div></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="Projectone">
                    <h1>MetaBnB</h1>
                    <div className="tools">
                    <p>REACT JS + TAILWINDCSS</p>
                    <p>A frontend website that allows for purchasing lands in the Metaverse</p>
                    <div className="action">
                        <div className="live-action">
                            <a href="#">
                            <div><span><i class="fa-sharp fa-solid fa-eye"></i></span> </div>
                            <div><p>Live</p></div></a>
                        </div>
                      
                        <div className="live-action">
                            <a href="#">
                            <div><span><i class="fa-solid fa-code"></i></span> </div>
                            <div><p>Code</p></div></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="Projectone" >
                    <h1>TestApp</h1>
                    <div className="tools">
                    <p>REACT JS + TAILWINDCSS</p>
                    <p>A web application that allows its users to make Wills or Testaments </p>
                    <div className="action">
                        <div className="live-action">
                            <a href="#">
                            <div><span><i class="fa-sharp fa-solid fa-eye"></i></span> </div>
                            <div><p>Live</p></div></a>
                        </div>
                      
                        <div className="live-action">
                            <a href="#">
                            <div><span><i class="fa-solid fa-code"></i></span> </div>
                            <div><p>Code</p></div></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    </>
  )
}

export default Project