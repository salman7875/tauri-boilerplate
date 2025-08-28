import AgentTable from "../components/agent/agent-table";
import Header from "../components/ui/header";
import Pagination from "../components/ui/pagination";
import { useAgent } from "../hooks/use-agent";

export default function Agents() {
  const { data, loading, page, setPage, total, totalPages } = useAgent();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 p-8">
      <Header />
      <AgentTable agents={data} loading={loading} />

      <Pagination
        page={page}
        totalPages={totalPages}
        total={total}
        setPage={setPage}
      />
    </div>
  );
}
