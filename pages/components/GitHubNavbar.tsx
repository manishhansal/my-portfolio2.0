import { Menu, Search, Plus, Bell, Users, LayoutList, GitMerge, Mail } from 'lucide-react';
import { BTN_PRIMARY_STYLE, BTN_PRIMARY_TAILWIND, IMAGE_CONSTANTS } from '@/utils/constants';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from '@/context/ThemeContext';

interface Props {
  leftOpen: boolean;
  setLeftOpen: (value: boolean) => void;
  rightOpen: boolean;
  setRightOpen: (value: boolean) => void;
}

const GitHubNavbar = ({ leftOpen, setLeftOpen, rightOpen, setRightOpen }: Props) => {
  const { theme } = useTheme();
  return (
    <nav
      className={`px-4 py-4 flex justify-between items-center w-full shadow-md ${
        theme === 'dark' ? 'bg-[#010409] text-white' : 'bg-white text-black'
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button
          className={`cursor-pointer rounded-md p-1 hover:bg-[#2f3742] transition-colors flex items-center justify-center ${
            theme === 'dark' ? 'hover:bg-[#21262d]' : 'hover:bg-gray-100'
          }`}
          style={{
            border: `solid var(--borderWidth-thin) var(--button-default-borderColor-rest)`,
            borderRadius: `var(--borderRadius-medium)`,
            width: `var(--base-size, 32px)`,
            height: `var(--base-size, 32px)`,
            backgroundColor: theme === 'dark' ? '#161b22' : '#fff',
          }}
          onClick={() => setLeftOpen(!leftOpen)}
        >
          <Menu className="w-5 h-5" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <img
            src={IMAGE_CONSTANTS.profilePicture.src}
            alt={IMAGE_CONSTANTS.profilePicture.alt}
            className="w-8 h-8 rounded-full"
            style={{
              border: theme === 'dark' ? '2px solid #21262d' : '2px solid #eaeaea',
            }}
          />
          <span
            className={`hover:bg-[#2f3742] cursor-pointer border border-transparent p-1 rounded-md ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            style={{
              backgroundColor: theme === 'dark' ? '#161b22' : '',
            }}
          >
            manishhansal
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className={'flex items-center gap-3'}>
        {/* Search Input */}
        <div className="hidden md:flex flex-1 mx-1 max-w-md">
          <div className="h-7 relative w-full">
            <input
              type="text"
              placeholder="Type / to search"
              className={`rounded-md px-3 py-1 w-full text-sm placeholder-gray-400 focus:outline-none ${
                theme === 'dark' ? 'bg-[#0d1117] text-white' : 'bg-gray-100 text-black'
              }`}
              style={{
                border: `solid var(--borderWidth-thin) var(--button-default-borderColor-rest)`,
                backgroundColor: theme === 'dark' ? '#0d1117' : '#f3f4f6',
                color: theme === 'dark' ? '#fff' : '#000',
              }}
            />
            <Search
              className="absolute right-2 top-2 w-4 h-4"
              style={{ color: theme === 'dark' ? '#8b949e' : '#6b7280' }}
            />
          </div>
        </div>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <Users className="w-4 h-4" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <Plus className="w-4 h-4" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <Bell className="w-4 h-4" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <LayoutList
            className="w-4 h-4"
            style={{ color: `var(--base-icon-black-themed-color)` }}
          />
        </button>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <GitMerge className="w-4 h-4" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <button className={BTN_PRIMARY_TAILWIND} style={BTN_PRIMARY_STYLE}>
          <Mail className="w-4 h-4" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>

        <ThemeToggleButton />

        <img
          src={IMAGE_CONSTANTS.profilePicture.src}
          alt={IMAGE_CONSTANTS.profilePicture.alt}
          className="w-8 h-8 rounded-full border-2 cursor-pointer"
          style={{
            borderColor: theme === 'dark' ? '#3b82f6' : '#2563eb',
          }}
          onClick={() => setRightOpen(!rightOpen)}
        />
      </div>
    </nav>
  );
};

export default GitHubNavbar;
