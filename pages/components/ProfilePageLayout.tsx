import { ReactNode } from 'react';
import ProfileSidebar from './ProfileSidebar';

interface ProfilePageLayoutProps {
  children: ReactNode;
}

const ProfilePageLayout = ({ children }: ProfilePageLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <ProfileSidebar />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
};

export default ProfilePageLayout;
