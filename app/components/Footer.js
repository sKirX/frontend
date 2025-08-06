'use client';
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row text-center text-md-start">

          {/* เมนู */}
          <div className="col-md-4 mb-4">
            <h5 style={styles.title}>เมนู</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={styles.link}>หน้าแรก</a></li>
              <li><a href="/about" style={styles.link}>เกี่ยวกับเรา</a></li>
              <li><a href="/contact" style={styles.link}>ติดต่อ</a></li>
            </ul>
          </div>

          {/* ติดต่อ */}
          <div className="col-md-4 mb-4">
            <h5 style={styles.title}>ติดต่อเรา</h5>
            <p style={styles.text}>โทร: 084-250-5580</p>
            <p style={styles.text}>อีเมล: Tanapornpan@gmail.com</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" style={styles.icon}><i className="bi bi-facebook"></i></a>
              <a href="#" style={styles.icon}><i className="bi bi-instagram"></i></a>
              <a href="#" style={styles.icon}><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          {/* โลโก้ หรือ คำอธิบาย */}
          <div className="col-md-4 mb-4">
            <h5 style={styles.title}>Tanapornpan 035</h5>
            <p style={styles.text}>
              เว็บไซต์ตัวอย่างสำหรับนำเสนอข้อมูลส่วนตัว และผลงานของ Tanapornpan
            </p>
          </div>
        </div>

        <hr style={styles.hr} />

        <div className="text-center" style={styles.bottom}>
          &copy; {new Date().getFullYear()} Tanapornpan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#e0f2fe',
    paddingTop: '60px',
    paddingBottom: '40px',
    marginTop: 'auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    color: '#60a5fa',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  },
  text: {
    fontSize: '14px',
    color: '#cbd5e1',
    marginBottom: '0.5rem',
  },
  icon: {
    color: '#60a5fa',
    fontSize: '1.25rem',
    transition: 'transform 0.3s ease, text-shadow 0.3s ease',
    textShadow: '0 0 5px #3b82f6',
  },
  hr: {
    borderTop: '1px solid #3b82f6',
    margin: '2rem 0',
  },
  bottom: {
    fontSize: '13px',
    color: '#94a3b8',
  },
};
