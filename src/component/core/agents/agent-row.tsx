import { downloadPCRX, uploadPCTX } from "../../../api/request";
import "../../../pages/agents/agent-page.module.css";

export default function AgentRow({ agent, index }: any) {
  const handlePCRXdownload = async () => {
    const blob = await downloadPCRX({
      scrollReportId: agent.scrollReportId,
    });

    // @ts-ignore
    const savedPath = await window.electronAPI.saveFileToExe(blob);
    console.log("File saved at:", savedPath);
    alert("File saved at: " + savedPath);
  };

  const handlePCTXupload = async () => {
    const { buffer, fileContent, filename } =
      await window.electronAPI.readFileFromExe();

    const agentCode = fileContent.split(/\r?\n/).at(0).split(",").at(3);
    const formattedCode = agentCode.substring(agentCode.lastIndexOf("0") + 1);
    console.log(formattedCode, agent.collectionAgentCode, agentCode);

    if (formattedCode !== agent.collectionAgentCode) {
      alert("Agent code mismatch. Please select the correct file.");
      return;
    }

    const file = new File([new Uint8Array(buffer)], filename);

    const data = await uploadPCTX({
      pctx_file: file,
      scrollReportId: agent.scrollReportId,
    });
    alert("PCTX uploaded successfully", JSON.stringify(data, null, 2));
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
        <button onClick={handlePCTXupload} className="agent-button">
          Upload PCTX
        </button>
      </td>
    </tr>
  );
}
