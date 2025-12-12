import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  Briefcase, 
  User, 
  Heart,
  Code,
  MapPin
} from 'lucide-react';
import { Block } from './components/Block';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  // State for simple interactions
  const [activeTab, setActiveTab] = useState<'skills' | 'hobbies'>('skills');

  return (
    <div className="min-h-screen bg-olive-800 p-4 sm:p-8 font-sans overflow-x-hidden">
      
      {/* Main Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

        {/* 1. Header Block: Profile Pic + Name */}
        <Block className="md:col-span-12 flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-cream-200 to-cream-100 border-4 border-cream-200" delay={0.1}>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-olive-800 overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <motion.h1 
              className="text-5xl sm:text-7xl font-serif font-black text-olive-900 tracking-tighter"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              SHRIYANSH <br className="hidden sm:block" />
              <span className="text-olive-800 opacity-80">SONI</span>
            </motion.h1>
            <p className="mt-2 text-xl text-olive-800 italic">"Aspiring Developer & Creative Thinker."</p>
          </div>
        </Block>

        {/* 2. Contact & Degree Block */}
        <Block className="md:col-span-7 flex flex-col justify-between" delay={0.2}>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-olive-900">
              <GraduationCap className="w-6 h-6" />
              <span>BCA Undergraduate</span>
            </h2>
            <p className="text-olive-800/80 mb-2 font-medium">
              Katni Arts and Commerce College (KACC).<br/>
              Student at Sheryians Coding School.
            </p>
            <div className="flex items-center gap-2 text-olive-800/70 mb-6 text-sm font-semibold">
                <MapPin size={16} />
                <span>Katni, Madhya Pradesh, India</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
             <a href="mailto:shriyanshsoni288@gmail.com" className="flex items-center gap-3 p-3 bg-olive-800/10 rounded-xl hover:bg-olive-800/20 transition-colors">
                <Mail className="w-5 h-5 text-olive-900" />
                <span className="font-semibold text-olive-900 text-sm truncate" title="shriyanshsoni288@gmail.com">shriyanshsoni288@gmail.com</span>
             </a>
             <a href="tel:9617797497" className="flex items-center gap-3 p-3 bg-olive-800/10 rounded-xl hover:bg-olive-800/20 transition-colors">
                <Phone className="w-5 h-5 text-olive-900" />
                <span className="font-semibold text-olive-900 text-sm">9617797497</span>
             </a>
          </div>

          <div className="flex gap-4 mt-6">
            {[
                { icon: Linkedin, link: 'https://www.linkedin.com/in/shriyansh-soni-b9b445399/', title: 'LinkedIn: Shriyansh Soni' },
                { icon: Github, link: 'https://github.com', title: 'GitHub' },
                { icon: Twitter, link: 'https://x.com/shriy_nsh', title: 'X: @shriy_nsh' }
            ].map((Item, i) => (
                <a key={i} href={Item.link} title={Item.title} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-olive-900 text-cream-200 rounded-full flex items-center justify-center hover:bg-olive-800 transition-all hover:-translate-y-1 shadow-lg">
                    <Item.icon size={20} />
                </a>
            ))}
          </div>
        </Block>

        {/* 3. Professional Summary */}
        <Block className="md:col-span-5 bg-olive-900 text-cream-100 border-2 border-cream-200" delay={0.3} hoverScale={true}>
            <div className="h-full flex flex-col">
                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-cream-200">
                    <User className="w-6 h-6" />
                    Profile
                </h3>
                <p className="text-cream-100/90 leading-relaxed text-lg">
                    Passionate student currently pursuing a BCA degree. I am deeply interested in software development and coding. 
                    I am constantly learning new technologies at Sheryians Coding School to build a strong foundation in programming. 
                    Eager to apply my knowledge in real-world projects.
                </p>
                <div className="mt-auto pt-6 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-cream-200 text-olive-900 rounded-full text-xs font-bold uppercase tracking-wider">Learner</span>
                    <span className="px-3 py-1 bg-cream-200 text-olive-900 rounded-full text-xs font-bold uppercase tracking-wider">Developer</span>
                    <span className="px-3 py-1 bg-cream-200 text-olive-900 rounded-full text-xs font-bold uppercase tracking-wider">Fresher</span>
                </div>
            </div>
        </Block>

        {/* 4. Work Experience */}
        <Block className="md:col-span-8" delay={0.4}>
            <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-2 text-olive-900 border-b-2 border-olive-900/10 pb-2">
                <Briefcase className="w-8 h-8" />
                Work Experience
            </h3>
            <div className="space-y-6">
                {[
                    { role: "Fresher", company: "Open to Work", time: "Present", desc: "0 years of work experience. Currently focusing on academic excellence and skill development in coding and software applications." },
                ].map((job, idx) => (
                    <div key={idx} className="group hover:bg-white/50 p-4 rounded-2xl transition-colors">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className="text-xl font-bold text-olive-900">{job.role}</h4>
                            <span className="bg-olive-800 text-cream-100 px-3 py-1 rounded-full text-xs font-mono">{job.time}</span>
                        </div>
                        <div className="text-olive-700 font-semibold mb-2">{job.company}</div>
                        <p className="text-olive-900/80">{job.desc}</p>
                    </div>
                ))}
            </div>
        </Block>

        {/* 5. Skills & Hobbies */}
        <Block className="md:col-span-4 flex flex-col" delay={0.5}>
            <div className="flex gap-2 mb-6 p-1 bg-olive-900/5 rounded-full w-fit">
                <button 
                    onClick={() => setActiveTab('skills')}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'skills' ? 'bg-olive-900 text-cream-200 shadow-md' : 'text-olive-900'}`}
                >
                    Skills
                </button>
                <button 
                    onClick={() => setActiveTab('hobbies')}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'hobbies' ? 'bg-olive-900 text-cream-200 shadow-md' : 'text-olive-900'}`}
                >
                    Hobbies
                </button>
            </div>

            <div className="flex-grow">
                {activeTab === 'skills' ? (
                    <div className="flex flex-wrap gap-2">
                        {['C', 'C++', 'HTML/CSS', 'JavaScript', 'React Basics', 'Python', 'Problem Solving'].map(skill => (
                            <span key={skill} className="px-3 py-2 bg-olive-800/10 text-olive-900 font-bold rounded-lg border border-olive-900/10 flex items-center gap-2">
                                <Code size={14} /> {skill}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { name: 'Coding', icon: '💻' },
                            { name: 'Gaming', icon: '🎮' },
                            { name: 'Music', icon: '🎵' },
                            { name: 'Travel', icon: '✈️' },
                        ].map(hobby => (
                            <div key={hobby.name} className="flex flex-col items-center justify-center p-4 bg-white/40 rounded-xl">
                                <span className="text-2xl mb-1">{hobby.icon}</span>
                                <span className="font-semibold text-olive-900 text-sm">{hobby.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Block>

        {/* 6. Education & Certifications */}
        <Block className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8" delay={0.6}>
            <div>
                 <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-olive-900">
                    <GraduationCap className="w-6 h-6" />
                    Education
                </h3>
                <ul className="space-y-4">
                    <li className="bg-olive-50 p-4 rounded-xl border-l-4 border-olive-900">
                        <h4 className="font-bold text-lg">BCA (1st Year)</h4>
                        <p className="text-sm text-olive-700">Katni Arts and Commerce College (KACC) • Present</p>
                    </li>
                    <li className="bg-olive-50 p-4 rounded-xl border-l-4 border-olive-900">
                        <h4 className="font-bold text-lg">Coding Student</h4>
                        <p className="text-sm text-olive-700">Sheryians Coding School • Present</p>
                    </li>
                    <li className="bg-olive-50 p-4 rounded-xl border-l-4 border-olive-900">
                        <h4 className="font-bold text-lg">Class 10th & 12th</h4>
                        <p className="text-sm text-olive-700">St. Paul's Sr. Sec. School, Katni</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-olive-900">
                    <Award className="w-6 h-6" />
                    Certifications / Learning
                </h3>
                <div className="flex flex-wrap gap-3">
                    {['Web Development Fundamentals', 'Programming Basics', 'Data Structures (Learning)'].map((cert, i) => (
                         <div key={i} className="flex items-center gap-2 px-4 py-3 bg-olive-900 text-cream-200 rounded-lg w-full shadow-sm">
                            <Award size={16} className="text-accent-500" />
                            <span className="font-medium">{cert}</span>
                         </div>
                    ))}
                </div>
            </div>
        </Block>

      </div>

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Footer / Thank you note */}
      <motion.div 
        className="max-w-4xl mx-auto mt-16 mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="inline-block p-2 rounded-full bg-cream-200/10 mb-4">
             <Heart className="w-8 h-8 text-cream-200 animate-bounce" fill="currentColor" />
        </div>
        <h2 className="text-4xl font-serif text-cream-100 mb-4">Thank You for Visiting!</h2>
        <p className="text-cream-200/70 text-lg max-w-lg mx-auto leading-relaxed">
            I genuinely appreciate your time and consideration. I am eager to learn and grow in the field of technology. 
            If you have any opportunities or advice for a fresher, please reach out via WhatsApp or Email.
        </p>
        <p className="mt-8 text-sm text-cream-200/30">
            © {new Date().getFullYear()} Shriyansh Soni.
        </p>
      </motion.div>

    </div>
  );
};

export default App;