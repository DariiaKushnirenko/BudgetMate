import css from "./Header.module.css"
import Link from 'next/link';
// import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

const Header = async () =>{
    return (
     <header className={css.header}>
    <Link href="/" aria-label="Home">BudgetMate</Link>
         <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li><Link href="/">Home</Link></li>
          {/* <li><CategoriesMenu /></li> */}
        </ul>
      </nav>
    </header>
    );
};
export default Header;