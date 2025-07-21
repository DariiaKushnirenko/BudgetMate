import Link from "next/link";
import css from "./Footer.module.css"

const Footer = () => {
      return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} BudgetMate. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Dariia K</p>
          <p>
            Contact me:
            <Link href="<mailto:Da23v12@gmail.com>">Da23v12@gmail.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer