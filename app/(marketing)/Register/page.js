'use client';

import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    prefix: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthday: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.acceptTerms) {
      alert('กรุณายอมรับเงื่อนไข');
      return;
    }
    console.log('Form submitted:', form);
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={styles.title}>REGISTER</h2>

        {/* Username */}
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

        {/* Password */}
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

        {/* Prefix */}
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

        {/* First name */}
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

        {/* Last name */}
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

        {/* Address */}
        <label style={styles.label}>ที่อยู่</label>
        <textarea
          style={{ ...styles.input, height: 80, resize: 'none' }}
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="ที่อยู่ของคุณ"
        />

        {/* Gender */}
        <label style={{ ...styles.label, marginTop: 10 }}>เพศ</label>
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

        {/* Birthday */}
        <label style={styles.label}>วันเกิด</label>
        <input
          style={styles.input}
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          required
        />

        {/* Accept Terms */}
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

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#0d1117', // dark background
    minHeight: '100vh',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#c9d1d9', // light gray text
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#161b22', // darker form bg
    padding: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 480,
    boxShadow: '0 0 20px #58a6ff', // subtle blue glow
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    color: '#58a6ff',
    marginBottom: 24,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 14,
    color: '#8b949e',
  },
  input: {
    padding: '10px 12px',
    borderRadius: 6,
    border: '2px solid #30363d',
    backgroundColor: '#0d1117',
    color: '#c9d1d9',
    fontSize: 16,
    outline: 'none',
    marginBottom: 16,
    transition: 'border-color 0.3s ease',
  },
  select: {
    padding: '10px 12px',
    borderRadius: 6,
    border: '2px solid #30363d',
    backgroundColor: '#0d1117',
    color: '#c9d1d9',
    fontSize: 16,
    outline: 'none',
    marginBottom: 16,
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
  },
  radioGroup: {
    display: 'flex',
    gap: 20,
    marginBottom: 16,
  },
  radioLabel: {
    color: '#58a6ff',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  radioInput: {
    cursor: 'pointer',
    width: 18,
    height: 18,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: '600',
    color: '#58a6ff',
    marginBottom: 24,
    cursor: 'pointer',
  },
  checkboxInput: {
    cursor: 'pointer',
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#238636', // greenish-blue
    color: '#f0f6fc',
    padding: '12px 0',
    fontSize: 18,
    fontWeight: '700',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
