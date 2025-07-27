import { Link } from "react-router-dom"
function PageNotFound() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <img src='/images/404.svg'  className="w-xl" />
      </div>
      <div className="flex flex-col justify-center items-start px-8">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link
           to='/'
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound