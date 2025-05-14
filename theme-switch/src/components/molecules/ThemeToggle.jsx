import Button from "../atoms/Button";

const ThemeToggle = ({ setTheme }) => {
  return (
    <div>
      <Button onClick={() => setTheme("light")}>Tema Claro</Button>
      <Button onClick={() => setTheme("dark")}>Tema Escuro</Button>
    </div>
  );
};

export default ThemeToggle;