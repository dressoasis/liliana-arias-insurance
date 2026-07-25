import { JourneyCard } from "./JourneyCard";

export const JourneyGrid = ({ situations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
      {situations.map((situation) => (
        <JourneyCard key={situation.id} {...situation} />
      ))}
    </div>
  );
};
