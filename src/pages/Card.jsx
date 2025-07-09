import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import empty from '../img/emty.png';

const Card = () => {
  const location = useLocation();
  const initialCard = location.state?.card || [];
  const [card, setCard] = useState([]);

  useEffect(() => {
    const updatedCard = initialCard.map(item => ({ ...item, count: item.count || 1 }));
    setCard(updatedCard);
  }, []);

  const deleteItem = (id) => {
    setCard(prev => prev.filter(item => item.id !== id));
  };

  const increase = (id) => {
    setCard(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCard(prev =>
      prev.map(item =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const total = card.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Savatcha</h1>

      {card.length === 0 ? (
        <div className="text-center flex flex-col items-center">
          <img src={empty} alt="Empty" className="w-60" />
          <h2 className="text-xl font-semibold mt-4">Savatingiz hozircha bo‘sh</h2>
          <p className="text-sm max-w-md mt-2 text-gray-700">
            Bosh sahifadan mahsulot tanlab, savatga qo‘shishingiz mumkin.
          </p>
          <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            ⬅ Bosh sahifaga qaytish
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-5">
            {card.map(item => (
              <li
                key={item.id}
                className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center p-4 gap-5"
              >
                <img src={item.image} alt={item.title} className="w-36 h-36 object-contain" />

                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-base text-gray-700 mb-1">Narxi: ${item.price}</p>
                  <p className="text-sm text-gray-600 mb-3">Kategoriya: {item.category}</p>

                  <div className="flex items-center gap-4 mb-3">
                    <button
                      onClick={() => decrease(item.id)}
                      className="px-3 py-1 bg-yellow-500 rounded text-lg font-bold"
                    >-</button>
                    <span className="text-lg font-semibold">{item.count}</span>
                    <button
                      onClick={() => increase(item.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded text-lg font-bold"
                    >+</button>
                  </div>

                  <p className="text-sm font-medium mb-2">
                    🧮 Jami: <span className="text-green-700 font-semibold">${(item.price * item.count).toFixed(2)}</span>
                  </p>

                  <div className='flex justify-end'>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      🗑 O‘chirish
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">
              🧾 Umumiy summa: <span className="text-green-700">${total.toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
