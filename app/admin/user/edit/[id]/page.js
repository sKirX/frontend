'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function EditUserPage() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    address: '',
    sex: '',
    birthday: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`)
        if (!res.ok) throw new Error('Failed to fetch user data')
        const data = await res.json()
        setForm({
          firstname: data.firstname || '',
          fullname: data.fullname || '',
          lastname: data.lastname || '',
          username: data.username || '',
          address: data.address || '',
          sex: data.sex || '',
          birthday: data.birthday || '',
        })
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'ไม่สามารถโหลดข้อมูลผู้ใช้ได้', 'error')
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchUser()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...form }),
      })
      const data = await res.json()
      if (res.ok) {
        Swal.fire('Success', 'แก้ไขข้อมูลสมาชิกสำเร็จ', 'success')
        router.push('/admin/user') // กลับไปหน้า list
      } else {
        Swal.fire('Error', data.message || 'แก้ไขข้อมูลไม่สำเร็จ', 'error')
      }
    } catch (error) {
      Swal.fire('Error', 'เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error')
    }
  }

  if (loading) return <p style={styles.loading}>Loading...</p>

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>แก้ไขสมาชิก #{id}</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'Firstname', name: 'firstname', type: 'text', required: true },
          { label: 'Fullname', name: 'fullname', type: 'text', required: true },
          { label: 'Lastname', name: 'lastname', type: 'text', required: true },
          { label: 'Username', name: 'username', type: 'text', required: true },
          { label: 'Address', name: 'address', type: 'text', required: false },
        ].map(({ label, name, type, required }) => (
          <label key={name} style={styles.label}>
            {label}:
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required={required}
              style={styles.input}
              placeholder={`กรอก${label.toLowerCase()}`}
              spellCheck="false"
            />
          </label>
        ))}

        <label style={styles.label}>
          Sex:
          <select
            name="sex"
            value={form.sex}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">--เลือกเพศ--</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
        </label>

        <label style={styles.label}>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.btn}>
          💾 บันทึกการแก้ไข
        </button>
      </form>

      <Link href="/admin/user" style={styles.backLink}>
        ← กลับไปหน้ารายการสมาชิก
      </Link>
    </div>
  )
}

const styles = {
  page: {
    maxWidth: 600,
    margin: '50px auto',
    padding: 30,
    backgroundColor: '#0f172a', // สีพื้นหลังเข้มแบบคูล ๆ
    borderRadius: 12,
    color: '#e0f2fe',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 0 15px 3px #2563eb', // เงาสีฟ้าอ่อน ๆ
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 2,
    color: '#60a5fa',
    textShadow: '0 0 10px #3b82f6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    fontWeight: '600',
    color: '#93c5fd',
    userSelect: 'none',
  },
  input: {
    marginTop: 6,
    padding: '10px 14px',
    fontSize: 16,
    borderRadius: 8,
    border: '2px solid #2563eb',
    backgroundColor: '#1e293b',
    color: '#e0f2fe',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontWeight: '500',
  },
  select: {
    marginTop: 6,
    padding: '10px 14px',
    fontSize: 16,
    borderRadius: 8,
    border: '2px solid #2563eb',
    backgroundColor: '#1e293b',
    color: '#e0f2fe',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#3b82f6',
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 18,
    padding: '14px 0',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 12px #60a5fa',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  btnHover: {
    backgroundColor: '#60a5fa',
    transform: 'scale(1.05)',
  },
  backLink: {
    marginTop: 30,
    display: 'block',
    textAlign: 'center',
    color: '#60a5fa',
    fontWeight: '600',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  loading: {
    color: '#60a5fa',
    textAlign: 'center',
    marginTop: 80,
    fontSize: 24,
    fontWeight: '600',
  },
}

// เพิ่ม focus style ผ่าน inline style ไม่รองรับ :focus ใน style object ต้องใช้ css หรือ emotion ถ้าต้องการจริงจัง
// แต่สำหรับตัวอย่างนี้ใช้ onFocus/onBlur แบบง่ายๆ ได้เช่น

