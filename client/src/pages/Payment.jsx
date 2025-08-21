
import { useState } from 'react';

const Payment =  ()=> {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [saveCard, setSaveCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-semibold mb-8">Checkout</h1>
              
              <form onSubmit={handleSubmit}>
                {/* Billing Address */}
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Billing address</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <select 
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                        >
                          <option value="India">🇮🇳 India</option>
                          <option value="USA">🇺🇸 USA</option>
                          <option value="UK">🇬🇧 UK</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State / Union Territory
                      </label>
                      <div className="relative">
                        <select 
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                        >
                          <option value="">Please select...</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="delhi">Delhi</option>
                          <option value="karnataka">Karnataka</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    Gir Tech is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                  </p>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Payment method</h2>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Secure and encrypted</span>
                      <i className="ri-lock-line ml-1"></i>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    {/* Card Payment */}
                    <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                      <div className="flex items-center mb-4">
                        <input
                          type="radio"
                          id="card"
                          name="payment"
                          value="card"
                          checked={selectedPayment === 'card'}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="mr-3"
                        />
                        <label htmlhtmlFor="card" className="flex items-center font-medium">
                          <i className="ri-bank-card-line mr-2 text-blue-600"></i>
                          Card
                        </label>
                      </div>

                      {selectedPayment === 'card' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Card number
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="1234 1234 1234 1234"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-20"
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                                <img src="https://readdy.ai/api/search-image?query=visa%20credit%20card%20logo%20icon%20small%20payment%20method&width=24&height=16&seq=visa&orientation=landscape" alt="Visa" className="w-6 h-4" />
                                <img src="https://readdy.ai/api/search-image?query=mastercard%20credit%20card%20logo%20icon%20small%20payment%20method&width=24&height=16&seq=mastercard&orientation=landscape" alt="Mastercard" className="w-6 h-4" />
                                <img src="https://readdy.ai/api/search-image?query=american%20express%20credit%20card%20logo%20icon%20small%20payment%20method&width=24&height=16&seq=amex&orientation=landscape" alt="Amex" className="w-6 h-4" />
                                <img src="https://readdy.ai/api/search-image?query=discover%20credit%20card%20logo%20icon%20small%20payment%20method&width=24&height=16&seq=discover&orientation=landscape" alt="Discover" className="w-6 h-4" />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiration
                              </label>
                              <input
                                type="text"
                                value={expiration}
                                onChange={(e) => setExpiration(e.target.value)}
                                placeholder="MM/YY"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVC / CVV
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={cvc}
                                  onChange={(e) => setCvc(e.target.value)}
                                  placeholder="CVC"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                                />
                                <i className="ri-question-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name on card
                            </label>
                            <input
                              type="text"
                              value={nameOnCard}
                              onChange={(e) => setNameOnCard(e.target.value)}
                              placeholder="Name on card"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="saveCard"
                              checked={saveCard}
                              onChange={(e) => setSaveCard(e.target.checked)}
                              className="mr-2"
                            />
                            <label htmlhtmlFor="saveCard" className="text-sm text-gray-700">
                              Securely save this card for my later purchase
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* UPI Payment */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="upi"
                          name="payment"
                          value="upi"
                          checked={selectedPayment === 'upi'}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="mr-3"
                        />
                        <label htmlhtmlFor="upi" className="flex items-center font-medium">
                          <img src="https://readdy.ai/api/search-image?query=UPI%20payment%20logo%20icon%20unified%20payments%20interface%20india&width=24&height=24&seq=upi&orientation=squarish" alt="UPI" className="w-6 h-6 mr-2" />
                          UPI
                        </label>
                      </div>
                    </div>

                    {/* Net Banking */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="netbanking"
                          name="payment"
                          value="netbanking"
                          checked={selectedPayment === 'netbanking'}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="mr-3"
                        />
                        <label htmlhtmlFor="netbanking" className="flex items-center font-medium">
                          <i className="ri-bank-line mr-2 text-blue-600"></i>
                          Net Banking
                        </label>
                      </div>
                    </div>

                    {/* Mobile Wallets */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="wallet"
                          name="payment"
                          value="wallet"
                          checked={selectedPayment === 'wallet'}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="mr-3"
                        />
                        <label htmlhtmlFor="wallet" className="flex items-center font-medium">
                          <i className="ri-wallet-line mr-2 text-gray-600"></i>
                          Mobile Wallets
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Order details (3 courses)</h2>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-4">
                        <img 
                          src={`https://readdy.ai/api/search-image?query=python%20programming%20course%20thumbnail%20data%20science%20bootcamp%20coding%20education%20modern%20clean%20background&width=60&height=60&seq=course${item}&orientation=squarish`}
                          alt="Course thumbnail"
                          className="w-15 h-15 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            Complete Python With DSA Bootcamp + LEETCODE Exercises
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">₹499</div>
                          <div className="text-sm text-gray-500 line-through">₹3,099</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Original Price:</span>
                  <span>₹10,157</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discounts (84% Off):</span>
                  <span className="text-green-600">-₹8,560</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total (3 courses):</span>
                  <span>₹1,597</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  By completing your purchase, you agree to these{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-lock-line mr-2"></i>
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;