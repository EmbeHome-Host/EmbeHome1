import ProtectedRoute from "../components/ProtectedRoute";
import AdminEnquiries from "./AdminEnquiries";

export default function AdminEnquiriesRoute() {
  return (
    <ProtectedRoute>
      <AdminEnquiries />
    </ProtectedRoute>
  );
}
