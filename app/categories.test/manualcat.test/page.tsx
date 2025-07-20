'use client';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function InsertCategoriesOnce() {
  useEffect(() => {
    const insertCategories = async () => {
      const { data, error } = await supabase.from('categories');
      if (error) {
        console.error('Помилка вставки:', error);
      } else {
        console.log('Категорії додано:', data);
      }
    };

    insertCategories();
  }, []);

  return <p>Додавання категорій...</p>;
}