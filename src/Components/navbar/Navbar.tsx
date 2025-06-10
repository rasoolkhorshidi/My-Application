function Navbar() {
  return <div className="h-8 border-b-gray-400 shadow">
    <div className="flex items-center justify-between h-full px-4">
      <div className="text-lg font-bold">My Application</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>;
}

export default Navbar;
