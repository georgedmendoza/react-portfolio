import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from '../../projects.json'

function Project() {
    // look into FriendCard in activity 4
    return(
        // create loop to loop over the images
        <div className=' '>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-4, col-md-6'>
                      {projects.map((proj,i) => (
                        <div className='mb-5 img-wrap'>
                            <img 
                                src={require(`../../assets/cover/${proj.name}.png`).default}
                                alt={proj.name}
                                className="img-fluid thumbnail img-project"
                            />
                            <p className='img-des project-icon'>Some description here</p>
                        </div>
                      ))}  
                    </div>
                
                </div>
            </div>
        </div>
    )
}

                        // <div className='mb-5 img-wrap'>
                        //     <img src={require("../../assets/cover/this-that.png").default} 
                        //         alt="img" className="img-fluid thumbnail img-project" />
                        //     <a href="https://this--that.herokuapp.com/"> <FontAwesomeIcon icon={faGithub} className='img-des project-icon'></FontAwesomeIcon></a>
                        //     <p className=''>Some description here</p>
                        // </div>

export default Project;