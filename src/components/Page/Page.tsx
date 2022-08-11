import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IPageProps } from './types';

const Page: FC<IPageProps> = ({ title, children, className }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location.pathname, title]);

  return (
    <main className={className}>
      {children}
    </main>
  );
};

export default Page;
