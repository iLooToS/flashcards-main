import { Link } from "react-router-dom";
import './ThemeItem.css';

function ThemeItem({ theme }) {
  return (
    <div key={theme.id}>
      <button className="button-theme">
        <Link to={`/questions/${theme.startQuestion}`}>{theme.theme}</Link>
      </button>
    </div>
  );
}

export default ThemeItem;
