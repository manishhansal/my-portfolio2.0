'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { MapPin, Mail, Link as LinkIcon, Twitter, Users } from 'lucide-react';

const ProfileSidebar = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const headingColor = theme === 'dark' ? 'text-gray-100' : 'text-black';

  return (
    <div className="lg:col-span-1">
      <div className="flex flex-col">
        <Image
          src="/pcboi2.png"
          alt="Manish Kumar"
          width={280}
          height={280}
          className="rounded-full border-2 border-gray-700"
        />
        <div className="mt-4">
          <h1 className={`text-2xl font-bold ${headingColor}`}>Manish Kumar</h1>
          <p className="text-xl text-gray-500">manishhansal</p>
          <p className={`mt-2 ${textColor}`}>
            I am passionate about web development and solving problems.
          </p>
          <button
            className={`w-full mt-4 py-2 px-4 rounded-md font-semibold ${
              theme === 'dark'
                ? 'bg-[#21262d] border border-gray-700 hover:bg-gray-700'
                : 'bg-gray-200 border border-gray-300 hover:bg-gray-300'
            }`}
          >
            Edit profile
          </button>
        </div>
        <div className={`flex items-center space-x-4 mt-4 ${textColor}`}>
          <Users size={16} />
          <span>
            <span className={`font-bold ${headingColor}`}>14</span> followers
          </span>
          <span>·</span>
          <span>
            <span className={`font-bold ${headingColor}`}>19</span> following
          </span>
        </div>
        <div className={`mt-4 space-y-2 ${textColor}`}>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Motihari, East Champaran, Bihar, 845426</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:manishhansalmeh@gmail.com" className="hover:underline">
              manishhansalmeh@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <LinkIcon size={16} className="mr-2" />
            <a
              href="https://manishportfoli.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://manishportfoli.netlify.app
            </a>
          </div>
          <div className="flex items-center">
            <Twitter size={16} className="mr-2" />
            <a
              href="https://x.com/ManishK62653031"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @ManishK62653031
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
