import { Link } from "react-router-dom";

function ThemeItem({ theme }) {
  return (
    <div key={theme.id}>
      <button className='buttonQustion'>
        <Link to={`/questions/${theme.startQuestion}`}>{theme.theme}</Link>
      </button>
    </div>
  );
}

export default ThemeItem;
