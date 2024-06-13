function ThemeItem({ theme }) {
  return (
      <div key={theme.id}>
          <h1>{theme.theme}</h1>
      </div>
  );
}

export default ThemeItem;