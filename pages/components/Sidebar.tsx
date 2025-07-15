'use client';

import { useState } from 'react';
import {
  Menu,
  X,
  Home,
  GitPullRequest,
  Folder,
  MessageSquare,
  Code,
  Bot,
  Compass,
  ShoppingCart,
} from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', icon: <Home /> },
    { label: 'Issues', icon: <MessageSquare /> },
    { label: 'Pull requests', icon: <GitPullRequest /> },
    { label: 'Projects', icon: <Folder /> },
    { label: 'Discussions', icon: <MessageSquare /> },
    { label: 'Codespaces', icon: <Code /> },
    { label: 'Copilot', icon: <Bot /> },
    { label: 'Explore', icon: <Compass /> },
    { label: 'Marketplace', icon: <ShoppingCart /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden p-2 m-2 z-50 fixed top-0 left-0">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-zinc-900 text-white w-64 h-full fixed top-0 left-0 z-40 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:block`}
      >
        <div className="p-4 border-b border-zinc-700">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="bg-white rounded-full w-6 h-6" />
            Portfolio
          </h2>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 w-full rounded-md hover:bg-zinc-800 text-sm"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
