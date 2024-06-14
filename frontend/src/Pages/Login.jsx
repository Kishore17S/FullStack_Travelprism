import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setFormError('');
    setEmailError('');
    setPasswordError('');

    if (!email || !password) {
      setFormError('Please fill correct email and password fields');
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

    navigate("/display");
  }

  const handleSignup = () => {
    navigate("/signup");
  }


  return (
    <div className='login_background'>
      <div className='login_container'>
        <div className="login_form">
          <header className='login_header'>Login</header>
          <form>
            {formError && <p className="error_message">{formError}</p>}
            <br />
            <br />

            {emailError && <p className="error_message">{emailError}</p>}
            <input
              className='login_input_form'
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {passwordError && <p className="error_message">{passwordError}</p>}
            <input
              className='login_input_form'
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            
            <input
              type="button"
              className="login_button login_input_form"
              onClick={handleLogin}
              value="Login"
            />
          </form>
          <div className="login_signup">
            <span className="login_signup">
              Don't have an account? <label className="login_label" onClick={handleSignup}>Signup</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
