import React from "react";

const Button = ({ label, variant = "primary", onClick }) => {
  // classical styles: rounded border, subtle shadow, slightly elevated
  const base = "px-6 py-2 rounded-md font-semibold transition-transform active:translate-y-0.5";
  const styles = {
    primary: `${base} bg-yellow-500 text-gray-900 shadow-md hover:brightness-95`,
    outline: `${base} bg-white text-yellow-600 border border-yellow-600 hover:bg-yellow-50`
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
};

export default Button;