import '../css/Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [conpass, setConpass] = useState('');

  const [formError, setFormError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [conpasswordError, setConPasswordError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  }

  const handleSignup = () => {
    setFormError('');
    setEmailError('');
    setPasswordError('');
    setConPasswordError('');

    if (!email || !name || !password || !conpass) {
      setFormError('Please fill all the fields');
      return;
    }

    if (!email.includes('@') || !email.endsWith('gmail.com')) {
      setEmailError('Please enter a valid Gmail address');
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      setPasswordError('Password must contain both letters and numbers');
      return;
    }

    if (password !== conpass) {
      setConPasswordError('Passwords do not match');
      return;
    }

    // If all validations pass, you can proceed with signup logic
    // For now, navigating to login page for demonstration
    navigate("/login");
  }

  return (
    <div className='register_background'>
      <div className='register_container'>
        <div className="signup_form">
          <header className='register_header'>Register</header>
          <form>
            {formError && <p className="error_message">{formError}</p>}
            <br />
            <br />

            {emailError && <p className="error_message">{emailError}</p>}
            <input
              className='register_input_form'
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className='register_input_form'
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            {passwordError && <p className="error_message">{passwordError}</p>}
            <input
              className='register_input_form'
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {conpasswordError && <p className="error_message">{conpasswordError}</p>}
            <input
              className='register_input_form'
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setConpass(e.target.value)}
              required
            />

            <input
              type="button"
              className="register_button register_input_form"
              onClick={handleSignup}
              value="Signup"
            />
          </form>

          <div className="register_signup">
            <span className="register_signup">
              Already have an account? <label className='register_label' onClick={handleLogin}>Login</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
