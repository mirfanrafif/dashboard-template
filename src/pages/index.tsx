import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
import DashboardPage from "@/features/pages/DashboardPage/DashboardPage";

export default function Home() {
  return (
    <DashboardContainer title="Overview">
      <DashboardPage />
    </DashboardContainer>
  );
}
