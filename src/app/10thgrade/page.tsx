import Link from "next/link";

export default function TenthGrade() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-12 w-full">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center">10th Grade Math Resources</h1>

      {/* Learning Opportunities Section */}
      <div className="w-full max-w-6xl space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Learning Opportunities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/10thgrade/curriculum" legacyBehavior>
              <a className="w-full h-48 flex items-center justify-center px-8 py-8 text-2xl font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700">
                Curriculum
              </a>
            </Link>
            <p className="text-gray-700">Explore the full syllabus and learning goals for the year.</p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/10thgrade/content" legacyBehavior>
              <a className="w-full h-48 flex items-center justify-center px-8 py-8 text-2xl font-bold text-white bg-green-600 rounded-xl hover:bg-green-700">
                Content
              </a>
            </Link>
            <p className="text-gray-700">Access comprehensive notes and guides for every topic.</p>
          </div>

          {/* Videos */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/10thgrade/videos" legacyBehavior>
              <a className="w-full h-48 flex items-center justify-center px-8 py-8 text-2xl font-bold text-white bg-red-600 rounded-xl hover:bg-red-700">
                Videos
              </a>
            </Link>
            <p className="text-gray-700">Watch video lessons to visualize key concepts.</p>
          </div>
        </div>
      </div>

      {/* Interactive Activities Section */}
      <div className="w-full max-w-6xl space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Interactive Activities</h2>
          <p className="mt-2 text-lg text-gray-700">
            Apply what you’ve learned with engaging questions and interactive exercises that test your understanding in real time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* MCQs */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/10thgrade/mcqs" legacyBehavior>
              <a className="w-full h-48 flex items-center justify-center px-8 py-8 text-2xl font-bold text-white bg-purple-600 rounded-xl hover:bg-purple-700">
                MCQs
              </a>
            </Link>
            <p className="text-gray-700">Sharpen your knowledge with multiple-choice questions by topic.</p>
          </div>

          {/* FRQs */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/10thgrade/frqs" legacyBehavior>
              <a className="w-full h-48 flex items-center justify-center px-8 py-8 text-2xl font-bold text-white bg-yellow-600 rounded-xl hover:bg-yellow-700">
                FRQs
              </a>
            </Link>
            <p className="text-gray-700">Practice written responses to deepen your understanding.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
