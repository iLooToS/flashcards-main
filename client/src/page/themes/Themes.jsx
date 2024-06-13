import { useEffect } from 'react';
import request from '../../services/axios'
import ThemeItem from './ThemeItem';
import { useState } from 'react';

function Themes() {
  const [themes, setThemes] = useState([]);

  const axiosThemes = async () => {
    const { data } = await request.get("/themes");
    if (data.message === "success") {
      setThemes(data.themes);
    }
  };

  useEffect(() => {
    axiosThemes();
  }, []);
  return (
    <div>
    {themes.length > 1 && (
      <div>
          {themes.map((theme) => (
            <ThemeItem theme={theme} key={theme.id} setThemes={setThemes} />
        ))}
      </div>
    )}
    </div>
  );
}

export default Themes;