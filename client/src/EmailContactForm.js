import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
function EmailContactForm({setDisplay}){
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_6f23mgr', 'template_9ydgkjc', form.current, 'Wa5GAyg4W-drj_Bd9')
     .then((result) => {console.log(result)
      setDisplay(false)
         // show the user a success message
     }, (error) => {console.log(error)
         // show the user an error
     });
 };
 
 return (
   <form ref={form} onSubmit={sendEmail}>
    <h4>Send Email</h4>
     <label>Your name: </label>
     <input type="text" name="user_name" />
     <label>Recipient email: </label>
     <input type="email" name="user_email" />
     <br/>
     <label>Message for recipient:</label>
     <br/>
     <textarea className='form-control' name="message" />
     <br/>
     <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Send</button>
   </form>
 );
};
 
export default EmailContactForm;