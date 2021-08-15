import React from 'react';
import resume from '../../assets/resume/JamesCanterResume.pdf';
import { FaDownload } from 'react-icons/fa';

function Resume() {
    return(
        <div id='resume'>
            <a href={resume} download="JamesCanterResume.pdf">
                <FaDownload color='white' size={30}/>
                <h3>Download Resume</h3>
            </a>
        </div>
    );
};

export default Resume;