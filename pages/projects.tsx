import { useTheme } from '@/context/ThemeContext';
import ProfilePageLayout from './components/ProfilePageLayout';
import { LayoutDashboard, ChevronDown } from 'lucide-react';

const ProjectsPage = () => {
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
            placeholder="Search all projects"
            className={`w-full md:w-auto flex-1 px-3 py-1.5 border rounded-md ${borderColor} ${inputBg} ${headingColor}`}
          />
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-1 ${buttonBg} ${borderColor} ${textColor}`}
            >
              <span>Sort: Newest</span>
              <ChevronDown size={16} />
            </button>
            <button
              className={`px-4 py-1.5 border rounded-md flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700`}
            >
              <span>New project</span>
            </button>
          </div>
        </div>

        <div
          className={`border-t ${borderColor} border-dashed rounded-lg flex flex-col items-center justify-center py-20`}
        >
          <LayoutDashboard size={40} className={`${textColor}`} />
          <h2 className={`mt-4 text-xl font-semibold ${headingColor}`}>
            You don't have any projects yet.
          </h2>
          <p className={`mt-2 text-sm ${textColor}`}>
            Projects are a customizable, flexible tool for planning and tracking your work.
          </p>
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default ProjectsPage;
