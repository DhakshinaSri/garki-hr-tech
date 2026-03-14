import { useNavigate } from "react-router-dom";

export default function Button({
  text = "Click Me",
  to,
  onClick,
  type = "button",
  className = "",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-black text-white px-8 py-2 rounded-lg text-lg font-medium hover:bg-[#FA9A2A] transition ${className}`}
    >
      {text}
    </button>
  );
}
