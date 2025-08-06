'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link href="/" style={styles.brand}>
          ⚡ KilluaBar
        </Link>

        <div style={styles.menu}>
          <Link href="/about" style={styles.link}>
            About
          </Link>
          <Link href="/contact" style={styles.link}>
            Contact
          </Link>
          <Link href="/service" style={styles.link}>
            Service
          </Link>
        </div>

        <div>
          <Link href="/Login" style={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#0f172a',
    padding: '16px 24px',
    boxShadow: '0 0 12px #3b82f6',
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
    color: '#e0f2fe',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa',
    textDecoration: 'none',
    letterSpacing: 2,
    textShadow: '0 0 8px #3b82f6',
  },
  menu: {
    display: 'flex',
    gap: 24,
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: '600',
    transition: 'color 0.3s',
  },
  loginButton: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 0 10px #3b82f6',
    transition: 'all 0.3s ease-in-out',
  },
};
