import { useEffect, useState } from "react";
import { getAgents, getScrollReports } from "../api/request";
const limit = 10;

export const useAgent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAgents = async () => {
    setLoading(true);
    try {
      const resData = await getAgents("ALTP", false);
      const agentData =
        resData?.data?.parentalUsers?.filter(
          (user: any) => user.positionName === "Collection Agent"
        ) || [];

      const scrollReportData = await getScrollReports();

      const approvedReportsMap = new Map(
        scrollReportData.data
          .filter((report: any) => report.status === "approved" || "completed")
          .map((report: any) => [report.collection_agent_id, report.id])
      );

      const enrichedAgents = agentData.map((agent: any) => ({
        ...agent,
        scrollReportId: approvedReportsMap.get(agent.uid) || null,
      }));

      setData(enrichedAgents);
      setTotal(enrichedAgents.length);
    } catch (err) {
      console.error("Failed to fetch agents:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const totalPages = Math.ceil(total / limit);

  return { data, page, setPage, total, totalPages, loading };
};
