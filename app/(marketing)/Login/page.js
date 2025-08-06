'use client';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>เข้าสู่ระบบ</h2>
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

          <div style={styles.checkboxWrapper}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={styles.checkbox}
            />
            <label style={styles.checkboxLabel}>จำฉันไว้</label>
          </div>

          <button type="submit" style={styles.button}>เข้าสู่ระบบ</button>
        </form>

        <div style={styles.linkContainer}>
          <a href="/Register" style={styles.link}>สมัครสมาชิก</a> |{' '}
          <a href="/forgot-password" style={styles.link}>ลืมรหัสผ่าน</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#1f2937', // สีเทาเข้มอมฟ้า (Slate Gray)
    minHeight: '100vh',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#e0e7ff', // สีฟ้าอ่อนอมขาว
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
    boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)', // แสงเรือง
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
    boxShadow: '0 0 12px rgba(96, 165, 250, 0.6)', // แสงฟ้าอ่อนเรือง
    transition: '0.3s',
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
