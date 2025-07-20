'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Category = {
  id: string;
  name: string;
  color: string;
};

export default function AddExpense() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // сьогодні
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

useEffect(() => {
  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'expense');
    if (error) {
      console.error('Error loading categories:', error);
    } else {
      console.log('Loaded categories:', data);
      setCategories(data);
    }
  };
  fetchCategories();
}, []);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from('transactions').insert([
      {
        amount: parseFloat(amount),
        date,
        category_id: categoryId,
        description,
        type: 'expense',
      },
    ]);

    if (error) {
      setMessage('Помилка при додаванні: ' + error.message);
    } else {
      setMessage('Витрата додана успішно!');
      setAmount('');
      setDescription('');
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Додати витрату</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>
          Сума:
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-1 w-full"
            required
          />
        </label>

        <label>
          Дата:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-1 w-full"
          
          />
        </label>

    <label className="block mb-4">
  <span className="block mb-1 font-semibold text-gray-700">Категорія:</span>
  <select
    value={categoryId}
    onChange={(e) => setCategoryId(e.target.value)}
    className="block w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900
               focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
  >
    <option value="" disabled>Оберіть категорію</option>
    {categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.name}
      </option>
    ))}
  </select>
</label>
        <label>
          Опис (необов’язково):
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-1 w-full"
          />
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Додати витрату
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
