import { CalendarDays  } from "lucide-react";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays className="text-white" size={24} />
            <span className="text-xl font-bold text-white">minPlanner</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#projects" className="text-zinc-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 