import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Play, Clock } from "lucide-react";

const articles = [
  {
    title: "Guide to Student Visas",
    desc: "Complete step-by-step documentation and financial proof guide for overseas study visa approval.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    readTime: "5 min read",
    tag: "Visa Guide",
  },
  {
    title: "Understanding Education Loan Interest Rates",
    desc: "Fixed vs Floating interest rates explained: How tax benefits under Section 80E save money.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    readTime: "8 min read",
    tag: "Financial Tips",
  },
];

const BlogResources = () => {
  return (
    <section id="blog" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
          Knowledge Base
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
          Blog and Resources
        </h2>
        <p className="text-slate-600 text-base font-normal">
          Expert guides, interest rate breakdowns, and student visa tutorials to empower your financial decisions.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {articles.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col group cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-900 ml-0.5" />
                </div>
              </div>
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                {item.tag}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.readTime}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default BlogResources;
