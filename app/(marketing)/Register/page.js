'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    prefix: '',
    firstName: '',
    lastName: '',
    address: '',
    sex: '',
    birthday: '',
    acceptTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.acceptTerms) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณายอมรับเงื่อนไขก่อนสมัครสมาชิก',
      })
      return
    }

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
          firstname: form.prefix,
          fullname: form.firstName,
          lastname: form.lastName,
          address: form.address,
          sex: form.gender,
          birthday: form.birthday,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
        })
        setForm({
          username: '',
          password: '',
          prefix: '',
          firstName: '',
          lastName: '',
          address: '',
          gender: '',
          birthday: '',
          acceptTerms: false,
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: data.message || 'ไม่สามารถสมัครสมาชิกได้',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      })
    }
  }

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={styles.title}>REGISTER</h2>

        <label style={styles.label}>ชื่อผู้ใช้</label>
        <input
          style={styles.input}
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          placeholder="Enter username"
        />

        <label style={styles.label}>รหัสผ่าน</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter password"
        />

        <label style={styles.label}>คำนำหน้าชื่อ</label>
        <select
          style={styles.select}
          name="prefix"
          value={form.prefix}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            เลือกคำนำหน้า
          </option>
          <option value="นาย">นาย</option>
          <option value="นางสาว">นางสาว</option>
          <option value="นาง">นาง</option>
        </select>

        <label style={styles.label}>ชื่อ</label>
        <input
          style={styles.input}
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          placeholder="ชื่อจริง"
        />

        <label style={styles.label}>นามสกุล</label>
        <input
          style={styles.input}
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          placeholder="นามสกุล"
        />

        <label style={styles.label}>ที่อยู่</label>
        <textarea
          style={{ ...styles.input, height: 80, resize: 'none' }}
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="ที่อยู่ของคุณ"
        />

        <label style={styles.label}>เพศ</label>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              style={styles.radioInput}
              type="radio"
              name="gender"
              value="ชาย"
              checked={form.gender === 'ชาย'}
              onChange={handleChange}
              required
            />
            ชาย
          </label>
          <label style={styles.radioLabel}>
            <input
              style={styles.radioInput}
              type="radio"
              name="gender"
              value="หญิง"
              checked={form.gender === 'หญิง'}
              onChange={handleChange}
            />
            หญิง
          </label>
        </div>

        <input
  type="date"
  name="birthday"
  value={form.birthday}
  onChange={handleChange}
  required
  style={{
    ...styles.input,
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // ฟ้าอ่อน ๆ โปร่งแสง
    color: '#c9d1d9', // สีตัวหนังสืออ่อน
    paddingRight: '36px', // เพิ่มพื้นที่ให้ปุ่มเลือกวันโผล่มา
    appearance: 'textfield', // ให้ใช้ native UI
    WebkitAppearance: 'textfield', // สำหรับ Safari/Chrome
    MozAppearance: 'textfield', // สำหรับ Firefox
  }}
/>

        <label style={styles.checkboxLabel}>
          <input
            style={styles.checkboxInput}
            type="checkbox"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
            required
          />
          ยอมรับเงื่อนไข
        </label>

        <button type="submit" style={styles.button}>
          สมัครสมาชิก
        </button>
      </form>
    </div>
  )
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
  form: {
    backgroundColor: '#111827', // สีดำอมเทาเข้ม
    padding: 32,
    borderRadius: 16,
    width: '100%',
    maxWidth: 480,
    boxShadow: '0 0 30px #60a5fa', // เงาฟ้าเข้มๆ
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #3b82f6', // เส้นขอบสีฟ้า
  },
  title: {
    textAlign: 'center',
    color: '#60a5fa', // ฟ้าอมม่วงสว่าง
    marginBottom: 28,
    fontWeight: '900',
    letterSpacing: 6,
    fontSize: 32,
    fontFamily: "'Orbitron', sans-serif", // ฟอนต์ดูโมเดิร์นและเท่ (ใช้ Google Font ถ้าสามารถ)
    textShadow: '0 0 10px #3b82f6',
  },
  label: {
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 14,
    color: '#93c5fd', // ฟ้าอ่อน
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    padding: '12px 14px',
    borderRadius: 10,
    border: '2px solid #3b82f6', // เส้นขอบฟ้า
    backgroundColor: '#1e293b', // ฟ้าเทาเข้ม
    color: '#e0e7ff',
    fontSize: 16,
    outline: 'none',
    marginBottom: 20,
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  inputFocus: {
    borderColor: '#60a5fa',
    boxShadow: '0 0 8px #60a5fa',
  },
  select: {
    padding: '12px 14px',
    borderRadius: 10,
    border: '2px solid #3b82f6',
    backgroundColor: '#1e293b',
    color: '#e0e7ff',
    fontSize: 16,
    outline: 'none',
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  radioGroup: {
    display: 'flex',
    gap: 24,
    marginBottom: 24,
  },
  radioLabel: {
    color: '#60a5fa',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 16,
    userSelect: 'none',
  },
  radioInput: {
    cursor: 'pointer',
    width: 20,
    height: 20,
    accentColor: '#60a5fa', // สีฟ้าตอนเลือก
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontWeight: '700',
    color: '#60a5fa',
    marginBottom: 32,
    cursor: 'pointer',
    fontSize: 16,
    userSelect: 'none',
  },
  checkboxInput: {
    cursor: 'pointer',
    width: 22,
    height: 22,
    accentColor: '#60a5fa',
  },
  button: {
    backgroundColor: '#2563eb', // น้ำเงินสดใส
    color: '#e0e7ff',
    padding: '14px 0',
    fontSize: 20,
    fontWeight: '900',
    border: 'none',
    borderRadius: 14,
    cursor: 'pointer',
    letterSpacing: 2,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 0 12px #3b82f6',
  },
  buttonHover: {
    backgroundColor: '#3b82f6',
    boxShadow: '0 0 20px #60a5fa',
  },
}
