import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useAuth } from "../lib/AdminAuth";
import { BrandMark } from "../components/BrandLogo";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Admin Login | EmbeHome";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }
    setLoading(true);
    try {
      const ok = await login(username.trim(), password);
      if (ok) {
        navigate("/admin/enquiries");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message === "Invalid credentials") {
        setError("Invalid credentials. Please try again.");
      } else {
        setError(
          message ||
            "Unable to reach the server. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#f0fafa" }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10">
          <div className="flex flex-col items-center mb-8">
            <BrandMark
              size="lg"
              priority
              layout="column"
              logoClassName="h-10 sm:h-11"
              subtitle="Admin Portal"
            />
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock size={18} style={{ color: "#009A9A" }} />
              <h1 className="text-gray-900 text-xl font-semibold">Admin Login</h1>
            </div>
            <p className="text-gray-400 text-sm">Manage customer enquiries securely</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Username / Email
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                placeholder="Enter your username"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all bg-gray-50 focus:bg-white ${
                  error
                    ? "border-red-300 focus:border-red-400"
                    : "border-gray-200 focus:border-[#009A9A]"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all bg-gray-50 focus:bg-white ${
                    error
                      ? "border-red-300 focus:border-red-400"
                      : "border-gray-200 focus:border-[#009A9A]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-white text-sm font-medium transition-opacity disabled:opacity-70 mt-2"
              style={{ backgroundColor: "#009A9A" }}
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} className="text-gray-400" />
            <p className="text-gray-400 text-xs">Authorized access only</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Demo credentials: <span className="font-mono">admin</span> /{" "}
            <span className="font-mono">Demo@123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
