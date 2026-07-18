import { motion } from "framer-motion";
import {
  Settings,
  Calculator,
  Cloud,
  ShieldCheck,
  UserCheck,
  Shield,
  Calendar,
  Clock,
  Mail,
  Layout,
  Bell
} from "lucide-react";

const featuresList = [
  { icon: Settings, label: "AI Assisted Eligibility Check" },
  { icon: Calculator, label: "Instant EMI Calculator" },
  { icon: Cloud, label: "Secure Cloud Storage" },
  { icon: ShieldCheck, label: "Role Based Access" },
  { icon: UserCheck, label: "Admin Verification" },
  { icon: Shield, label: "Loan Ennimated Tracking" },
  { icon: Calendar, label: "EMI Schedule Generated" },
  { icon: Clock, label: "Live Status Tracking" },
  { icon: Mail, label: "Email & SMS Notifications" },
  { icon: Layout, label: "Responsive Dashboard" },
  { icon: Bell, label: "Responsive Dotifications" },
];

const WhyChoose = () => {
  return (
    <section className="py-8 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Why Choose EduLoan Nexus
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {featuresList.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-4 shadow-md shadow-slate-200/40 border border-slate-100/90 flex flex-col items-center text-center justify-center min-h-[125px]"
            >
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
