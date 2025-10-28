import React from "react";

const Button = ({ label, onClick }) => (
<button
    onClick={onClick}
    className="px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition duration-200"
>
    {label}
</button>
);

export default Button;