import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { LogOut, Trash2, Users, Home, Settings } from "lucide-react";
import { useAuth } from "../lib/AdminAuth";
import BrandLogo from "../components/BrandLogo";
import {
  useEnquiries,
  Enquiry,
  getEnquiryCategory,
  SMART_HOME_TYPES,
  OEM_TYPES,
} from "../lib/EnquiryStore";

type Tab = "smart-home" | "oem" | "other";

function filterEnquiries(enquiries: Enquiry[], tab: Tab): Enquiry[] {
  return enquiries.filter((e) => getEnquiryCategory(e.requirementType) === tab);
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function MessageCell({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 80;
  if (text.length <= MAX) return <span className="text-gray-600 text-xs">{text}</span>;
  return (
    <span className="text-gray-600 text-xs">
      {expanded ? text : text.slice(0, MAX) + "…"}{" "}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="font-medium underline"
        style={{ color: "#009A9A" }}
      >
        {expanded ? "View less" : "View more"}
      </button>
    </span>
  );
}

function DeleteButton({
  onConfirm,
  disabled,
}: {
  onConfirm: () => void;
  disabled?: boolean;
}) {
  const [confirming, setConfirming] = useState(false);
  if (confirming) {
    return (
      <div className="flex items-center gap-1">
        <button
          onClick={onConfirm}
          className="px-2 py-1 rounded-lg bg-red-500 text-white text-xs font-medium"
        >
          Yes
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium"
        >
          No
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => setConfirming(true)}
      disabled={disabled}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors text-xs font-medium disabled:opacity-50"
    >
      <Trash2 size={12} />
      Delete
    </button>
  );
}

function EnquiryTable({
  enquiries,
  onDelete,
  deletingId,
}: {
  enquiries: Enquiry[];
  onDelete: (id: string) => void;
  deletingId: string | null;
}) {
  if (enquiries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "#e6f7f7" }}
        >
          <Users size={24} style={{ color: "#009A9A" }} />
        </div>
        <p className="text-gray-500 font-medium mb-1">No enquiries found</p>
        <p className="text-gray-400 text-sm">No enquiries found in this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: "#f0fafa" }}>
              {[
                "Name",
                "Company",
                "Email",
                "Phone",
                "Requirement Type",
                "Message",
                "Submitted",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide first:rounded-tl-xl last:rounded-tr-xl whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {enquiries.map((enq) => (
              <tr key={enq.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-4 py-3.5 font-medium text-gray-800 text-xs whitespace-nowrap">
                  {enq.name}
                </td>
                <td className="px-4 py-3.5 text-gray-600 text-xs whitespace-nowrap">
                  {enq.company || <span className="text-gray-300">—</span>}
                </td>
                <td className="px-4 py-3.5 text-gray-600 text-xs whitespace-nowrap">
                  {enq.email}
                </td>
                <td className="px-4 py-3.5 text-gray-600 text-xs whitespace-nowrap">
                  {enq.phone}
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#e6f7f7", color: "#009A9A" }}
                  >
                    {enq.requirementType}
                  </span>
                </td>
                <td className="px-4 py-3.5 max-w-[200px]">
                  <MessageCell text={enq.message} />
                </td>
                <td className="px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap">
                  {formatDate(enq.submittedAt)}
                </td>
                <td className="px-4 py-3.5">
                  <DeleteButton
                    onConfirm={() => onDelete(enq.id)}
                    disabled={deletingId === enq.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3 p-4">
        {enquiries.map((enq) => (
          <div
            key={enq.id}
            className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{enq.name}</p>
                {enq.company && (
                  <p className="text-gray-400 text-xs mt-0.5">{enq.company}</p>
                )}
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ml-2"
                style={{ backgroundColor: "#e6f7f7", color: "#009A9A" }}
              >
                {enq.requirementType}
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-gray-400">Email:</span>
                <span className="text-gray-700">{enq.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-gray-400">Phone:</span>
                <span className="text-gray-700">{enq.phone}</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="w-12 text-gray-400 mt-0.5">Message:</span>
                <span className="text-gray-700 flex-1">
                  <MessageCell text={enq.message} />
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-gray-400">Date:</span>
                <span className="text-gray-500">{formatDate(enq.submittedAt)}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end">
              <DeleteButton
                onConfirm={() => onDelete(enq.id)}
                disabled={deletingId === enq.id}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "smart-home", label: "Smart Home Automation", icon: <Home size={15} /> },
  { id: "oem", label: "OEM Technical Support", icon: <Settings size={15} /> },
  { id: "other", label: "Other Services", icon: <Users size={15} /> },
];

export default function AdminEnquiries() {
  const { logout } = useAuth();
  const { enquiries, loading, error, fetchEnquiries, deleteEnquiry } = useEnquiries();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("smart-home");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Enquiry Management | EmbeHome";
  }, []);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteEnquiry(id);
    } finally {
      setDeletingId(null);
    }
  };

  const smartHomeCount = enquiries.filter((e) =>
    SMART_HOME_TYPES.includes(e.requirementType)
  ).length;
  const oemCount = enquiries.filter((e) => OEM_TYPES.includes(e.requirementType)).length;
  const otherCount = enquiries.filter(
    (e) => getEnquiryCategory(e.requirementType) === "other"
  ).length;

  const tabCounts: Record<Tab, number> = {
    "smart-home": smartHomeCount,
    oem: oemCount,
    other: otherCount,
  };

  const visibleEnquiries = filterEnquiries(enquiries, activeTab);

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" priority />
              <p className="text-gray-500 text-sm font-medium">Admin Panel</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 text-2xl font-semibold">Enquiry Management</h1>
          <p className="text-gray-400 text-sm mt-1">View and manage customer enquiries</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md"
            style={
              activeTab === "smart-home"
                ? { borderColor: "#009A9A", boxShadow: "0 0 0 1px #009A9A20" }
                : {}
            }
            onClick={() => setActiveTab("smart-home")}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#e6f7f7" }}
            >
              <Home size={20} style={{ color: "#009A9A" }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{smartHomeCount}</p>
              <p className="text-xs text-gray-400 mt-0.5">Smart Home</p>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md"
            style={
              activeTab === "oem"
                ? { borderColor: "#009A9A", boxShadow: "0 0 0 1px #009A9A20" }
                : {}
            }
            onClick={() => setActiveTab("oem")}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#e6f7f7" }}
            >
              <Settings size={20} style={{ color: "#009A9A" }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{oemCount}</p>
              <p className="text-xs text-gray-400 mt-0.5">OEM Support</p>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md"
            style={
              activeTab === "other"
                ? { borderColor: "#009A9A", boxShadow: "0 0 0 1px #009A9A20" }
                : {}
            }
            onClick={() => setActiveTab("other")}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#e6f7f7" }}
            >
              <Users size={20} style={{ color: "#009A9A" }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{otherCount}</p>
              <p className="text-xs text-gray-400 mt-0.5">Other Services</p>
            </div>
          </div>
        </div>

        <div className="flex gap-1 mb-6 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-1 justify-center ${
                activeTab === tab.id
                  ? "text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              style={activeTab === tab.id ? { backgroundColor: "#009A9A" } : {}}
            >
              {tab.icon}
              {tab.label}
              <span
                className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-semibold ${
                  activeTab === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {tabCounts[tab.id]}
              </span>
            </button>
          ))}
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-800 text-sm">
                {TABS.find((t) => t.id === activeTab)?.label} Enquiries
              </h2>
              <p className="text-gray-400 text-xs mt-0.5">
                {visibleEnquiries.length} enquir{visibleEnquiries.length !== 1 ? "ies" : "y"}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16 text-sm text-gray-400">
              Loading enquiries...
            </div>
          ) : (
            <EnquiryTable
              enquiries={visibleEnquiries}
              onDelete={handleDelete}
              deletingId={deletingId}
            />
          )}
        </div>
      </div>
    </div>
  );
}
