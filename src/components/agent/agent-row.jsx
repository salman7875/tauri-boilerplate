import { downloadPCRX } from "../../api/request";
import { readTextFile, writeFile } from "@tauri-apps/plugin-fs";

import { resourceDir, appDataDir, executableDir } from '@tauri-apps/api/path';

export default function AgentRow({ agent, index }) {
  const handlePCRXdownload = async () => {
    try {
      const exeDir = await resolveResource(".");

      const configPath = `${exeDir}/config.txt`;
      const configContent = await readTextFile(configPath);
      const filenameLine = configContent
        .split("\n")
        .find((line) => line.startsWith("FILENAME="));

      const fileName = filenameLine
        ? filenameLine.replace("FILENAME=", "").trim()
        : "default-pcrx.dat";

      const blob = await downloadPCRX({
        fileType: "pcrx",
        scrollReportId: agent.scrollReportId,
      });

      // Step 2: Convert to Uint8Array
      const buffer = await blob.arrayBuffer();
      await writeFile({
        path: `${exeDir}/${fileName}`,
        contents: new Uint8Array(buffer),
      });

      // Step 4: Write file if path chosen
      console.log(`✅ File saved as ${fileName} in exe folder`);
    } catch (err) {
      console.error("❌ Error downloading PCRX file:", err);
    }
  };

  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 text-gray-700">{agent.uid}</td>
      <td className="px-6 py-4 font-medium text-gray-900">{agent.name}</td>
      <td className="px-6 py-4 text-gray-700">{agent.mobileNumber}</td>

      <td className="px-6 py-4 text-right">
        <button
          onClick={handlePCRXdownload}
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
        >
          Download PCRX
        </button>
        <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100">
          Upload PCTX
        </button>
      </td>
    </tr>
  );
}
