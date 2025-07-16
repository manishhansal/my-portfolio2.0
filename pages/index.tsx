import GitHubNavbar from './components/GitHubNavbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GitHubNavbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
