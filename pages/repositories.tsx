import { useTheme } from '@/context/ThemeContext';

const RepositoriesPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        Repositories
      </h1>
      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
        This is the repositories page.
      </p>
    </div>
  );
};

export default RepositoriesPage;
