'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setToken(null);
    router.push('/signin');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link href="/" style={styles.brand}>
          ⚡ KilluaBar
        </Link>

        <div style={styles.menu}>
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/contact" style={styles.link}>Contact</Link>
          <Link href="/service" style={styles.link}>Service</Link>
        </div>

        <div style={styles.authButtons}>
          {!token && (
            <Link href="/signin" style={{ ...styles.loginButton, marginRight: 10 }}>
              Sign In
            </Link>
          )}

          {!token && (
            <Link href="/Login" style={styles.loginButton}>
              Login
            </Link>
          )}

          {token && (
            <button style={styles.logoutButton} onClick={handleSignOut}>
              SignOut
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#0f172a',
    padding: '16px 32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#e0f2fe',
  },
  brand: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#60a5fa',
    textDecoration: 'none',
    letterSpacing: 2,
    textShadow: '0 0 12px #3b82f6',
  },
  menu: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 600,
    transition: 'all 0.3s ease-in-out',
  },
  authButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
    transition: 'all 0.3s ease-in-out',
    border: 'none',
    cursor: 'pointer',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: 8,
    fontWeight: 'bold',
    boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
};
