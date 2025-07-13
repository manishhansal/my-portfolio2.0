import { Menu, Search, Plus, Bell, Users, LayoutList, GitMerge, Mail } from 'lucide-react';
import { BTN_PRIMARY_STYLE, BTN_PRIMARY_TAILWIND, IMAGE_CONSTANTS } from '@/utils/constants';

const GitHubNavbar = () => {
  return (
    <nav className="bg-[#010409] text-white px-4 py-4 flex justify-between items-center w-full shadow-md">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button
          className="cursor-pointer rounded-md p-1 hover:bg-[#2f3742] transition-colors flex items-center justify-center"
          style={{
            border: `solid var(--borderWidth-thin) var(--button-default-borderColor-rest)`,
            borderRadius: `var(--borderRadius-medium)`,
            width: `var(--base-size, 32px)`,
            height: `var(--base-size, 32px)`,
          }}
        >
          <Menu className="w-5 h-5" style={{ color: `var(--base-icon-black-themed-color)` }} />
        </button>
        <div className="flex items-center gap-2 text-sm">
          <img
            src={IMAGE_CONSTANTS.profilePicture.src}
            alt={IMAGE_CONSTANTS.profilePicture.alt}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white hover:bg-[#2f3742] cursor-pointer border border-transparent p-1 rounded-md">
            manishhansal
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 text-gray-200">
        {/* Search Input */}
        <div className="hidden md:flex flex-1 mx-1 max-w-md">
          <div className="h-7 relative w-full">
            <input
              type="text"
              placeholder="Type / to search"
              className="bg-[#0d1117] rounded-md px-3 py-1 w-full text-sm placeholder-gray-400 focus:outline-none"
              style={{
                border: `solid var(--borderWidth-thin) var(--button-default-borderColor-rest)`,
              }}
            />
            <Search className="absolute right-2 top-2 w-4 h-4 text-gray-400" />
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

        <img
          src={IMAGE_CONSTANTS.profilePicture.src}
          alt={IMAGE_CONSTANTS.profilePicture.alt}
          className="w-8 h-8 rounded-full border-2 border-blue-500 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default GitHubNavbar;
