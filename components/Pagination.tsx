interface PaginationProps {
  page: number;
}

export const Pagination = ({ page }: PaginationProps) => (
  <div className="flex justify-between mt-6">
    <button
      onClick={() => (window.location.href = `/houses?page=${page - 1}`)}
      disabled={page <= 1}
      className="px-6 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600"
    >
      Previous
    </button>
    <button
      onClick={() => (window.location.href = `/houses?page=${page + 1}`)}
      className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Next
    </button>
  </div>
);
