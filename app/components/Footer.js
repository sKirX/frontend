'use client';
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* เมนู */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">เมนู</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none d-block mb-2">หน้าแรก</a></li>
              <li><a href="/about" className="text-light text-decoration-none d-block mb-2">เกี่ยวกับเรา</a></li>
              <li><a href="/contact" className="text-light text-decoration-none d-block">ติดต่อ</a></li>
            </ul>
          </div>

          {/* ติดต่อ */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">ติดต่อเรา</h5>
            <p className="mb-1">โทร: 084-250-5580</p>
            <p className="mb-3">อีเมล: Tanapornpan@gmail.com</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          {/* โลโก้ หรือ คำอธิบาย */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Tanapornpan 035</h5>
            <p className="small">
              เว็บไซต์ตัวอย่างสำหรับนำเสนอข้อมูลส่วนตัว และผลงานของ Tanapornpan
            </p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Tanapornpan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
