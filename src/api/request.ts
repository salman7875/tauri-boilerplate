import { API_BASE_URL, apiFetch } from "./index";

export function signin({ userName, password }: any) {
  return apiFetch(`/dashboard/login`, {
    method: "POST",
    body: { userName, password },
  });
}

export function getAgents(partyCode: string, limit = false) {
  const token = window.localStorage.getItem("token");

  return apiFetch(
    `/dashboard/user?partyCode=${partyCode}&limit=${limit}&onlyCA=${true}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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

export async function uploadPCTX({ pctx_file, scrollReportId }: any) {
  const token = window.localStorage.getItem("token");

  console.log(pctx_file, scrollReportId);

  const formData = new FormData();
  formData.append("pctx_file", pctx_file);
  formData.append("scrollReportId", scrollReportId);

  const res = await fetch(`${API_BASE_URL}/scroll-report/upload-pctx`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload PCTX");
  }

  return res.json();
}

export async function downloadPCRX({ scrollReportId }: any) {
  const token = window.localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/scroll-report/getbyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      deposit_receipt: false,
      pcrx: true,
      pctx: false,
      scrollReportId,
    }),
  });

  if (!response.ok) throw new Error("Failed to download file");

  const blob = await response.blob();
  console.log(blob);

  return blob;
}
