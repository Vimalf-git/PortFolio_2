import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub, Mail } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SendIcon from '@mui/icons-material/Send';
function Contact() {
    const [emailId, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setcontent] = useState("");
    const emailSend = async () => {
        if (emailId !== '' && subject !== '' & content !== '') {
            try {
                const res = await axios.post('http://localhost:8000/mailsend',
                    {
                        emailId,
                        subject,
                        content
                    }
                )
                if (res.status == 200) {
                    toast.success('success')
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }

        } else {
            toast.error('please fill the feild')
        }

    }
    return (
        <section id='contactPage'>
            <h1 className="contactPageTittle">Contact Me</h1>
            <div className='contactIcon'>
                <Link to={'https://github.com/Vimalf-git'} target='_blank'><GitHub/><span>Github</span></Link>
                <Link to={'https://www.linkedin.com/in/vimaltechie/'} target='_blank'><LinkedInIcon/><span>LinkedIn</span></Link>
                <Link to={"mailto:selvamvimaldz@gmail.com"} target='_blank'><Mail/><span>selvamvimaldz1@gmail.com</span></Link>
                <Link to={"https://leetcode.com/S_vimalRaj/"} target='_blank'><IntegrationInstructionsIcon/><span>LeetCode</span></Link>
            </div>
            <span className="contactDesc">For any quires contact me⬇️</span>
            <div className='contactForm'>
                <input type="text" className="email" placeholder='mail'
                    style={{ color: 'white' }}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="name" placeholder='subject '
                    style={{ color: 'white' }}
                    onChange={(e) => setSubject(e.target.value)} />
                <textarea name="message" className='msg'
                    style={{ color: 'white', resize: 'none' }} rows="5" placeholder='message'
                    onChange={(e) => setcontent(e.target.value)}
                ></textarea>
                <button className='submitBtn' style={{ cursor: 'pointer' }}
                    onClick={() => emailSend()}
                >Send<SendIcon/></button>
            </div>
        </section>
    )
}

export default Contact