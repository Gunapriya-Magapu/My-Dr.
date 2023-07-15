import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email
    
    // Clear form fields
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{position:"absolute",
        left:"300px",
        top:"400px",
        right:"100px"}}>
      <div>
        <label htmlFor="email">Gmail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
