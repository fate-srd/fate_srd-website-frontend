import Header from '@/components/layout/header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header className="px-6 py-4"/>
      <main className="flex-1 px-6 py-4">
        {children}
      </main>
      <footer className="bg-blue-dark p-16">
        Footer
      </footer>
    </div>
  );
};

export default Layout;
