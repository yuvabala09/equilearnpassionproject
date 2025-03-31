import Image from 'next/image';

export default function CharityPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Support Educational Equity</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join us in supporting global access to quality education through organizations like Learning Equality.
          </p>
        </header>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/passionprojectcharitypage.png"
            alt="Learning Equality Donation Page"
            width={1380}
            height={690}
            className="w-full object-cover"
          />
        </div>

        {/* About Section */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">About Learning Equality</h2>
          <p className="text-gray-700">
            Learning Equality is a nonprofit edtech organization working to eliminate barriers to education by providing
            quality learning tools to communities without internet access. Their initiatives aim to empower learners
            globally through open-source technology.
          </p>
        </section>

        {/* Origins & Development */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Origins & Development</h2>
          <p className="text-gray-700">
            The organization began in 2012 when Jamie Alexandre and collaborators developed a Raspberry Pi-powered
            prototype to deliver Khan Academy videos offline. This project evolved into KA Lite and eventually led to
            the founding of Learning Equality in 2013 to create inclusive, offline-first educational tools.
          </p>
        </section>

        {/* Core Values */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Strive for Equity:</strong> Focus on underserved communities to create inclusive opportunities.</li>
            <li><strong>Learn Constantly:</strong> Adapt through experience and continual improvement.</li>
            <li><strong>Strengthen Community:</strong> Build relationships and foster collaborative success.</li>
            <li><strong>Embrace Openness:</strong> Prioritize transparency, communication, and knowledge-sharing.</li>
            <li><strong>Lead with Empathy:</strong> Consider diverse experiences to better support learners and educators.</li>
          </ul>
        </section>

        {/* Kolibri Platform */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Kolibri Platform</h2>
          <p className="text-gray-700">
            Kolibri is an offline-first learning platform designed to enable high-quality, interactive education
            experiences in areas without internet. It’s been adopted in over 220 countries and territories.
          </p>
          <div className="mt-4">
            <Image
              src="/learningequalitykolibri.png"
              alt="Kolibri Ecosystem"
              width={1100}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
        </section>

        {/* Global Impact */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Global Impact</h2>
          <p className="text-gray-700">
            From refugee camps to rural schools, Learning Equality has supported educational programs in locations like
            Honduras, India, Sierra Leone, and the U.S., empowering learners and improving educational outcomes around the world.
          </p>
          <div className="mt-4">
            <Image
              src="/learningequalityimpact.png"
              alt="Learning Equality Global Impact"
              width={1100}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Want to make a difference?</h3>
          <p className="text-gray-600 mt-2">
            Your support can help reshape the global education landscape.
          </p>
          <a
            href="https://learningequality.org/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}



