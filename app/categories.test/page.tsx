// // app/categories/page.tsx або в окремому компоненті
// 'use client';
// import { useEffect, useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';



// type Category = {
//   id: string;
//   name: string;
//   type: string;
//   color: string;
// };



// export default function CategoriesPage() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const { data, error } = await supabase
//         .from('categories')
//         .select('*')
//         .eq('type', 'expense');

//       if (error) {
//         console.error('Error fetching categories:', error.message);
//       } else {
//         setCategories(data);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Expense Categories</h1>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat.id} style={{ color: cat.color }}>
//             {cat.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Category = {
  id: string;
  name: string;
  type: string;
  color: string;
};

type Transaction = {
  id: string;
  category_id: string;
  type: string;
  amount: number;
  date: string;
  description: string;
};

export default function TestExpenses() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [message, setMessage] = useState<string>('');

  // Завантажуємо категорії витрат
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('type', 'expense');

      if (error) {
        setMessage('Error loading categories: ' + error.message);
      } else {
        setCategories(data ?? []);
        setMessage('Categories loaded');
      }
    }

    fetchCategories();
  }, []);

  // Функція додавання кількох витрат
  async function addTestExpenses() {
    if (categories.length === 0) {
      setMessage('No categories loaded yet');
      return;
    }

    // Візьмемо перші 3 категорії для прикладу або менше, якщо менше категорій
    const sampleCategories = categories.slice(0, 3);

    const expensesToAdd = sampleCategories.map((cat, i) => ({
      category_id: cat.id,
      type: 'expense',
      amount: (i + 1) * 10 + 0.99, // 10.99, 20.99, 30.99
      date: new Date().toISOString().split('T')[0],
      description: `Test expense for ${cat.name}`,
    }));

    const { data, error } = await supabase.from('transactions').insert(expensesToAdd);

    if (error) {
      setMessage('Error adding expenses: ' + error.message);
    } else {
      setMessage(`Added ${data?.length} expenses successfully!`);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Test Add Expenses</h1>

      <button
        onClick={addTestExpenses}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Test Expenses
      </button>

      <p>{message}</p>

      <h2 className="mt-6 font-semibold">Loaded Expense Categories:</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} style={{ color: cat.color }}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
