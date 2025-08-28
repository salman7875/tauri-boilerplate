import AgentRow from "./agent-row";
import "../../../pages/agents/agent-page.module.css";

export default function AgentTable({ agents, loading }: any) {
  return (
    <div className="agent-table-container">
      <table className="agent-table">
        <thead className="agent-table-head">
          <tr>
            <th className="agent-header">ID</th>
            <th className="agent-header">Name</th>
            <th className="agent-header">Mobile No</th>
            <th className="agent-header agent-header-action">Action</th>
          </tr>
        </thead>
        <tbody className="agent-table-body">
          {loading ? (
            <tr>
              <td colSpan={4} className="agent-loading">
                Loading users...
              </td>
            </tr>
          ) : (
            agents.map((agent: any, i: number) => (
              <AgentRow key={i} agent={agent} index={i} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
