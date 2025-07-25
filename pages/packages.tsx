import { useTheme } from '@/context/ThemeContext';

const PackagesPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        Packages
      </h1>
      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
        This is the packages page.
      </p>
    </div>
  );
};

export default PackagesPage;
