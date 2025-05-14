import ThemeToggle from '../molecules/ThemeToggle';

const Home = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <h1>{theme === 'light' ? 'Tema Claro' : 'Tema Escuro'}</h1>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Home;
