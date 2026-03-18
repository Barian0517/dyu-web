import React from 'react';
import { Cpu, Tag, ExternalLink, Home, Layout, MonitorPlay, AppWindow } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
  type: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: '世界計畫 宵崎奏主題網站',
    description: '使用 Canva 製作的世界計畫（Project Sekai）角色「宵崎奏」的主題介紹網站。',
    year: '2026',
    tags: ['Canva', 'Project Sekai', 'Web Design'],
    link: 'https://barian-kanade.my.canva.site/',
    icon: <Layout className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'CANVA SITE',
  },
  {
    id: '2',
    title: '世界計畫 宵崎奏主題網站',
    description: '使用 Gamma 製作的世界計畫（Project Sekai）角色「宵崎奏」的主題介紹網站與簡報。',
    year: '2026',
    tags: ['Gamma', 'Project Sekai', 'Presentation'],
    link: 'https://gamma.app/docs/-exhrt58hkk0cnup?mode=present#card-g48l2rc0j2jd8lf',
    icon: <MonitorPlay className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'GAMMA APP',
  },
  {
    id: '3',
    title: '世界計畫 宵崎奏主題網站',
    description: '使用 Strikingly 製作的世界計畫（Project Sekai）角色「宵崎奏」的主題介紹網站。',
    year: '2026',
    tags: ['Strikingly', 'Project Sekai', 'Website Builder'],
    link: 'https://cyan-pigeon-108qn7c.mystrikingly.com/',
    icon: <AppWindow className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'STRIKINGLY SITE',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F111A] text-gray-300 font-sans selection:bg-[#B89020] selection:text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0F111A]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-wider">幽影櫻的作業區</h1>
        <a
          href="https://home.barian.moe"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10"
        >
          <Home className="w-4 h-4" />
          <span>回到主頁</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-[#1A1C23] border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.02]"
            >
              {/* Card Top Section */}
              <div className="relative h-48 bg-[#12141C] flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
                {/* Subtle Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-[#B89020]/50 bg-[#0F111A]/80 backdrop-blur-sm">
                  <span className="text-[#B89020] text-sm font-bold tracking-widest">{project.year}</span>
                </div>

                {/* Icon & Type */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {project.icon}
                  <span className="text-gray-500 text-sm tracking-[0.2em] font-medium uppercase">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Card Bottom Section */}
              <div className="flex-1 p-6 flex flex-col">
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#B89020]/30 bg-[#B89020]/5 text-[#B89020] text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200 text-white font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>啟動工具</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
