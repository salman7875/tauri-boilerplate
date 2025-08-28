import { API_BASE_URL, apiFetch } from "./index";

export function signin({ userName, password }) {
  return apiFetch(`/dashboard/login`, {
    method: "POST",
    body: { userName, password },
  });
}

export function getAgents(partyCode, limit = false) {
  const token = window.localStorage.getItem("token");

  return apiFetch(`/dashboard/user?partyCode=${partyCode}&limit=${limit}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getScrollReports() {
  const token = window.localStorage.getItem("token");

  return apiFetch(`/scroll-report`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: { page: 1, limit: 100000000 },
  });
}

export function uploadPCTX({ pctx_file, scrollReportId }) {
  const token = window.localStorage.getItem("token");

  return apiFetch(`/scroll-report/upload-pctx`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: { pctx_file, scrollReportId },
  });
}

export async function downloadPCRX({ fileType = "pcrx", scrollReportId }) {
  const token = window.localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/scroll-report/getbyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ fileType, scrollReportId }),
  });

  if (!response.ok) throw new Error("Failed to download file");

  const blob = await response.blob();
  console.log(blob);
  
  return blob;
}
