'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Transaction = {
  id: string;
  amount: number;
  description: string;
  category_id: string;
  date: string;
};

export default function TransactionsList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('❌ Помилка при отриманні транзакцій:', error.message);
        setError(error.message);
      } else {
        setTransactions(data);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🧾 Список транзакцій</h1>
      {error && <p className="text-red-600">Помилка: {error}</p>}
      {transactions.length === 0 ? (
        <p>Немає витрат 😶</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li key={tx.id} className="border p-2 rounded">
              💸 {tx.amount} — {tx.description || 'без опису'}<br />
              📅 {new Date(tx.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

