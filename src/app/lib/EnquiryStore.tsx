import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  submitEnquiry,
  fetchEnquiries as fetchEnquiriesApi,
  deleteEnquiryApi,
} from "./enquiryApi";

export interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  requirementType: string;
  message: string;
  submittedAt: string;
}

interface EnquiryContextType {
  enquiries: Enquiry[];
  loading: boolean;
  error: string | null;
  fetchEnquiries: () => Promise<void>;
  addEnquiry: (data: Omit<Enquiry, "id" | "submittedAt">) => Promise<void>;
  deleteEnquiry: (id: string) => Promise<void>;
}

const EnquiryContext = createContext<EnquiryContextType | null>(null);

export const SMART_HOME_TYPES = ["Smart Home Automation"];

export const OEM_TYPES = [
  "OEM Technical Support",
  "OEM Technical Support for Smart Automation Partners",
];

export function getEnquiryCategory(requirementType: string): "smart-home" | "oem" | "other" {
  if (SMART_HOME_TYPES.includes(requirementType)) return "smart-home";
  if (OEM_TYPES.includes(requirementType)) return "oem";
  return "other";
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchEnquiriesApi();
      setEnquiries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load enquiries");
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addEnquiry = useCallback(async (data: Omit<Enquiry, "id" | "submittedAt">) => {
    setError(null);
    const created = await submitEnquiry(data);
    setEnquiries((prev) => [created, ...prev]);
  }, []);

  const deleteEnquiry = useCallback(async (id: string) => {
    setError(null);
    await deleteEnquiryApi(id);
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return (
    <EnquiryContext.Provider
      value={{
        enquiries,
        loading,
        error,
        fetchEnquiries,
        addEnquiry,
        deleteEnquiry,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiries() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiries must be used within EnquiryProvider");
  return ctx;
}
