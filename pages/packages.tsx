import { useTheme } from '@/context/ThemeContext';
import ProfilePageLayout from './components/ProfilePageLayout';
import { Package, ChevronDown } from 'lucide-react';

const PackagesPage = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const inputBg = theme === 'dark' ? 'bg-[#010409]' : 'bg-white';

  return (
    <ProfilePageLayout>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Search packages..."
            className={`w-full md:w-auto flex-1 px-3 py-1.5 border rounded-md ${borderColor} ${inputBg} ${headingColor}`}
          />
        </div>

        <div
          className={`border-t ${borderColor} border-dashed rounded-lg flex flex-col items-center justify-center py-20`}
        >
          <Package size={40} className={`${textColor}`} />
          <h2 className={`mt-4 text-xl font-semibold ${headingColor}`}>
            No packages found
          </h2>
          <p className={`mt-2 text-sm ${textColor}`}>
            There are no packages in this organization.
          </p>
          <a
            href="#"
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Learn about getting started with packages
          </a>
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default PackagesPage;
