
import css from "./home.module.css";
import Categories from "./categories.test/page"
import Form from "./categories.test/addingexpence.test/page"
import TestCat from "./categories.test/manualcat.test/page"
import SingleExp from "./categories.test/expensestest/page"

export default function Home() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to BudgetMate!</h1>
        <p className={css.description}>
          BudgetMate is your easy-to-use companion for tracking monthly expenses and managing your budget. Whether you are saving for something big or just keeping an eye on your spending, BudgetMate helps you stay organized, make smarter choices, and feel more in control of your finances — anytime, anywhere.
        </p>
        <p className={css.description}>
          BudgetMate is your wallet’s best friend — track your spending, set budgets, and finally figure out where all your money actually goes
        </p>
        <Categories />
        <Form />
        <TestCat />
        <SingleExp/>
        
      </div>
    </main>
  );
}
