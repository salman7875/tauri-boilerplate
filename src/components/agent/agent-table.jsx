import AgentRow from "./agent-row";

export default function AgentTable({ agents, loading }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-xs uppercase tracking-wide text-gray-600">
          <tr>
            <th className="px-6 py-3 text-left font-medium">ID</th>
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3 text-left font-medium">Mobile No</th>
            <th className="px-6 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {loading ? (
            <tr>
              <td colSpan={5} className="px-6 py-6 text-center text-gray-500">
                Loading users...
              </td>
            </tr>
          ) : (
            agents.map((agent, i) => (
              <AgentRow key={i} agent={agent} index={i} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
