const TabSelector = ({ isActive, children, onClick }) => {
  return (
    <button
      className={`mr-4 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-lg leading-5 cursor-pointer whitespace-nowrap ${
        isActive
          ? "border-red-500 text-red-600 focus:outline-none focus:text-red-800 focus:border-red-700"
          : "border-transparent text-gray-500 hover:text-gray-600 hover:border-red-300 focus:text-gray-600 focus:border-red-300"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabSelector;
