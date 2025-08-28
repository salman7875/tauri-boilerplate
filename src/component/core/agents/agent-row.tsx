import { downloadPCRX } from "../../../api/request";
import "../../../pages/agents/agent-page.module.css";

export default function AgentRow({ agent, index }: any) {
  const handlePCRXdownload = async () => {
    const blob = await downloadPCRX({
      fileType: "pcrx",
      scrollReportId: agent.scrollReportId,
    });

    // @ts-ignore
    const savedPath = await window.electronAPI.saveFileToExe(
      "myFile.pcrx",
      blob
    );
    console.log("File saved at:", savedPath);
  };

  return (
    <tr className={index % 2 === 0 ? "agent-row even" : "agent-row odd"}>
      <td className="agent-cell">{agent.uid}</td>
      <td className="agent-cell agent-name">{agent.name}</td>
      <td className="agent-cell">{agent.mobileNumber}</td>
      <td className="agent-cell agent-actions">
        <button onClick={handlePCRXdownload} className="agent-button">
          Download PCRX
        </button>
        <button className="agent-button">Upload PCTX</button>
      </td>
    </tr>
  );
}
