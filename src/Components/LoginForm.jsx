import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Must be at least 4 characters or more')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="login-box">
          <img src="./supp.png" alt="Profile" className="profile-pic" />
          <h2 className="username-title">Neshan</h2>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <a href="#" className="forgot-link">
            Forgot Username / Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;