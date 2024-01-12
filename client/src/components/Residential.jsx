import ResidentCard from './ResidentCard';

const Residential = () => {
  return (
    <div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
        <ResidentCard />
      </main>
    </div>
  );
};

export default Residential;
