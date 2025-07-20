
import { useState } from 'react';
import { CiCamera } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


export default function Profile() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Sumit',
    lastName: 'Kumar',
    phone: '+91 1234-567-891',
    email: 'sumitkr1962@gmail.com',
    address: 'Rajiv colony Sec-56a, Faridabad, Ballabhgarh Haryana 121004',
    gender: 'Male',
    birthday: '01 Jun 2003'
  });

  const [securityInfo, setSecurityInfo] = useState({
    password: '************',
    currentPassword: '************',
    newPassword: '************',
    confirmPassword: '************',
    recoveryEmail: 'hello.sumit1962@gmail.com'
  });

  const [isPersonalEditing, setIsPersonalEditing] = useState(false);
  const [isSecurityEditing, setIsSecurityEditing] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Indian%20man%20with%20friendly%20smile%2C%20wearing%20dark%20casual%20shirt%2C%20clean%20studio%20background%2C%20natural%20lighting%2C%20modern%20portrait%20photography%20style%2C%20high%20quality&width=300&height=300&seq=profile-photo&orientation=squarish"
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
              <CiCamera />
            </button>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <button 
              onClick={() => setIsPersonalEditing(!isPersonalEditing)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <CiEdit className='text-lg'/>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">First Name</label>
              <input
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                disabled={!isPersonalEditing}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Last Name</label>
              <input
                type="text"
                value={personalInfo.lastName}
                onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                disabled={!isPersonalEditing}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Phone no</label>
              <input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                disabled={!isPersonalEditing}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Email Address</label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                disabled={!isPersonalEditing}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-500 mb-2">Address</label>
            <input
              type="text"
              value={personalInfo.address}
              onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
              disabled={!isPersonalEditing}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Gender</label>
              <div className="relative">
                <select
                  value={personalInfo.gender}
                  onChange={(e) => setPersonalInfo({...personalInfo, gender: e.target.value})}
                  disabled={!isPersonalEditing}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 appearance-none pr-8"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Birthday</label>
              <div className="relative">
                <input
                  type="text"
                  value={personalInfo.birthday}
                  onChange={(e) => setPersonalInfo({...personalInfo, birthday: e.target.value})}
                  disabled={!isPersonalEditing}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 pr-10"
                />
                <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>

          {isPersonalEditing && (
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsPersonalEditing(false)}
                className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsPersonalEditing(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Security Information Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Security Information</h2>
            <button 
              onClick={() => setIsSecurityEditing(!isSecurityEditing)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <CiEdit/>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-500 mb-2">Password</label>
                <input
                  type="password"
                  value={securityInfo.password}
                  disabled={true}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none disabled:bg-gray-50 disabled:text-gray-700"
                />
              </div>
              <button className="ml-4 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap text-sm font-medium">
                CHANGE PASSWORD
              </button>
            </div>

            {isSecurityEditing && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Current Password</label>
                  <input
                    type="password"
                    value={securityInfo.currentPassword}
                    onChange={(e) => setSecurityInfo({...securityInfo, currentPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">New Password</label>
                  <input
                    type="password"
                    value={securityInfo.newPassword}
                    onChange={(e) => setSecurityInfo({...securityInfo, newPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={securityInfo.confirmPassword}
                    onChange={(e) => setSecurityInfo({...securityInfo, confirmPassword: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Recovery Email</label>
              <input
                type="email"
                value={securityInfo.recoveryEmail}
                onChange={(e) => setSecurityInfo({...securityInfo, recoveryEmail: e.target.value})}
                disabled={!isSecurityEditing}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700"
              />
            </div>
          </div>

          {isSecurityEditing && (
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsSecurityEditing(false)}
                className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsSecurityEditing(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}