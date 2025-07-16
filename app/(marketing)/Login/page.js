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
    <div style={styles.container}>
      <h2 style={styles.title}>เข้าสู่ระบบ</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
          placeholder="ใส่ชื่อผู้ใช้"
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
          placeholder="ใส่รหัสผ่าน"
        />

        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={styles.checkbox}
          />
          จำฉันไว้
        </label>

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <div style={styles.linkContainer}>
        <a href="/Register" style={styles.link}>สมัครสมาชิก</a> |{' '}
        <a href="/forgot-password" style={styles.link}>ลืมรหัสผ่าน</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 360,
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: 12,
    backgroundColor: '#e0f2f1', // ฟ้าอ่อนสดใส
    boxShadow: '0 4px 15px rgba(0, 150, 136, 0.4)', // เงาสีเขียว
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#004d40', // เขียวเข้ม
    textAlign: 'center',
  },
  title: {
    marginBottom: 24,
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'left',
  },
  input: {
    padding: '10px 12px',
    fontSize: 16,
    borderRadius: 8,
    border: '3px solid #00796b', // ขอบเขียวเข้มหนา
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontWeight: '600',
    fontSize: 14,
    cursor: 'pointer',
    userSelect: 'none',
    color: '#00796b',
  },
  checkbox: {
    width: 18,
    height: 18,
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#00796b', // เขียวเข้ม
    color: '#e0f2f1', // ฟ้าอ่อน
    border: 'none',
    borderRadius: 10,
    padding: '12px 0',
    fontSize: 18,
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 8px rgba(0, 121, 107, 0.5)',
    transition: 'background-color 0.3s ease',
  },
  linkContainer: {
    marginTop: 20,
    fontSize: 14,
    color: '#004d40',
  },
  link: {
    color: '#00796b',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
