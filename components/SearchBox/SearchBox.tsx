import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void; // додатково, якщо хочеш мати кнопку
}

export default function SearchBox({ value, onChange, onSearch }: SearchBoxProps) {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Search spendings"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {onSearch && (
        <button className={css.button} onClick={onSearch}>
          Search
        </button>
      )}
    </div>
  );
}