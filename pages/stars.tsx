import { useTheme } from '@/context/ThemeContext';

const StarsPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        Stars
      </h1>
      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
        This is the stars page.
      </p>
    </div>
  );
};

export default StarsPage;
