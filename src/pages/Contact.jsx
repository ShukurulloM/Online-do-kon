import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    ism: '',
    familiya: '',
    telefon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan ma\'lumotlar:', form);
    alert("Ma'lumotlar yuborildi!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Kontakt Ma'lumotlari</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="ism">Ism</label>
            <input
              type="text"
              id="ism"
              name="ism"
              value={form.ism}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="familiya">Familiya</label>
            <input
              type="text"
              id="familiya"
              name="familiya"
              value={form.familiya}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="telefon">Telefon raqam</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              placeholder="+998901234567"
              pattern="^\+998\d{9}$"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;