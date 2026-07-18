import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-slate-200/80 pt-16 pb-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 mb-12 text-xs">
          
          {/* LOGO & BRAND */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                EduLoan Nexus
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
              Empowering students worldwide with transparent, fast, and digital education loans.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Features</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Communication</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Feedback</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Features</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">EMI Calculator</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">New Schedule</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Resources</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Eligibility AI</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Guides</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Backed Banks</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Support</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Company</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Services</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-slate-900 cursor-pointer transition-colors">Security</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SOCIAL & COPYRIGHT BAR */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">f</span>
            <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">t</span>
            <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">in</span>
            <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200 cursor-pointer">ig</span>
          </div>

          <div>
            © 2027 EduLoan Nexus. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
