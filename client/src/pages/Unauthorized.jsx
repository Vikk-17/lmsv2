import React from 'react'
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <div className="min-h-screen  grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
        <img src='/images/401.svg'  className="w-xl" />
      </div>
      <div className="flex flex-col justify-center items-start px-8">
        <h1 className="text-4xl font-bold mb-4">401 - Unauthorized</h1>
        <p className="text-lg text-gray-600 mb-6">You do not have permission to access this page..</p>
        <Link
           to='/login'
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Login
        </Link>
      </div>

    </div>
  )
}

export default Unauthorized