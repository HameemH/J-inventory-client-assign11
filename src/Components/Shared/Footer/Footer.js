import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Github, Google, Instagram, Mailbox, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className='background py-4'>
   
       <div>
       <h2>Follow us And Mail us</h2>
        <Facebook className='me-2' color="black" size={40} />
        <Instagram className='me-2' color="black" size={40} />
        <Youtube className='me-2' color="black" size={50} />
        <Mailbox className='me-2' color="black" size={40} />
        <h4>All Copyright Reserved</h4>
       </div>
        </div>
    );
};

export default Footer;