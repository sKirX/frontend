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
    gender: '',
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
        title: 'Please accept the terms before registering',
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
          title: 'Registration Successful',
          text: 'You can now log in to your account',
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
          title: 'Error',
          text: data.message || 'Registration failed',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to connect to the server',
      })
    }
  }

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={styles.title}>REGISTER</h2>

        <label style={styles.label}>Username</label>
        <input
          style={styles.input}
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          placeholder="Enter username"
        />

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter password"
        />

        <label style={styles.label}>Prefix</label>
        <select
          style={styles.select}
          name="prefix"
          value={form.prefix}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select prefix
          </option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
        </select>

        <label style={styles.label}>First Name</label>
        <input
          style={styles.input}
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          placeholder="Enter first name"
        />

        <label style={styles.label}>Last Name</label>
        <input
          style={styles.input}
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          placeholder="Enter last name"
        />

        <label style={styles.label}>Address</label>
        <textarea
          style={{ ...styles.input, height: 80, resize: 'none' }}
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="Enter your address"
        />

        <label style={styles.label}>Gender</label>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              style={styles.radioInput}
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label style={styles.radioLabel}>
            <input
              style={styles.radioInput}
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <label style={styles.label}>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          required
          style={{
            ...styles.input,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            color: '#c9d1d9',
            paddingRight: '36px',
            appearance: 'textfield',
            WebkitAppearance: 'textfield',
            MozAppearance: 'textfield',
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
          I accept the terms and conditions
        </label>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#1f2937',
    minHeight: '100vh',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#e0e7ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#111827',
    padding: 32,
    borderRadius: 16,
    width: '100%',
    maxWidth: 480,
    boxShadow: '0 0 30px #60a5fa',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #3b82f6',
  },
  title: {
    textAlign: 'center',
    color: '#60a5fa',
    marginBottom: 28,
    fontWeight: '900',
    letterSpacing: 6,
    fontSize: 32,
    fontFamily: "'Orbitron', sans-serif",
    textShadow: '0 0 10px #3b82f6',
  },
  label: {
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 14,
    color: '#93c5fd',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    padding: '12px 14px',
    borderRadius: 10,
    border: '2px solid #3b82f6',
    backgroundColor: '#1e293b',
    color: '#e0e7ff',
    fontSize: 16,
    outline: 'none',
    marginBottom: 20,
    transition: 'border-color 0.3s, box-shadow 0.3s',
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
    accentColor: '#60a5fa',
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
    backgroundColor: '#2563eb',
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
}
