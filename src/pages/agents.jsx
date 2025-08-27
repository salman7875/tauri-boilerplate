import AgentTable from "../components/agent/agent-table";
import Pagination from "../components/ui/pagination";
import { useAgent } from "../hooks/use-agent";

export default function Agents() {
  const { data, loading, page, setPage, total, totalPages } = useAgent();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Agents Directory</h1>
        <p className="mt-1 text-sm text-gray-500">
          A complete list of agents in the system
        </p>
      </header>

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
