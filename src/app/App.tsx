import { RouterProvider } from "react-router";
import { router } from "./routes";
import { EnquiryProvider } from "./lib/EnquiryStore";
import { AuthProvider } from "./lib/AdminAuth";

export default function App() {
  return (
    <AuthProvider>
      <EnquiryProvider>
        <RouterProvider router={router} />
      </EnquiryProvider>
    </AuthProvider>
  );
}