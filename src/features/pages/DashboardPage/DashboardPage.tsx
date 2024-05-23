import React from "react";

import styles from "./DashboardPage.module.css";
import CountSummary from "@/features/components/CountSummary/CountSummary";
import ChartSection from "@/features/components/ChartSection/ChartSection";
import UnresolvedTicketSection from "@/features/components/UnresolvedTicketSection/UnresolvedTicketSection";
import NewTaskSection from "@/features/components/NewTasks/NewTaskSection";

const DashboardPage = () => {
  return (
    <div>
      <div className={styles.countSummaryRow}>
        <CountSummary title="Unresolved" count={60} />
        <CountSummary title="Overdue" count={16} />
        <CountSummary title="Open" count={13} />
        <CountSummary title="On Hold" count={64} />

        <ChartSection />

        <UnresolvedTicketSection />
        <NewTaskSection />
      </div>
    </div>
  );
};

export default DashboardPage;
