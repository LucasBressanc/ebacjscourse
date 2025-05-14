const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#ddd"
      }}
    >
      {children}
    </button>
  );
};

export default Button;