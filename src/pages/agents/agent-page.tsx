import AgentTable from "../../component/core/agents/agent-table";
import Header from "../../component/ui/header/header";
import Pagination from "../../component/ui/pagination/pagination";
import { useAgent } from "../../hooks/use-agent";
import "./agent-page.module.css";

export default function AgentPage() {
  const { data, loading, page, setPage, total, totalPages } = useAgent();

  return (
    <div className="agents-container">
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
