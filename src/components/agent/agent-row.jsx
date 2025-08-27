export default function AgentRow({ agent, index }) {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 text-gray-700">{agent.id}</td>
      <td className="px-6 py-4 font-medium text-gray-900">{agent.name}</td>
      <td className="px-6 py-4 text-gray-700">{agent.email}</td>
      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            agent.role === "Admin"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {agent.role}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100">
          Action
        </button>
      </td>
    </tr>
  );
}
