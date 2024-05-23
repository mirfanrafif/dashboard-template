import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
import DashboardPage from "@/features/pages/DashboardPage/DashboardPage";
import TaskListPage from "@/features/pages/TaskListPage/TaskListPage";

export default function Home() {
  return (
    <DashboardContainer title="Overview">
      <TaskListPage />
    </DashboardContainer>
  );
}
