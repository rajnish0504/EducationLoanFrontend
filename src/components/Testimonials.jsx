import { motion } from "framer-motion";
import { Play, Star, CheckCircle } from "lucide-react";

const videoTestimonials = [
  {
    title: "How EduLoan Nexus Funded My Masters in CS at Stanford",
    views: "125K+ views",
    tag: "98% recommended",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80",
    name: "Advik Sharma",
    role: "Stanford Graduate",
  },
  {
    title: "Zero Collateral Loan Approval in 24 Hours",
    views: "98K+ views",
    tag: "Verified Story",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    name: "Ananya Roy",
    role: "Oxford University",
  },
  {
    title: "Parent's Guide to Seamless Student Loan Verification",
    views: "150K+ views",
    tag: "Parent Story",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80",
    name: "Ramesh Verma",
    role: "Parent of IIT Scholar",
  },
  {
    title: "Transparent EMI Calculator Saved Me ₹1.2 Lakhs",
    views: "88K+ views",
    tag: "EMI Savings",
    thumbnail: "https://images.unsplash.com/photo-1580894732413-80e14a799c8f?w=500&auto=format&fit=crop&q=80",
    name: "Gaurav Malhotra",
    role: "MBA Student",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full">
          Real Stories
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
          Enriched Testimonials and Trust
        </h2>
        <p className="text-slate-600 text-base font-normal">
          Hear directly from students, parents, and university admins about how EduLoan Nexus transformed their education journey.
        </p>
      </div>

      {/* VIDEO TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {videoTestimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col group cursor-pointer"
          >
            {/* THUMBNAIL CONTAINER WITH PLAY BUTTON */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-900 ml-0.5" />
                </div>
              </div>
              <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[9px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                {item.views}
              </span>
              <span className="absolute bottom-3 right-3 bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {item.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <h4 className="font-bold text-slate-900 text-sm leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">{item.name}</div>
                  <div className="text-[10px] text-slate-500">{item.role}</div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TRUST BADGES ROW (TRUSTPILOT & GOOGLE REVIEWS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* TRUSTPILOT */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4"
        >
          <div className="text-emerald-500 font-black text-2xl tracking-tighter shrink-0">
            ★ Trustpilot
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              4.9 out of 5 <span className="text-slate-400 font-normal">(1,120 reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* GOOGLE REVIEWS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-lg shadow-slate-200/40 flex items-center gap-4"
        >
          <div className="text-blue-600 font-black text-2xl tracking-tighter shrink-0">
            Google
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              4.8 out of 5 <span className="text-slate-400 font-normal">Google Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;
