export function fetchUsers(page, limit) {
  const total = 57;
  const users = Array.from({ length: limit }, (_, i) => {
    const id = (page - 1) * limit + i + 1;
    return {
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`,
      role: id % 2 === 0 ? "Admin" : "Employee",
    };
  });
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: users, total }), 500)
  );
}
