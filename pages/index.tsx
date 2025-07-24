import GitHubNavbar from './components/GitHubNavbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-[#010409]' : 'bg-white'}`}>
      <GitHubNavbar
        leftOpen={leftSidebarOpen}
        setLeftOpen={setLeftSidebarOpen}
        rightOpen={rightSidebarOpen}
        setRightOpen={setRightSidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={leftSidebarOpen} setOpen={setLeftSidebarOpen} position="left" />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out p-4 ${
            leftSidebarOpen ? 'ml-0 md:ml-80' : 'ml-0'
          } ${rightSidebarOpen ? 'mr-0 md:mr-80' : 'mr-0'}`}
        >
          <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Welcome to Dashboard
          </h1>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            This is the main content area. The sidebars will push this content when they open on
            larger screens.
          </p>
        </main>
        <Sidebar open={rightSidebarOpen} setOpen={setRightSidebarOpen} position="right" />
      </div>
    </div>
  );
}
