import { useState } from 'react';
import { 
  Upload, 
  Check, 
  ChevronRight, 
  Loader2, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import Logo from '../assets/careerprep.svg';

function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    interests: [] as string[],
    reason: '',
    resume: null as File | null,
    consent: false
  });

  const degreeOptions = [
    "Engineering – 2nd Year",
    "Engineering – 3rd Year",
    "MBA"
  ];

  const interestOptions = [
    "Product / Platforms",
    "Tools & Systems",
    "Growth / Outreach",
    "Research / Content"
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      if (prev.interests.length >= 2) {
        return prev; // Prevent selecting more than 2
      }
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#111827]">Application Received</h2>
          <p className="text-[#6B7280]">
            Thanks for applying, {formData.fullName.split(' ')[0]}! We'll review your details and get back to you via WhatsApp or Email soon.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-[#4F46E5] font-medium hover:underline"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#4F46E5] selection:text-white flex flex-col lg:flex-row">
      
      {/* LEFT SECTION - Form */}
      <div className="w-full lg:w-[55%] relative flex flex-col min-h-screen z-10">
        
        {/* Header / Logo */}
        <div className="flex-none p-8 md:p-12 pb-4">
          <img 
            src={Logo} 
            alt="CareerPrep.in" 
            className="h-6 md:h-8 w-auto"
          />
        </div>

        {/* Form Container */}
        <div className="flex-grow px-8 md:px-12 lg:px-20 pb-12">
          <div className="max-w-xl mx-auto lg:mx-0">
            
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Student Internship Application</h1>
              <p className="text-[#6B7280]">Join the team building the future of career preparation.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Details Group */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#374151]">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#374151]">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#374151]">Mobile / WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#374151]">College Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                    placeholder="e.g. BMSIT"
                    value={formData.college}
                    onChange={e => setFormData({...formData, college: e.target.value})}
                  />
                </div>
              </div>

              {/* Degree Selection */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#374151]">Degree & Year</label>
                <div className="relative">
                  <select 
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none appearance-none bg-white transition-all"
                    value={formData.degree}
                    onChange={e => setFormData({...formData, degree: e.target.value})}
                  >
                    <option value="" disabled>Select your current year</option>
                    {degreeOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Area of Interest */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#374151]">Area of Interest</label>
                  <span className="text-xs text-[#6B7280] bg-gray-100 px-2 py-0.5 rounded-full">Select up to 2</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`
                          relative px-4 py-3 rounded-lg text-sm font-medium text-left border transition-all duration-200
                          ${isSelected 
                            ? 'border-[#4F46E5] bg-[#EEF2FF] text-[#4F46E5]' 
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                          }
                        `}
                      >
                        {interest}
                        {isSelected && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4F46E5]" />
                        )}
                      </button>
                    )
                  })}
                </div>
                {formData.interests.length === 0 && (
                  <p className="text-xs text-amber-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Please select at least one area.
                  </p>
                )}
              </div>

              {/* Why Interested */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#374151]">Why are you interested?</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Tell us in 2-3 lines why you want to join..."
                  value={formData.reason}
                  onChange={e => setFormData({...formData, reason: e.target.value})}
                />
              </div>

              {/* Resume Upload */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#374151] flex justify-between">
                  <span>Resume <span className="text-[#6B7280] font-normal">(Optional)</span></span>
                </label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={e => setFormData({...formData, resume: e.target.files ? e.target.files[0] : null})}
                  />
                  <div className={`
                    border-2 border-dashed rounded-lg p-4 flex items-center justify-center gap-3 transition-colors
                    ${formData.resume ? 'border-[#4F46E5] bg-[#EEF2FF]' : 'border-gray-300 group-hover:border-gray-400'}
                  `}>
                    <Upload className={`w-5 h-5 ${formData.resume ? 'text-[#4F46E5]' : 'text-gray-400'}`} />
                    <span className={`text-sm ${formData.resume ? 'text-[#4F46E5] font-medium' : 'text-gray-500'}`}>
                      {formData.resume ? formData.resume.name : "Click to upload (PDF only)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      required
                      type="checkbox" 
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-[#4F46E5] checked:bg-[#4F46E5] transition-all"
                      checked={formData.consent}
                      onChange={e => setFormData({...formData, consent: e.target.checked})}
                    />
                    <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-sm text-[#4B5563] group-hover:text-[#111827] transition-colors leading-tight">
                    I understand this is a learning-focused internship with real responsibilities.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting || formData.interests.length === 0}
                className="w-full bg-[#4F46E5] text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-[#4338ca] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - Visual Pattern (Fixed) */}
      <div className="hidden lg:block w-[45%] bg-[#F9FAFB] fixed right-0 top-0 bottom-0 overflow-hidden border-l border-[#E5E7EB]">
        
        {/* Abstract Gradient Blobs */}
        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#6366F1] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float-slower"></div>

        {/* CSS Dot Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Centered Visual Element */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-sm bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-8">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
               <div className="w-12 h-12 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                 <Briefcase className="w-6 h-6 text-[#4F46E5]" />
               </div>
               <div>
                 <h3 className="font-semibold text-[#111827]">Internship Application</h3>
                 <p className="text-xs text-[#6B7280]">Batch of 2026</p>
               </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>Real-world Project Experience</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>Mentorship from Seniors</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>Certificate of Completion</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ApplyPage;