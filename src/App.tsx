import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Khoi</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-green-600">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-700 hover:text-green-600">
                  Xe điện
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-green-600"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Thuê xe điện dễ dàng, tiết kiệm & thân thiện môi trường
          </h2>
          <p className="text-gray-600 mb-6">
            Khám phá các mẫu xe điện hiện đại, đặt xe nhanh chóng và tận hưởng
            hành trình xanh!
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Đặt xe ngay
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/taxi-xanh-sm-1.jpg"
            alt="Xe điện"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Car List */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Các mẫu xe điện nổi bật
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Car Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
              alt="Car 1"
              className="w-40 h-24 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold mb-2">VinFast VF e34</h4>
            <p className="text-gray-600 mb-4">
              Quãng đường 300km/lần sạc, nội thất hiện đại.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Thuê ngay
            </button>
          </div>
          {/* Car Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              alt="Car 2"
              className="w-40 h-24 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold mb-2">Tesla Model 3</h4>
            <p className="text-gray-600 mb-4">
              Hiệu suất cao, công nghệ tiên tiến.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Thuê ngay
            </button>
          </div>
          {/* Car Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Car 3"
              className="w-40 h-24 object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-bold mb-2">Kia EV6</h4>
            <p className="text-gray-600 mb-4">
              Thiết kế thể thao, tiết kiệm năng lượng.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Thuê ngay
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2026 EV Car Rental. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
