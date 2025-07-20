import css from "./SidebarNotes.module.css";
import Link from "next/link";


const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

const SidebarNotes = async () => { 

  return (
    <div>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter/All" className={css.menuLink}>
            All Notes
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNotes;
