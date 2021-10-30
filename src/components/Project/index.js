import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import projects from '../../projects.json'

function Project() {
    console.log(projects[0].code)
    // look into FriendCard in activity 4
    return(
       
        // create loop to loop over the images
        <div className=' '>
            <div className='container mt-auto'>
                <div className='row'>
                    <div className='flex-row'>
                      {projects.map((proj, i) => (
                        <div className='img-wrap col-md-5 new-img'>
                            
                            <img 
                                src={require(`../../assets/cover/${proj.name}.png`).default}
                                alt={proj.name}
                                className="img-project"
                                key={proj.id}
                            />
                            {/* <a href={proj.code} target="_blank" className='img-des'> <FontAwesomeIcon icon={faGithub} className='project-icon1'></FontAwesomeIcon></a> */}
                            {/* <a href={proj.link} target="_blank" className='img-des'> <FontAwesomeIcon icon={faStaylinked} className='project-icon2 icon'></FontAwesomeIcon></a> */}
                            <h4 className='proj-title'>{proj.name}</h4>
                            {/* <p className='proj-description'>{proj.description}</p> */}
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