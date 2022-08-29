import withAuth from "../loginfiles/withAuth";

export const StandardUser = withAuth([
  "user",
  "admin",
  "super-admin",
  "standard",
]);
export const AdminUser = withAuth(["admin", "super-admin"]);
