import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { Linkedin, Pencil, Twitter } from 'lucide-react';
import ProfilePageLayout from './components/ProfilePageLayout';

const WhatsAppIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 fill-current"
  >
    <title>WhatsApp</title>
    <path d="M12.04 2.02c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.02 22l5.25-1.38c1.45.79 3.08 1.21 4.77 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM10.13 6.94c.28-.46.54-.5.79-.51s.52.05.71.05c.26 0 .62.31.71 1.4.09 1.09-.59 2.52-.68 2.72-.09.19-.52.68.52 1.28 1.04.6 1.95 1.32 2.63 2.11.85.94 1.28 1.18 1.48 1.28.19.09.52.05.71-.14s.85-1 .94-1.18c.09-.19.19-.28.37-.28.19 0 .46.24.54.33.09.09.13.5.14.59.01.09-.37 1.28-.79 1.66-.42.37-.89.33-1.09.33s-1.4-.23-2.68-1.04c-1.28-.8-2.61-2.29-3-2.63-.39-.34-.94-.59-1.28-.59-.33 0-.71.14-.71.14s-1.14 1.37-1.37 1.66c-.24.28-.52.33-.89.24-.37-.09-1.37-.5-2.61-1.57-1.23-1.07-2.06-2.39-2.15-2.63-.09-.23-.05-.42.05-.56.09-.14.23-.37.33-.5s.23-.24.33-.42c.09-.19.05-.33-.05-.46s-.52-1.23-.71-1.66c-.19-.42-.39-.37-.54-.37-.14 0-.33-.05-.52-.05z" />
  </svg>
);

export default function OverviewPage() {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';
  const cardBg = theme === 'dark' ? 'bg-[#0d1117]' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';

  return (
    <ProfilePageLayout>
      <div className={`p-6 rounded-lg border ${cardBg} ${cardBorder}`}>
        <div className={`flex justify-between items-center mb-4 pb-4 border-b ${cardBorder}`}>
          <p className={`${textColor}`}>manishhansal / README.md</p>
          <button className={`${textColor} hover:text-white`}>
            <Pencil size={18} />
          </button>
        </div>

        <div className={`mt-4 ${headingColor}`}>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">Hi 👋, I&apos;m Manish Kumar</h1>
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-sm text-white">
              <span>Profile views</span>
              <span className="bg-blue-600 text-white px-2 rounded-full text-xs">701</span>
            </div>
          </div>

          <h2 className="text-xl text-blue-400 my-4">Software Developer</h2>

          <p className={`mb-6 ${textColor}`}>
            I&apos;m an experienced Software Developer passionate about building innovative and
            efficient solutions that make a difference. With expertise in full-stack development, I
            specialize in creating scalable and user-friendly web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">My personal stuffs</h3>
              <ul className={`space-y-2 ${textColor}`}>
                <li>✅ I&apos;m currently exploring and learning Web Development;</li>
                <li>⚡ I&apos;m looking to collaborate with other content creators;</li>
                <li>
                  😎 I&apos;m currently open for a new job opportunity, this is{' '}
                  <a href="#" className="text-blue-400 hover:underline">
                    MY RESUME
                  </a>
                </li>
                <li>
                  📫 How to reach me:{' '}
                  <a
                    href="mailto:manishhansalmeh@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    manishhansalmeh@gmail.com
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-2">Connect with me:</h3>
              <div className="flex space-x-4">
                <a href="#" className={`${textColor} hover:text-blue-500`}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className={`${textColor} hover:text-blue-400`}>
                  <Twitter size={24} />
                </a>
                <a href="#" className={`${textColor} hover:text-green-500`}>
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
              <Image
                src="/developer-illustration.svg"
                alt="Developer Illustration"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </ProfilePageLayout>
  );
}
