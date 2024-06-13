import { Link } from "react-router-dom";

function ThemeItem({ theme }) {
  return (
    <div key={theme.id}>
      <button>
        <Link to={`/themes/${theme.id}/questions`}>{theme.theme}</Link>
      </button>
    </div>
  );
}

export default ThemeItem;
