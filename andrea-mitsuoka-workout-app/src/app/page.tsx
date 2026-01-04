import Header from "@/components/Header";
import WorkoutTable from "@/components/WorkoutTable";
import WeekSelector from "@/components/WeekSelector";

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] min-h-screen font-sans">
      <main className="container mx-auto py-8 px-4">
        <Header />
        <WeekSelector />
        <WorkoutTable />
      </main>
    </div>
  );
}
