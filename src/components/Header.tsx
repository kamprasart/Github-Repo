function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          Infinite Audio Archive
        </a>
        <div className="flex gap-6">
          <a href="#licenses" className="text-gray-300 hover:text-white transition-colors">
            Licenses
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
