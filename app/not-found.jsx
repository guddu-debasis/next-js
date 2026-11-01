import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
   
<>
          <Image
            src="/not-found.jpg"
            alt="Example Image"
            width={500}
            height={300}
          />

      <Link 
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30"
      >
        Return Home
      </Link>
    </>
  )
}