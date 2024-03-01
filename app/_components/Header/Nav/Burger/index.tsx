interface NavItemProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export default function Burger({ isOpen, onClick }: NavItemProps) {
  return (
    <>
      <button
        className="text-stone-200 w-10 h-10 relative focus:outline-none bg-transparent"
        onClick={onClick}
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-10 bg-current transform transition duration-200 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-10 bg-current transform transition duration-200 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-10 bg-current transform transition duration-200 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2.5"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
}
