import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Savatcha from "../img/savatcha.png";

const API = 'https://fakestoreapi.com/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filtered = products
    .filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()))
    .filter((prod) =>
      category && category !== "hammasini tanlang" && category !== "hammasi tanlanmasin"
        ? prod.category === category
        : true
    );

  const addToCart = (product) => {
    const exists = card.find((item) => item.id === product.id);
    if (!exists) {
      setCard([...card, product]);
    } else {
      alert("Bu mahsulot savatchada bor 🤬");
    }
  };

  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Mahsulot nomi"
            className="w-full md:w-1/2 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border rounded-xl bg-white"
            >
              <option value="">Kategoriya</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="hammasini tanlang">Hammasini tanlang</option>
              <option value="hammasi tanlanmasin">Hammasi tanlanmasin</option>
            </select>

            <Link
              to="/card"
              state={{ card }}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-xl w-full sm:w-auto text-center"
            >
              Savatcha: {card.length}
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prod) => (
            <li
              key={prod.id}
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-56 object-contain bg-white p-4"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-gray-800 mb-1">Narxi: ${prod.price}</p>
                  <p className="text-sm text-black">Kategoriya: {prod.category}</p>
                </div>
                <button onClick={() => addToCart(prod)} className="mt-4 self-end">
                  <img src={Savatcha} alt="Savatcha" className="w-9 hover:scale-110 transition" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
