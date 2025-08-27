export default function Pagination({ page, totalPages, total, setPage }) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-gray-600">
        Page {page} of {totalPages} — {total} users total
      </p>
      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 disabled:opacity-50 hover:bg-gray-100"
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 disabled:opacity-50 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}
