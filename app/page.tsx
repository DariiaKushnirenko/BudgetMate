"use client";
import css from "./home.module.css";
import Categories from "./categories.test/page";
import Form from "./categories.test/addingexpence.test/page";
import TestCat from "./categories.test/manualcat.test/page";
import SingleExp from "./categories.test/expensestest/page";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import { useDebounce } from "use-debounce";
// import { string } from "yup";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // тимчасово заглушка, або заміни на реальні дані


useEffect(() => {
    if (debouncedSearchQuery) {
      console.log('Debounced search triggered:', debouncedSearchQuery);
      // виклик API або фільтрація тут
    }
  }, [debouncedSearchQuery]);


   const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);


 
  };
  return (
    <main>
      <Header />
        <SearchBox value={searchQuery} onChange={handleSearchChange} />
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      <p className={css.searchResult}>
        {searchQuery && `Search result for: "${searchQuery}"`}
      </p>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to BudgetMate!</h1>
        <p className={css.description}>
          BudgetMate is your easy-to-use companion for tracking monthly expenses
          and managing your budget. Whether you are saving for something big or
          just keeping an eye on your spending, BudgetMate helps you stay
          organized, make smarter choices, and feel more in control of your
          finances — anytime, anywhere.
        </p>
        <p className={css.description}>
          BudgetMate is your wallet’s best friend — track your spending, set
          budgets, and finally figure out where all your money actually goes
        </p>
        <Categories />
        <Form />
        <TestCat />
        <SingleExp />
        <Footer />
      </div>
    </main>
  );
}
