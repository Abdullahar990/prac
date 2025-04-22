"use client";
import React, { useState } from 'react';
import styles from '../CSS/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password, rememberMe });
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Image src="/image.png" alt="Login Visual" width={180} height={180} priority />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Username/Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} required />
                    </div>

                    <div className={styles.optionsRow}>
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className={styles.checkbox}/>
                            <label htmlFor="remember" className={styles.checkboxLabel}>Remember me</label>
                        </div>
                        <Link href="/forgot-password" className={styles.forgotPassword}>
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className={styles.loginButton}>Login</button>

                    <div className={styles.socialLogin}>
                        <button type="button" className={`${styles.socialButton} ${styles.facebookButton}`}>
                            <span className={styles.socialIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                                </svg>
                            </span>
                            Continue with Facebook
                        </button>

                        <button type="button" className={`${styles.socialButton} ${styles.googleButton}`}>
                            <span className={styles.socialIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </span>
                            Continue with Google
                        </button>
                    </div>

                    <div className={styles.signupContainer}>
                        <span className={styles.noAccount}>Don't have an account</span>
                        <Link href="/signup" className={styles.signupLink}>
                            SignUp
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;