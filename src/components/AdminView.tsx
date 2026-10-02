import { useState, useEffect } from "react";
import { Enquiry } from "../types";
import { Clock, ShieldAlert, Trash2, Mail, Phone, Calendar, RefreshCw } from "lucide-react";

export default function AdminView() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchEnquiries = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiries");
      if (!res.ok) throw new Error("Server responded with error status");
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
      } else {
        throw new Error(data.error || "Failed loading data");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || "HTTP Connection failed.");
    } finally {
      setLoading(false);
    }
  };

  const clearEnquiries = async () => {
    if (!confirm("Are you sure you want to clear all inquiries from database logs?")) return;
    try {
      const res = await fetch("/api/enquiries", { method: "DELETE" });
      if (res.ok) {
        setEnquiries([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="text-[#e5e1e4] font-sans pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto min-h-[70vh]">
      <section className="mb-10 mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-[#f6be39] font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold select-none">
            Server Inquiries Panel
          </span>
          <h2 className="font-sans font-bold text-3xl text-white uppercase tracking-wide">
            PROCUREMENT LOGS
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-xl">
            Live database records containing buyer specifications and technical request sheets from the website forms.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={fetchEnquiries}
            className="border border-gray-700 hover:border-gray-500 text-white p-3 rounded-lg flex items-center gap-2 font-mono text-xs hover:bg-[#1a191b] transition-all cursor-pointer"
            title="Refresh logs from Server"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin text-[#f6be39]" : "text-gray-400"}`} />
            <span>Refresh</span>
          </button>
          
          {enquiries.length > 0 && (
            <button
              onClick={clearEnquiries}
              className="bg-red-950/40 border border-red-800 text-red-200 hover:bg-red-900/60 p-3 rounded-lg flex items-center gap-2 font-mono text-xs transition-all cursor-pointer"
            >
              <Trash2 className="h-4 w-4 text-red-400" />
              <span>Clear Server Database</span>
            </button>
          )}
        </div>
      </section>

      {errorMsg ? (
        <div className="bg-red-950/40 border border-red-500/35 rounded-xl p-8 text-center space-y-4">
          <ShieldAlert className="h-10 w-10 text-red-400 mx-auto" />
          <p className="text-gray-300 text-xs sm:text-sm">{errorMsg}</p>
          <button
            onClick={fetchEnquiries}
            className="bg-[#f6be39] text-[#131315] uppercase font-mono font-bold text-xs px-6 py-2 rounded"
          >
            Retry Connection
          </button>
        </div>
      ) : loading ? (
        <div className="text-center py-20">
          <RefreshCw className="h-8 w-8 text-[#f6be39] animate-spin mx-auto mb-4" />
          <p className="text-gray-400 text-xs uppercase font-mono tracking-wider">
            Polling active database records...
          </p>
        </div>
      ) : enquiries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enquiries.map((enq) => {
            const formattedDate = new Date(enq.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div
                key={enq.id}
                className="bg-[#15171C] border border-gray-800 rounded-xl p-6 sm:p-8 space-y-5 shadow-lg relative transition-all hover:border-gray-700"
              >
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-sans font-bold text-base text-white">{enq.fullName}</h3>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#f6be39] uppercase font-bold mt-1">
                      <span>Requirement:</span>
                      <span className="bg-[#f6be39]/10 px-2 py-0.5 rounded border border-[#f6be39]/20">
                        {enq.productRequirement}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[10px] bg-gray-800 p-1.5 rounded border border-gray-700 shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-gray-500" />
                    <span>{formattedDate}</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0e0e10]/85 p-4 rounded-lg border border-gray-800 text-xs text-gray-300 font-mono">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="h-4 w-4 text-[#f6be39] shrink-0" />
                    <a href={`mailto:${enq.corporateEmail}`} className="hover:underline text-gray-300 truncate">
                      {enq.corporateEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#f6be39] shrink-0" />
                    <a href={`tel:${enq.phoneNumber}`} className="hover:underline text-gray-300">
                      {enq.phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Message block */}
                <div className="space-y-1">
                  <span className="block text-[10px] uppercase font-mono tracking-wider font-bold text-gray-500">
                    Detailed procurement details
                  </span>
                  <p className="bg-black/25 p-3 rounded text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap italic font-sans">
                    "{enq.detailedMessage}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-[#15171C] border border-gray-800 rounded-xl p-16 text-center space-y-4">
          <Clock className="h-10 w-10 text-gray-600 mx-auto" />
          <h4 className="font-sans font-bold text-white text-base">NO DISPATCHED REQUISITIONS</h4>
          <p className="text-gray-400 text-xs max-w-sm mx-auto leading-relaxed">
            Fill in details in our product catalogs or direct contact screens to simulate real fullstack database logging actions!
          </p>
        </div>
      )}
    </div>
  );
}
