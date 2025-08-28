import { apiFetch } from "./index";

export function signin({ username, password }) {
  return apiFetch(`/dashboard/login`, {
    method: "POST",
    body: { username, password },
  });
}

export function uploadPCTX({ pctx_file, scrollReportId }) {
  return apiFetch(`/scroll-report/upload-pctx`, {
    method: "POST",
    body: { pctx_file, scrollReportId },
  });
}

export function downloadPCRX({ fileType = "pcrx", scrollReportId }) {
  return apiFetch(`/scroll-report/upload-pctx`, {
    method: "POST",
    body: { fileType, scrollReportId },
  });
}
