import Card from './components/Card';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 pb-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Carousel Section */}
      <div className="mb-16 w-full max-w-6xl mx-auto">
        <Carousel />
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          About <span className="text-indigo-500">GAME</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl mx-auto">
        <Card />
      </div>

    </div>
  );
}
