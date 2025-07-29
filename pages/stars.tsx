import { useTheme } from '@/context/ThemeContext';
import ProfilePageLayout from './components/ProfilePageLayout';
import { ChevronDown, Star } from 'lucide-react';
import React from 'react';

const starredRepos = [
  {
    name: 'shadcn/ui',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    stars: '15.4k',
    lastUpdated: 'Updated 2 days ago',
  },
  {
    name: 'facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    language: 'JavaScript',
    languageColor: 'bg-yellow-500',
    stars: '210k',
    lastUpdated: 'Updated yesterday',
  },
  {
    name: 'vercel/next.js',
    description: 'The React Framework',
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    stars: '110k',
    lastUpdated: 'Updated 5 hours ago',
  },
];

const StarsPage = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const inputBg = theme === 'dark' ? 'bg-[#010409]' : 'bg-white';
  const buttonBg =
    theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200';

  return (
    <ProfilePageLayout>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Search starred repositories..."
            className={`w-full md:w-auto flex-1 px-3 py-1.5 border rounded-md ${borderColor} ${inputBg} ${headingColor}`}
          />
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-1 ${buttonBg} ${borderColor} ${textColor}`}
            >
              <span>Type</span>
              <ChevronDown size={16} />
            </button>
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-1 ${buttonBg} ${borderColor} ${textColor}`}
            >
              <span>Sort</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className={`border-t ${borderColor}`}>
          {starredRepos.map((repo, index) => (
            <div
              key={index}
              className={`flex justify-between items-start py-6 border-b ${borderColor}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <a href="#" className="text-xl font-semibold text-blue-500 hover:underline">
                    {repo.name}
                  </a>
                </div>
                <p className={`text-sm ${textColor} mt-2`}>{repo.description}</p>
                <div className={`flex items-center gap-4 text-sm mt-3 ${textColor}`}>
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`w-3 h-3 rounded-full ${repo.languageColor}`}></span>
                    <span>{repo.language}</span>
                  </div>
                  <span>{repo.lastUpdated}</span>
                </div>
              </div>
              <div>
                <button
                  className={`px-3 py-1.5 border rounded-md flex items-center gap-2 ${buttonBg} ${borderColor} ${textColor}`}
                >
                  <Star size={16} />
                  <span>Starred</span>
                  <span className={`border-l h-4 ${borderColor} mx-1`}></span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default StarsPage;
