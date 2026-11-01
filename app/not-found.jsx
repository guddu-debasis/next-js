import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* Blank Placeholder for Image / Illustration */}
      <div className="w-64 h-70 md:w-80 md:h-80 bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
          <img src="/not-found.jpg" alt="Example Image" />

      </div>

      {/* Heading & Message */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
        Not Found
      </h2>
      <p className="text-gray-400 text-center max-w-md mb-8">
        Could not find the requested resource or page you were looking for.
      </p>

      {/* Return Home Link */}
      <Link 
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30"
      >
        Return Home
      </Link>
    </div>
  )
}