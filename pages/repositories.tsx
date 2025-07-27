import { useTheme } from '@/context/ThemeContext';
import ProfilePageLayout from './components/ProfilePageLayout';
import { Book, ChevronDown, Star } from 'lucide-react';
import React from 'react';

const repos = [
  {
    name: 'my-portfolio2.0',
    isPublic: true,
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    lastUpdated: 'Updated 15 hours ago',
  },
  {
    name: 'chrome-extension-live-translator-and-summarize',
    isPublic: true,
    language: 'JavaScript',
    languageColor: 'bg-yellow-500',
    lastUpdated: 'Updated 3 days ago',
  },
  {
    name: 'movie-database-frontend',
    isPublic: true,
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    lastUpdated: 'Updated last week',
  },
  {
    name: 'movie-database-api',
    isPublic: true,
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    lastUpdated: 'Updated last week',
  },
  {
    name: 'cal.com',
    isPublic: true,
    forkedFrom: 'calcom/cal.com',
    description: 'Scheduling infrastructure for absolutely everyone.',
    language: 'TypeScript',
    languageColor: 'bg-blue-500',
    otherLanguage: 'Other',
    lastUpdated: 'Updated on Jun 20',
  },
];

const RepositoriesPage = () => {
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
            placeholder="Find a repository..."
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
              <span>Language</span>
              <ChevronDown size={16} />
            </button>
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-1 ${buttonBg} ${borderColor} ${textColor}`}
            >
              <span>Sort</span>
              <ChevronDown size={16} />
            </button>
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700`}
            >
              <Book size={16} />
              <span>New</span>
            </button>
          </div>
        </div>

        <div className={`border-t ${borderColor}`}>
          {repos.map((repo, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-6 border-b ${borderColor}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <a href="#" className="text-xl font-semibold text-blue-500 hover:underline">
                    {repo.name}
                  </a>
                  {repo.isPublic && (
                    <span
                      className={`text-xs font-semibold border ${borderColor} rounded-full px-2 py-0.5 ${textColor}`}
                    >
                      Public
                    </span>
                  )}
                </div>
                {repo.forkedFrom && (
                  <p className={`text-sm ${textColor} mt-1`}>Forked from {repo.forkedFrom}</p>
                )}
                {repo.description && (
                  <p className={`text-sm ${textColor} mt-2`}>{repo.description}</p>
                )}
                <div className={`flex items-center gap-4 text-sm mt-3 ${textColor}`}>
                  <div className="flex items-center gap-1">
                    <span className={`w-3 h-3 rounded-full ${repo.languageColor}`}></span>
                    <span>{repo.language}</span>
                  </div>
                  {repo.otherLanguage && (
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                      <span>{repo.otherLanguage}</span>
                    </div>
                  )}
                  <span>{repo.lastUpdated}</span>
                </div>
              </div>
              <div>
                <button
                  className={`px-3 py-1.5 border rounded-md flex items-center gap-2 ${buttonBg} ${borderColor} ${textColor}`}
                >
                  <Star size={16} />
                  <span>Star</span>
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

export default RepositoriesPage;
