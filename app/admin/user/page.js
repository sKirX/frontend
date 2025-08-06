'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 USERS LIST</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Firstname</th>
              <th style={styles.th}>Fullname</th>
              <th style={styles.th}>Lastname</th>
              <th style={styles.th}>Username</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Sex</th>
            <th style={styles.th}>Birthday</th>
              <th style={styles.th}>Edit</th>
              <th style={styles.th}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.fullname}</td>
              <td>{item.lastname}</td>
              <td>{item.username}</td>
              <td>{item.address}</td>
              <td>{item.sex}</td>
              <td>{item.birthday}</td>
              <td><Link href={`/admin/user/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                <td style={styles.td}>
                  <button
                    style={styles.delBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#e0f2fe',
    padding: '60px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 30,
    width: '100%',
    maxWidth: 960,
    boxShadow: '0 0 20px #3b82f6',
    border: '1px solid #3b82f6',
  },
  title: {
    textAlign: 'center',
    color: '#60a5fa',
    marginBottom: 30,
    fontSize: 26,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 16,
  },
  th: {
    backgroundColor: '#0f172a',
    color: '#93c5fd',
    padding: '12px 8px',
    borderBottom: '2px solid #3b82f6',
    textAlign: 'center',
    fontWeight: '700',
  },
  tr: {
    backgroundColor: '#1e293b',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '10px 8px',
    borderBottom: '1px solid #334155',
    color: '#e0f2fe',
    textAlign: 'left',
  },
  tdCenter: {
    padding: '10px 8px',
    borderBottom: '1px solid #334155',
    color: '#e0f2fe',
    textAlign: 'center',
  },
  editBtn: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '6px 12px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: '0.3s',
  },
  delBtn: {
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '6px 12px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: '0.3s',
  },
};
