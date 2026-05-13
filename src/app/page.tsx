import FoundingHero from "@/components/founding/FoundingHero";
import FoundingProblem from "@/components/founding/FoundingProblem";
import FoundingArchitecture from "@/components/founding/FoundingArchitecture";
import FoundingFounder from "@/components/founding/FoundingFounder";
import FoundingAudience from "@/components/founding/FoundingAudience";
import FoundingTwoDoors from "@/components/founding/FoundingTwoDoors";
import FoundingFooter from "@/components/founding/FoundingFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <FoundingHero />
      <FoundingProblem />
      <FoundingArchitecture />
      <FoundingFounder />
      <FoundingAudience />
      <FoundingTwoDoors />
      <FoundingFooter />
    </div>
  );
}
