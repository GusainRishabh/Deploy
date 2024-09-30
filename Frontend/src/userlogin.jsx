import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

function UserLogin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/userlogin', {  // Use the correct route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const resText = await response.text();
      console.log(data, resText);
  
      if (response.ok) {
        toast.success('Login successful');
        navigate('/homepage');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 style={styles.header}>User Login</h2>
        <ToastContainer /> {/* Toastify Container */}

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            style={styles.input}
            placeholder="Enter your email"
            {...register('email', { required: true })} // react-hook-form register
          />
          {errors.email && <p style={{ color: 'red' }}>Email is required</p>} {/* Error Handling */}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            style={styles.input}
            placeholder="Enter your password"
            {...register('password', { required: true })} // react-hook-form register
          />
          {errors.password && <p style={{ color: 'red' }}>Password is required</p>} {/* Error Handling */}
        </div>

        <button type="submit" style={styles.button} disabled={isSubmitting}>
          Submit
        </button>

        <div style={styles.registerPrompt}>
          <p style={styles.text}>Don't have an account? <Link to="/userregester" style={styles.link}>Register</Link></p>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: '20px',
  },
  form: {
    backgroundColor: '#1e1e1e',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#e0e0e0',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #333',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#6200ea',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  registerPrompt: {
    textAlign: 'center',
    marginTop: '20px',
  },
  text: {
    color: '#e0e0e0',
  },
  link: {
    color: '#6200ea',
    textDecoration: 'none',
  },
};

export default UserLogin;
