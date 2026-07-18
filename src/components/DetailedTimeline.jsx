import { motion } from "framer-motion";
import {
  UserCheck,
  FileText,
  ShieldCheck,
  Upload,
  Search,
  Landmark,
  Handshake,
  ChevronRight
} from "lucide-react";

const studentCards = [
  {
    id: 1,
    title: "Create Account",
    status: "Completed",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: UserCheck,
    iconBg: "bg-purple-100 text-purple-600",
    bullets: ["Create Account", "Profile Complete", "Eligibility Verified"],
  },
  {
    id: 2,
    title: "Profile Complete",
    status: "Completed",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: FileText,
    iconBg: "bg-purple-100 text-purple-600",
    bullets: ["Create Account", "Profile Complete", "Eligibility Retire"],
  },
  {
    id: 3,
    title: "Eligibility Verified",
    status: "Active",
    statusClass: "bg-emerald-100 text-emerald-700",
    icon: ShieldCheck,
    iconBg: "bg-blue-100 text-blue-600",
    bullets: [
      "Upload Aadhaar",
      "PAN",
      "College Admission Letter",
      "Document verification",
      "Document verification",
    ],
  },
  {
    id: 4,
    title: "Document Upload",
    status: "Active",
    statusClass: "bg-amber-100 text-amber-700",
    icon: Upload,
    iconBg: "bg-amber-100 text-amber-600",
    hasDetails: true,
  },
];

const bankCards = [
  {
    id: 1,
    title: "Bank Verification",
    status: "Queued",
    statusClass: "bg-amber-100 text-amber-700",
    icon: UserCheck,
    iconBg: "bg-purple-100 text-purple-600",
    bullets: ["Bank Verification", "Sanction Process"],
  },
  {
    id: 2,
    title: "Bank Verification",
    status: "Queued",
    statusClass: "bg-amber-100 text-amber-700",
    icon: Search,
    iconBg: "bg-blue-100 text-blue-600",
    bullets: ["Bank Verification", "Sanction Process", "Control Release"],
  },
  {
    id: 3,
    title: "Sanction Process",
    icon: Landmark,
    iconBg: "bg-blue-100 text-blue-600",
    description: "Manage email request & sanction process",
  },
  {
    id: 4,
    title: "Disbursement",
    icon: Handshake,
    iconBg: "bg-amber-100 text-amber-600",
    bullets: ["Pay installments and reminders"],
  },
];

const DetailedTimeline = () => {
  return (
    <section id="timeline" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* SECTION HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Detailed Loan Journey Timeline
        </h2>
      </div>

      {/* TIMELINE CONTAINER (DESKTOP DUAL TRACK + MOBILE STREAM) */}
      <div className="relative bg-[#F8F7F3] rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-inner">
        
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden lg:block relative py-6">
          
          {/* TOP TRACK: STUDENT STEPS */}
          <div className="flex items-center gap-6 mb-12">
            
            {/* VERTICAL LABEL: STUDENT STEPS */}
            <div className="w-12 shrink-0 flex items-center justify-center">
              <span className="font-extrabold text-slate-800 text-sm tracking-wider uppercase [writing-mode:vertical-lr] rotate-180">
                Student Steps
              </span>
            </div>

            {/* 4 STUDENT CARDS GRID */}
            <div className="grid grid-cols-4 gap-6 flex-1">
              {studentCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/50 border border-slate-100/80 flex flex-col justify-between min-h-[210px] relative z-10"
                  >
                    <div>
                      {/* ICON CONTAINER */}
                      <div className={`w-10 h-10 rounded-2xl ${card.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* TITLE */}
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        {card.title}
                      </h3>

                      {/* STATUS BADGE */}
                      {card.status && (
                        <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${card.statusClass}`}>
                          {card.status}
                        </span>
                      )}

                      {/* BULLET LIST */}
                      {card.bullets && (
                        <ul className="space-y-1 text-slate-600 text-xs font-normal">
                          {card.bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* DETAILS LINK */}
                      {card.hasDetails && (
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-800 cursor-pointer hover:text-blue-600 mt-2">
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CENTRAL TIMELINE AXIS & CONNECTOR ARROWS */}
          <div className="relative my-6 pl-12">
            {/* Horizontal axis line */}
            <div className="w-full h-0.5 bg-blue-400 relative flex items-center justify-between px-10">
              
              {/* Start Arrow Left */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />

              {/* Node 1 */}
              <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>

              {/* Node 2 */}
              <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Node 3 */}
              <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-600 shadow-md shadow-blue-500/30" />

              {/* Node 4 */}
              <div className="w-4 h-4 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* End Arrow Right */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-blue-500 font-bold text-xs">
                ➔
              </div>
            </div>
          </div>

          {/* BOTTOM TRACK: BANK STEPS */}
          <div className="flex items-center gap-6 mt-12">
            
            {/* VERTICAL LABEL: BANK STEPS */}
            <div className="w-12 shrink-0 flex items-center justify-center">
              <span className="font-extrabold text-slate-800 text-sm tracking-wider uppercase [writing-mode:vertical-lr] rotate-180">
                Bank Steps
              </span>
            </div>

            {/* 4 BANK CARDS GRID */}
            <div className="grid grid-cols-4 gap-6 flex-1">
              {bankCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/50 border border-slate-100/80 flex flex-col justify-between min-h-[200px] relative z-10"
                  >
                    <div>
                      {/* ICON CONTAINER */}
                      <div className={`w-10 h-10 rounded-2xl ${card.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* TITLE */}
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        {card.title}
                      </h3>

                      {/* STATUS BADGE */}
                      {card.status && (
                        <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${card.statusClass}`}>
                          {card.status}
                        </span>
                      )}

                      {/* DESCRIPTION */}
                      {card.description && (
                        <p className="text-slate-600 text-xs font-normal leading-relaxed mb-2">
                          {card.description}
                        </p>
                      )}

                      {/* BULLET LIST */}
                      {card.bullets && (
                        <ul className="space-y-1 text-slate-600 text-xs font-normal">
                          {card.bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* MOBILE & TABLET RESPONSIVE STREAM */}
        <div className="block lg:hidden space-y-8 py-4">
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Student Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {studentCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div key={card.id} className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{card.title}</div>
                        {card.status && (
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${card.statusClass}`}>
                            {card.status}
                          </span>
                        )}
                      </div>
                    </div>
                    {card.bullets && (
                      <ul className="text-[11px] text-slate-600 space-y-0.5 mt-2">
                        {card.bullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Bank Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bankCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div key={card.id} className="bg-white rounded-2xl p-4 shadow-md border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{card.title}</div>
                        {card.status && (
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${card.statusClass}`}>
                            {card.status}
                          </span>
                        )}
                      </div>
                    </div>
                    {card.bullets && (
                      <ul className="text-[11px] text-slate-600 space-y-0.5 mt-2">
                        {card.bullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    )}
                    {card.description && (
                      <p className="text-[11px] text-slate-600 mt-1">{card.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailedTimeline;
