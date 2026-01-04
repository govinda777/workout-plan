import athleteData from "@/data/athlete-data.json";

const Header = () => {
  const { athlete } = athleteData;

  return (
    <header className="mb-8 p-4 rounded-lg bg-gray-800/50">
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-3xl font-bold text-teal-400">{athlete.name}</h1>
          <div className="flex space-x-4 text-sm text-gray-400 mt-1">
            <span>{athlete.age} anos</span>
            <span>{athlete.weight}kg</span>
            <span>Objetivo: {athlete.goal}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
