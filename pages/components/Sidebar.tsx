'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import {
  User,
  Book,
  Github,
  LayoutDashboard,
  Star,
  Code,
  Building,
  Globe,
  Heart,
  Upload,
  Beaker,
  Wrench,
  Settings,
  ExternalLink,
  BookOpen,
  Users,
  MessageSquare,
  LogOut,
  Smile,
  ArrowRightLeft,
  X,
} from 'lucide-react';
import React from 'react';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  position: 'left' | 'right';
}

const Sidebar = ({ open, setOpen, position }: Props) => {
  const { theme } = useTheme();
  const alignmentClass = position === 'left' ? 'left-0' : 'right-0';
  const transformClass =
    position === 'left'
      ? open
        ? 'translate-x-0'
        : '-translate-x-full'
      : open
        ? 'translate-x-0'
        : 'translate-x-full';

  const borderAndRoundingClasses =
    position === 'left'
      ? `border-r rounded-r-lg ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`
      : `border-l rounded-l-lg ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`;

  return (
    <>
      <div
        className={`fixed top-0 h-full w-80 p-4 transform transition-transform duration-300 ease-in-out z-50 ${alignmentClass} ${transformClass} ${
          theme === 'dark' ? 'bg-[#0d1117] text-white' : 'bg-white text-black'
        } ${borderAndRoundingClasses}`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="/pcboi2.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="font-bold">manishhansal</p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Manish Kumar
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className={`${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <ArrowRightLeft size={18} />
            </button>
            <button
              onClick={() => setOpen(false)}
              className={`${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          className={`flex items-center p-2 mb-4 rounded-md cursor-pointer ${
            theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Smile size={20} className="mr-3" />
          <span>Set status</span>
        </div>

        <hr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} my-2`} />

        <nav className="flex-1 overflow-y-auto">
          <SidebarMenuItem icon={<User size={18} />} label="Your profile" theme={theme} />
          <SidebarMenuItem icon={<Book size={18} />} label="Your repositories" theme={theme} />
          <SidebarMenuItem icon={<Github size={18} />} label="Your Copilot" theme={theme} />
          <SidebarMenuItem
            icon={<LayoutDashboard size={18} />}
            label="Your projects"
            theme={theme}
          />
          <SidebarMenuItem icon={<Star size={18} />} label="Your stars" theme={theme} />
          <SidebarMenuItem icon={<Code size={18} />} label="Your gists" theme={theme} />
          <SidebarMenuItem icon={<Building size={18} />} label="Your organizations" theme={theme} />
          <SidebarMenuItem icon={<Globe size={18} />} label="Your enterprises" theme={theme} />
          <SidebarMenuItem icon={<Heart size={18} />} label="Your sponsors" theme={theme} />

          <hr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} my-2`} />

          <SidebarMenuItem
            icon={<Upload size={18} />}
            label="Try Enterprise"
            badge="Free"
            theme={theme}
          />
          <SidebarMenuItem icon={<Beaker size={18} />} label="Feature preview" theme={theme} />
          <SidebarMenuItem
            icon={<Wrench size={18} />}
            label="GitHub MCP Server"
            badge="Preview"
            theme={theme}
          />
          <SidebarMenuItem icon={<Settings size={18} />} label="Settings" theme={theme} />

          <hr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} my-2`} />

          <SidebarMenuItem icon={<ExternalLink size={18} />} label="GitHub Website" theme={theme} />
          <SidebarMenuItem icon={<BookOpen size={18} />} label="GitHub Docs" theme={theme} />
          <SidebarMenuItem icon={<Users size={18} />} label="GitHub Support" theme={theme} />
          <SidebarMenuItem
            icon={<MessageSquare size={18} />}
            label="GitHub Community"
            theme={theme}
          />

          <hr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} my-2`} />

          <SidebarMenuItem icon={<LogOut size={18} />} label="Sign out" theme={theme} />
        </nav>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black opacity-40 z-40" />
      )}
    </>
  );
};

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  theme: 'light' | 'dark';
}

const SidebarMenuItem = ({ icon, label, badge, theme }: SidebarMenuItemProps) => {
  return (
    <a
      href="#"
      className={`flex items-center justify-between p-2 rounded-md ${
        theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center">
        <div className="w-6">{icon}</div>
        <span className="ml-2 text-sm">{label}</span>
      </div>
      {badge && (
        <span
          className={`px-2 py-0.5 text-xs rounded-full ${
            badge === 'Free' ? 'bg-blue-600 text-white' : 'bg-yellow-400 text-black'
          }`}
        >
          {badge}
        </span>
      )}
    </a>
  );
};

export default Sidebar;
