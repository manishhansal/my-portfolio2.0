'use client';

import {
  Home,
  Github,
  FileText,
  LayoutDashboard,
  Folder,
  MessageSquare,
  Code2,
  Rocket,
  BookOpen,
  Search,
  X,
} from 'lucide-react';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: open ? 0 : '-260px',
    width: '260px',
    height: '100vh',
    backgroundColor: '#010409',
    color: '#fff',
    overflowY: 'auto',
    transition: 'left 0.3s ease',
    zIndex: 1000,
  };

  return (
    <>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div className="flex justify-between items-center p-4">
          <Github className="w-6 h-6" />
          <button onClick={() => setOpen(false)} className="text-white text-2xl cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="px-4 pb-4 border-b border-gray-800">
          <SidebarItem icon={<Home className="w-4 h-4" />} label="Home" />
          <SidebarItem icon={<FileText className="w-4 h-4" />} label="Issues" />
          <SidebarItem icon={<LayoutDashboard className="w-4 h-4" />} label="Pull requests" />
          <SidebarItem icon={<Folder className="w-4 h-4" />} label="Projects" />
          <SidebarItem icon={<MessageSquare className="w-4 h-4" />} label="Discussions" />
          <SidebarItem icon={<Code2 className="w-4 h-4" />} label="Codespaces" />
          <SidebarItem icon={<Rocket className="w-4 h-4" />} label="Copilot" />
          <SidebarItem icon={<BookOpen className="w-4 h-4" />} label="Explore" />
          <SidebarItem icon={<BookOpen className="w-4 h-4" />} label="Marketplace" />
        </nav>

        <div className="px-4 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Repositories</span>
            <Search className="w-4 h-4" />
          </div>
          <ul className="space-y-1 text-sm">
            <li className="text-gray-300 hover:text-white">manishhansal/my-portfolio2.0</li>
            <li className="text-gray-300 hover:text-white">manishhansal/Speech-Recognition</li>
            <li className="text-gray-300 hover:text-white">manishhansal/cal.com</li>
            <li className="text-gray-300 hover:text-white">Show more</li>
          </ul>
        </div>

        <div className="px-4 py-6 text-xs text-gray-500 border-t border-gray-800 mt-6">
          <p>&copy; 2025 GitHub, Inc.</p>
          <a href="#" className="block hover:underline">
            Privacy
          </a>
          <a href="#" className="block hover:underline">
            Terms
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-[900] md:hidden"
        />
      )}
    </>
  );
};

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 px-2 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
    >
      <span>{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

export default Sidebar;
