'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import styles from '../CSS/signup.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
const Signup = () => {
    
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.username) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                window.location.href = '/login';
            } else {
                const data = await response.json();
                setErrors({ form: data.message || 'Signup failed. Please try again.' });
            }
        } catch (error) {
            setErrors({ form: 'An error occurred. Please try again later.' });
            console.error('Signup error:', error);
        }
    };
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Image src="/image.png" alt="Login Visual" width={180} height={180} />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {errors.form && (
                        <div className={styles.formError}>
                            {errors.form}
                        </div>
                    )}

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? styles.inputError : ''} />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className={errors.username ? styles.inputError : ''} />
                        {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? styles.inputError : ''} />
                        {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={errors.confirmPassword ? styles.inputError : ''} />
                        {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
                    </div>

                    <div className={styles.loginLink}>
                        Already Have an Account <Link href="/login">Login</Link>
                    </div>

                    <button type="submit" onClick={() => router.push('/login')} className={styles.signupButton}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;