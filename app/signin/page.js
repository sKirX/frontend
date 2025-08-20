'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        if (rememberMe) {
          localStorage.setItem('remember', 'true');
        }
        router.push('/admin/user');
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Signin</h2>

        {error && (
          <div style={styles.errorBox}>{error}</div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label style={styles.label}>ชื่อผู้ใช้</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
              placeholder="ชื่อผู้ใช้"
            />
          </div>

          <div>
            <label style={styles.label}>รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              placeholder="รหัสผ่าน"
            />
          </div>

          

          <button type="submit" style={styles.button}>เข้าสู่ระบบ</button>
        </form>

        <div style={styles.linkContainer}>
          <a href="/register" style={styles.link}>สมัครสมาชิก</a> |{' '}
          <a href="/forgot-password" style={styles.link}>ลืมรหัสผ่าน</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#1f2937', // เทาเข้มอมฟ้า
    minHeight: '100vh',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#e0e7ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: '2.5rem',
    maxWidth: 400,
    width: '90%',
    boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
    border: '1px solid #60a5fa',
  },
  title: {
    color: '#e0f2fe',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  label: {
    display: 'block',
    marginBottom: 6,
    color: '#bae6fd',
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: 16,
    borderRadius: 10,
    border: '1px solid #60a5fa',
    backgroundColor: '#0f172a',
    color: '#e0f2fe',
    outline: 'none',
    transition: '0.3s',
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    accentColor: '#60a5fa',
  },
  checkboxLabel: {
    color: '#e0f2fe',
    fontWeight: 500,
    fontSize: 14,
    userSelect: 'none',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#1e40af',
    color: '#e0f2fe',
    padding: '12px',
    fontSize: 16,
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    boxShadow: '0 0 12px rgba(96, 165, 250, 0.6)',
    transition: '0.3s',
  },
  errorBox: {
    backgroundColor: 'rgba(239,68,68,0.2)',
    border: '1px solid #ef4444',
    color: '#fecaca',
    padding: '8px 12px',
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 16,
  },
  linkContainer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#94a3b8',
  },
  link: {
    color: '#60a5fa',
    textDecoration: 'none',
    fontWeight: 600,
  },
};
