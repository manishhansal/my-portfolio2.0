'use client';

import { useTheme } from '@/context/ThemeContext';
import { BookOpen, Book, LayoutDashboard, Star, Package as PackageIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const tabsData = [
  { name: 'Overview', href: '/', icon: BookOpen },
  { name: 'Repositories', href: '/repositories', icon: Book, count: 107 },
  { name: 'Projects', href: '/projects', icon: LayoutDashboard },
  { name: 'Packages', href: '/packages', icon: PackageIcon },
  { name: 'Stars', href: '/stars', icon: Star, count: 27 },
];

const Tabs = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <div
      className={`border-b ${
        theme === 'dark' ? 'bg-[#010409] border-gray-800' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabsData.map(tab => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center cursor-pointer ${
                router.pathname === tab.href
                  ? `border-pink-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`
                  : `border-transparent ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:border-gray-700'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
              }`}
            >
              <tab.icon
                className={`mr-2 h-5 w-5 ${
                  router.pathname === tab.href
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-gray-700'
                    : theme === 'dark'
                      ? 'text-gray-400'
                      : 'text-gray-500'
                }`}
                aria-hidden="true"
              />
              {tab.name}
              {tab.count !== undefined && (
                <span
                  className={`ml-2 hidden md:inline-block py-0.5 px-2 rounded-full text-xs font-medium ${
                    theme === 'dark' ? 'bg-[#21262d] text-gray-200' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
