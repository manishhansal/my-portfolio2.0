import { useState, ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import GitHubNavbar from './GitHubNavbar';
import Sidebar from './Sidebar';
import Tabs from './Tabs';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      <div className={`${theme === 'dark' ? 'bg-[#010409]' : 'bg-white'}`}>
        <Tabs />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={leftSidebarOpen} setOpen={setLeftSidebarOpen} position="left" />
        <main className={`flex-1 p-6 overflow-y-auto`}>{children}</main>
        <Sidebar open={rightSidebarOpen} setOpen={setRightSidebarOpen} position="right" />
      </div>
    </div>
  );
};

export default Layout;
