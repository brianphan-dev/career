export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Brian Phan</h1>
          <nav className="hidden md:flex space-x-6 text-sm desktop-nav">
            <a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-purple-400 transition-colors">Projects</a>
            <a href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors">Experience</a>
            <a href="#expertise" className="text-slate-300 hover:text-purple-400 transition-colors">Expertise</a>
            <a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up">
            <div className="max-w-4xl lg:flex-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-white">
                Building software that secures
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}physical infrastructure.
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
                I&apos;m a <strong className="text-purple-400">Software Engineering Manager</strong> at AWS, leading teams building the systems that secure Amazon&apos;s data centers: AI-powered threat detection, on-premises edge video, automated device provisioning, and real-time camera compliance monitoring across 2,355+ facilities, where software failures have physical consequences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  View Projects
                </a>
                <a href="#contact" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all">
                  Let&apos;s Connect
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <img
                src="/career/headshot.png?v=3"
                alt="Brian Phan"
                className="w-64 h-80 lg:w-72 lg:h-96 object-cover rounded-2xl border-2 border-slate-700 shadow-2xl shadow-purple-900/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              What I&apos;m building now.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Four systems that form the core of Amazon&apos;s physical security automation strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">UAD (Unauthorized Access Detection)</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                AI-powered alarm detection replacing traditional door alarms with computer vision. Cross-verifies access control signals with video analysis to distinguish real threats from false alarms. Targeting 48% reduction of 872K annual nuisance alarms. Phased rollout by violation type with shadow mode, per-site thresholds, and automatic reversion.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Cortex (Edge Video Platform)</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                On-premises edge computing platform deployed inside data centers. Runs video recording and AI inference on local hardware behind air-gapped networks. Store-and-forward architecture with a 5-day local resilience buffer so video survives WAN outages without human intervention. Replaces 8,200+ legacy NVRs at 73% cost reduction.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">ZTP (Zero-Touch Provisioning)</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Automated security device deployment across 273 new data center builds. Event-driven pipeline: devices self-configure when plugged into the network. Compresses the provisioning timeline from 6 weeks to 2 weeks per site. Built a coalition across four organizations, wrote the business case, and structured delivery so each phase ships independently.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">OSCAR (Camera Compliance)</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                AI system continuously monitoring 300,000+ cameras for coverage gaps, field-of-view drift, and video quality issues. Three complementary detection mechanisms cut issue detection from 18-month manual audit cycles to 5 seconds. Reduced daily operator review from 1,037 cameras to 21. Adopted by a second team without re-engineering the core system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section id="expertise" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              What I build.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Systems that run inside data centers, where operational failure has physical consequences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DC Infrastructure & Edge Computing */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">DC Infrastructure & Edge Computing</h3>
              <p className="text-slate-300 leading-relaxed">On-premises platforms in air-gapped data centers with store-and-forward resilience. Fleet management across 2,355+ sites. Staggered rollouts, local resilience buffers, and deployment strategies where &quot;just redeploy&quot; isn&apos;t an option.</p>
            </div>

            {/* AI-Powered Detection Systems */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">AI-Powered Detection Systems</h3>
              <p className="text-slate-300 leading-relaxed">Computer vision pipelines for physical security, cross-verifying access control signals with video analysis. Shadow mode rollout methodology with per-site evaluation frameworks and automatic reversion. Real-time compliance monitoring across 300,000+ devices.</p>
            </div>

            {/* Fleet Automation & Provisioning */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Fleet Automation & Provisioning</h3>
              <p className="text-slate-300 leading-relaxed">Zero-touch device deployment across four organizations. Event-driven provisioning pipelines compressing 6-week timelines to 2. Phased delivery with independent deliverables, and automated safety checks replacing manual validation.</p>
            </div>

            {/* Engineering Leadership */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Engineering Leadership</h3>
              <p className="text-slate-300 leading-relaxed">Building teams from zero, driving cross-org coalitions, structured autonomy. Hands-on technical leadership: code reviews, architecture decisions, and writing the business case documents myself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section id="experience" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              12 years across Microsoft and Amazon.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              From ML engineering to platform engineering to management. Building progressively more complex systems and teams, now focused on data center infrastructure at global scale.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Engineering Manager, Physical Security Technology (TS/SCI) @ AWS</h3>
                  <p className="text-purple-400 mb-4">February 2024 - Present</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
              </div>
              <ul className="text-slate-300 leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Lead 10 engineers across two teams building the Optics video platform, securing 2,355+ AWS data centers, fulfillment centers, and Prime Air facilities worldwide</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Design ML-powered unauthorized access detection targeting 48% reduction of false alarms and 43,000+ hours of annual investigation time savings</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Architect resilient on-premises edge computing and video streaming solutions for air-gapped environments with bi-weekly release cycles</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Drive zero-touch provisioning roadmap across four organizations, cutting device deployment from 6 weeks to 2 per site</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Engineering Manager, Compliance Automation @ Amazon Devices & Services</h3>
                  <p className="text-purple-400 mb-4">February 2022 - February 2024</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <ul className="text-slate-300 leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Managed 12 engineers automating privacy compliance (GDPR, CCPA, DMA) across 10+ product lines serving hundreds of millions of customers</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Built automated DSAR detection reducing unknown coverage areas by 75.5% across DynamoDB, Redshift, and S3</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Designed data governance system achieving 85% automated policy verification across 1,600+ datasets</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Engineering Manager, Privacy Infrastructure @ Amazon Alexa</h3>
                  <p className="text-purple-400 mb-4">February 2020 - February 2022</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <ul className="text-slate-300 leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Built and grew a team from zero, owning all privacy-preserving data infrastructure for Alexa&apos;s ML and BI pipelines</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Designed and launched Alexa Data Anonymizer (ADA), reducing reidentification risk by 75%</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Built pseudonymization services processing 10&#xB9;&#xB3;+ records at sub-10ms latency</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Engineer, Mobile & Entertainment Platforms @ Amazon Alexa</h3>
                  <p className="text-purple-400 mb-4">December 2017 - February 2020</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <ul className="text-slate-300 leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Built full-stack services powering Alexa&apos;s mobile, media, and web platforms across 40+ countries, driving $50M-$75M in annual savings</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Led redesign of Alexa Mobile App experience, contributing to ratings improvement from 1.5 to 4.6 stars</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Machine Learning Engineer, Windows & Xbox @ Microsoft</h3>
                  <p className="text-purple-400 mb-4">February 2014 - December 2017</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-xs">MS</span>
                </div>
              </div>
              <ul className="text-slate-300 leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Redesigned Xbox Marketplace publishing pipeline, reducing latency from 18 hours to near-instant while cutting costs 40%</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">&#8226;</span>Designed NLP-based feedback classification system routing customer signals across 30+ Windows teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Education & Certifications
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">University of Maryland, College Park</h3>
                  <p className="text-slate-300">B.S. in Computer Science, Mathematics, and Geographic Information Systems</p>
                  <p className="text-slate-400 text-sm mt-1">September 2010 - December 2013</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center shrink-0 ml-4">
                  <span className="text-white font-bold text-xs">UMD</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300">ISC2 CC, Certified in Cybersecurity</span>
                <span className="px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300">IAPP CIPT, Certified Information Privacy Technologist</span>
                <span className="px-4 py-2 bg-emerald-900/30 border border-emerald-500/30 rounded-lg text-emerald-300">Top Secret / SCI Clearance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Technical Skills
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Python", "C/C++", "JavaScript/TypeScript", "C#", "SQL"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 hover:border-purple-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Systems</h3>
              <div className="flex flex-wrap gap-3">
                {["Data Center Infrastructure Management", "Fleet Management & Provisioning", "On-Premises Edge Computing", "Air-Gapped Deployment", "Physical Security Systems", "ML/AI Detection Pipelines", "Large-Scale Video Platforms", "Hybrid Cloud-Edge Architecture", "Distributed Systems", "Data Center Network Fabrics", "Device Provisioning Automation", "CI/CD & Agile Delivery"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 hover:border-purple-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Leadership through real experience.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              My approach comes from building and operating systems where the stakes are physical. Cameras stop recording, alarms stop firing, data centers can&apos;t activate. That shapes everything about how I manage.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Give engineers the hardest problem they can handle, then get out of the way.</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I match engineers to problems that stretch them, give them the context to make good decisions without me, and protect their time from organizational noise. I stay technically involved: code reviews on critical paths, architecture decisions, and writing the business case for our largest cross-org program myself. But I measure my impact by how independently my team operates, not by how much I personally contribute.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Build coalitions, not empires.</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                The hardest problems in infrastructure live in the gaps between organizations. Our largest program required aligning four teams with four leadership chains, none reporting to me. I wrote the business case, ran working sessions where each team&apos;s constraints were reflected in the design, and structured delivery so one team&apos;s delay couldn&apos;t block another&apos;s value. The team that initially pushed back became our strongest advocates after they co-designed the safety checks. Alignment comes from co-creation, not convincing.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Invest in people like it&apos;s engineering work.</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;ve coached engineers to promotion and supported transitions into new roles. Career development isn&apos;t a quarterly conversation. It&apos;s collecting evidence month over month, matching stretch assignments to individual goals, and advocating with specifics rather than generalities. I rotate strong engineers across workstreams deliberately so they don&apos;t stale out. The variety is often the single biggest retention lever, especially in a domain where &quot;cool product&quot; isn&apos;t the draw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            What I&apos;m looking for.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I&apos;m interested in roles where software directly manages physical infrastructure: fleet management, data center automation, infrastructure reliability. I&apos;ve spent two years building applications that run on top of data center infrastructure. I want to work on the layer below: the systems that manage the infrastructure itself. Same domain, different layer.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">Let&apos;s Connect</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:BrianPhan06@gmail.com"
               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              BrianPhan06@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/brianphan-dev" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>&copy; 2026 Brian Phan. Software Engineering Manager @ AWS.</p>
        </div>
      </footer>
    </div>
  );
}
