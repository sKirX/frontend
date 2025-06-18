'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-8 p-4 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
            เกี่ยวกับเรา
          </Link>
        </li>
        <li>
          <Link href="/service" className="hover:text-blue-600 transition-colors duration-200">
            บริการ
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">
            ติดต่อเรา
          </Link>
        </li>
      </ul>
    </nav>
  );
}
