export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 sm:p-12 font-sans text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* หัวเรื่อง */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          About <span className="text-indigo-500">Tanapornpan 035</span>
        </h1>

        {/* รูปภาพโปรไฟล์ */}
        <div className="flex justify-center">
          <img
            src="images/Sliders/sliders-02.png"
            alt="Tanapornpan"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-indigo-500"
          />
        </div>

       

        {/* ปุ่มหรือลิงก์เพิ่มเติม */}
        <div>
          
        </div>
      </div>
    </div>
  );
}
