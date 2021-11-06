import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {  faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import projects from '../../projects.json'

function Project() {
    console.log(projects[0].code)
    // look into FriendCard in activity 4
    return(
       
        // create loop to loop over the images
        <div className=' '>
            <div className='container mt-auto'>
                <div className='row'>
                <h2 className='proj-title'>Projects</h2>

                    <div className='flex-row'>
                      {projects.map((proj, i) => (
                        // <div className='img-wrap col-md-5 new-img'>
                        <div className='cards-all clear-fix new-img'>
                            <div className='cards cards-container'>
                            <img 
                                src={require(`../../assets/cover/${proj.name}.png`).default}
                                alt={proj.name}
                                className="img-responsive"
                                key={proj.id}
                            />
                            <span className='outline'>
                                <span className="shadow-1">{proj.technologies}</span>
                                <p>{proj.name}</p>
                            </span>
                            <span className="outline-2">
                                <span className="shadow-2"></span>
                            </span>
                            <span className="circle"></span>
                            <ul className="cards-list link">
                                <li className='list'>
                                    <a href={proj.code} target="_blank" rel='noreferrer' 
                                            title='GitHub' className='icon link1'> 
                                        <button type="button" className="btn btn-secondary btn-sm">CODE</button>
                                    </a>      
                                </li>
                                <li>
                                    <a href={proj.link} target="_blank" rel='noreferrer'
                                        title='Live Version' className='icon link2'> 
                                        <button type="button" className="btn btn-secondary btn-sm">DEPLOYED</button>
                                    </a> 
                                </li>
                            </ul>
                            </div>
                        </div>
                        
                      ))} 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project;