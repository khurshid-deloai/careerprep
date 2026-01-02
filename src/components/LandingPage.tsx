import { Instagram, MessageCircle, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';
import Logo from '../assets/careerprep.svg';
import { Mail, MapPin } from 'lucide-react';


function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#4F46E5] selection:text-white flex flex-col lg:flex-row">
      
      {/* LEFT SECTION - Content */}
      <div className="w-full lg:w-[55%] relative flex flex-col min-h-screen p-8 md:p-16 lg:p-20 z-10">
        
        {/* Header / Logo */}
        <div className="flex-none mb-12 lg:mb-0">
          <img 
            src={Logo}
            alt="CareerPrep.in" 
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Main Content Area - Centered vertically */}
        <div className="flex-grow flex flex-col justify-center max-w-xl py-10 lg:py-0">
          
          {/* Status Badge */}
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-sm font-medium text-[#4B5563] mb-8 animate-fade-in">
            <Calendar className="w-4 h-4 text-[#4F46E5]" />
            <span>Coming January 15, 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] tracking-tight mb-6 animate-slide-up">
            We don't get you jobs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
              We prepare you.
            </span>
          </h1>

          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 font-medium animate-fade-in-delayed">
            The job market has changed. Random tutorials aren't enough. 
            Join the focused system built for students who think ahead.
          </p>

          {/* Social Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-more-delayed">
            
            {/* WhatsApp Card */}
            <a 
              href="https://whatsapp.com/channel/0029VbBzloqBPzjY7YBqIc0L" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#25D366] hover:bg-[#F0FDF4] transition-all duration-300"
            >
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-1">WhatsApp Channel</h3>
              <p className="text-sm text-[#6B7280]">Get daily updates & tips</p>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/careerprep_in" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#E1306C] hover:bg-[#FFF1F2] transition-all duration-300"
            >
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-[#E1306C]" />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-[#E1306C]" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-1">Instagram</h3>
              <p className="text-sm text-[#6B7280]">Follow our journey</p>
            </a>
          </div>
        </div>

{/* Footer */}
<footer className="flex-none pt-8 border-t border-gray-100 lg:border-none animate-fade-in-latest">
  <div className="flex flex-col gap-4">
    
    {/* Contact Info */}
    <div className="space-y-3">
      
      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 sm:w-4 sm:h-4 text-gray-800 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-[#6B7280]">
          <a
            href="mailto:contact@careerprep.in"
            className="hover:text-[#4F46E5] transition-colors"
          >
            contact@careerprep.in
          </a>
        </p>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 sm:w-4 sm:h-4 text-gray-800 mt-1 flex-shrink-0" />
        <p className="text-sm text-[#6B7280] leading-relaxed max-w-2xl">
          BMS Innovation Centre and Entrepreneurship Park, BMS Institute of Technology and Management,
          Avalahalli, Yelahanka, Bengaluru – 560064, Karnataka, India
        </p>
      </div>

    </div>

    {/* Copyright */}
    <p className="text-sm text-[#9CA3AF] pt-2">
      © 2026 CareerPrep. All rights reserved.
    </p>

  </div>
</footer>



      </div>

      {/* RIGHT SECTION - Visual Pattern */}
      <div className="hidden lg:block w-full lg:w-[45%] bg-[#F9FAFB] relative overflow-hidden border-l border-[#E5E7EB] min-h-[400px] lg:min-h-auto"
>
        
        {/* Abstract Gradient Blobs */}
        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#6366F1] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float-slower"></div>

        {/* CSS Dot Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Floating Feature List (Visual Interest) */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default">
            <div className="space-y-4">
              <div className="h-2 w-20 bg-[#E5E7EB] rounded"></div>
              <div className="h-8 w-3/4 bg-[#111827] rounded opacity-10"></div>
              
              <div className="pt-4 space-y-3">
                {[
                  "Mock Interviews", 
                  "Aptitude Roadmap", 
                  "Technical Logic"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4F46E5]" />
                    <span className="text-[#374151] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <div className="h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#4F46E5] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-[#6B7280]">
                  <span>Progress</span>
                  <span>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;