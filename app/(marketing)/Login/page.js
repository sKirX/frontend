'use client';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminUser = {
      username: 'admin',
      password: 'admin123',
      fullname: 'Admin',
      role: 'admin',
    };

    try {
      if (!username || !password) {
        Swal.fire({
          icon: 'error',
          title: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
        });
        return;
      }

      // Admin login
      if (username === adminUser.username && password === adminUser.password) {
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem(
          'user',
          JSON.stringify({
            username: adminUser.username,
            fullname: adminUser.fullname,
            role: adminUser.role,
          })
        );

        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ (Admin)',
          text: `ยินดีต้อนรับ ${adminUser.fullname}`,
        }).then(() => router.push('/'));
        return;
      }

      // Local users
      const localUsers = [
        {
          username: 'Fang',
          password: '123456',
          fullname: 'Supalerk Audomkasop',
          role: 'student',
        },
        {
          username: 'Teacher',
          password: '123',
          fullname: 'อาจารย์',
          role: 'teacher',
        },
      ];

      const foundUser = localUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (foundUser) {
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem(
          'user',
          JSON.stringify({
            username: foundUser.username,
            fullname: foundUser.fullname,
            role: foundUser.role,
          })
        );

        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
          text: `ยินดีต้อนรับ ${foundUser.fullname}`,
        }).then(() => router.push('/'));
        return;
      }

      // API login
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      let data;
      try { data = await res.json(); } catch { data = {}; }

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
          text: `ยินดีต้อนรับ ${data.user?.fullname || username}`,
        }).then(() => router.push('/'));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          text: data?.message || data?.error || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>Remember Me</span>
          </label>

          <button type="submit">Login</button>
          <p className="register-link">
            Don’t have an account? <a href="/Register">Register</a>
          </p>
        </form>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        .login-page {
          background-color: #1f2937;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #e0e7ff;
        }
        .login-container {
          background-color: #1e293b;
          border-radius: 16px;
          padding: 2.5rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
          border: 1px solid #60a5fa;
        }
        .form-title {
          color: #e0f2fe;
          font-size: 26px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 24px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        input[type='text'],
        input[type='password'] {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #60a5fa;
          background-color: #0f172a;
          color: #e0f2fe;
          outline: none;
          transition: 0.3s;
        }
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e0f2fe;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
        }
        .checkbox-container input {
          width: 18px;
          height: 18px;
          accent-color: #60a5fa;
        }
        button {
          background-color: #1e40af;
          color: #e0f2fe;
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.6);
          transition: 0.3s;
        }
        button:hover {
          background-color: #2563eb;
        }
        .register-link {
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
          color: #94a3b8;
        }
        .register-link a {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
