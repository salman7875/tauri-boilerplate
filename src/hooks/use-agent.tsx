import { useEffect, useState } from "react";
import { fetchUsers } from "../data";

export const useAgent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  useEffect(() => {
    setLoading(true);
    fetchUsers(page, limit).then((res) => {
      setData(res.data);
      setTotal(res.total);
      setLoading(false);
    });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return { data, page, setPage, total, totalPages, loading };
};
