import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">Passion Project: EquiLearn2025</h1>
      
      {/* Top Navigation Buttons */}
      <nav className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        <Link href="/about_us" legacyBehavior>
          <a className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg text-center hover:bg-blue-700">About Us</a>
        </Link>
        <Link href="/proposal" legacyBehavior>
          <a className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg text-center hover:bg-green-700">Project Proposal</a>
        </Link>
        <Link href="/charity" legacyBehavior>
          <a className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg text-center hover:bg-red-700">Charity/Donations</a>
        </Link>
      </nav>

      {/* Grade Level Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl flex-1">
        <Link href="/9thgrade" legacyBehavior>
          <a className="flex items-center justify-center p-10 text-2xl font-semibold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 h-40">9th Grade</a>
        </Link>
        <Link href="/10thgrade" legacyBehavior>
          <a className="flex items-center justify-center p-10 text-2xl font-semibold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 h-40">10th Grade</a>
        </Link>
        <Link href="/11thgrade" legacyBehavior>
          <a className="flex items-center justify-center p-10 text-2xl font-semibold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 h-40">11th Grade</a>
        </Link>
        <Link href="/12grade" legacyBehavior>
          <a className="flex items-center justify-center p-10 text-2xl font-semibold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 h-40">12th Grade</a>
        </Link>
      </div>
    </div>
  );
}

