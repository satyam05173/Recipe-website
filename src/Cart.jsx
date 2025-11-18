const Cart = ({ cart = [], removeToCart }) => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      {cart.length === 0 ? (
        <div className="flex items-center justify-center min-h-96">
          <p className="text-xl text-gray-600 text-center">Your cart is empty. Start shopping!</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cart.map((item) => (
              <div key={item.idMeal} className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition">
                <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{item.strMeal}</h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{(item.strInstructions || '').substring(0, 100)}...</p>
                  <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold transition"
                    onClick={() => removeToCart(item.idMeal)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart