import React from 'react';
import '../../index.css';

// icons for contact / sites
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <p>Designed and Developed By James Canter</p>
            <a href='https://www.linkedin.com/in/james-canter-b807b5128/' target='_blank' rel="noreferrer"><FaLinkedin color='white' size={30}/></a>
            <a href='https://github.com/Cantalorian' target='_blank' rel="noreferrer"><AiFillGithub color='white' size={30}/></a>
            <a href='https://discordapp.com/users/535379203240099840/' target='_blank' rel="noreferrer"><FaDiscord color='white' size={30}/></a>
            <a href='https://stackoverflow.com/users/15095678/cantalorian' target='_blank' rel="noreferrer"><FaStackOverflow color='white' size={30}/></a>
        </div>
    )
};



export default Footer;