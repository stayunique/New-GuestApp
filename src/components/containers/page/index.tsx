import { Helmet } from 'react-helmet-async';

export const PageContainer = ({ children, title = '' }: { children: React.ReactNode; title?: string }) => {
  return (
    <>
      <Helmet>
        <title>{title || 'Guest App'}</title>
      </Helmet>

      {children}
    </>
  );
};
