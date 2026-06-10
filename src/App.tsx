import React, { useState } from 'react';
import { Cpu, Tag, ExternalLink, Home, Layout, MonitorPlay, AppWindow, Swords, Folder, Grid, Globe, Bot } from 'lucide-react';

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
    id: 'w1-project',
    title: '個人首頁',
    description: '在 Neocities 網站建立的首頁，作為第一週作業。',
    year: '2026',
    tags: ['Neocities', 'HTML', 'Web Design'],
    link: 'https://dyuweb.barian.moe',
    icon: <Globe className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'NEOCITIES SITE',
  },
  {
    id: 'w2-project',
    title: '十二國記主題網頁',
    description: '使用 AI 工具輔助製作的主題網頁，作為第二週作業。',
    year: '2026',
    tags: ['AI', 'Generative', 'Web Design'],
    link: 'https://dyuweb0304.barian.moe',
    icon: <Bot className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'AI ASSISTED',
  },
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
  {
    id: 'w10-project',
    title: '香港．說走就走',
    description: '使用 Dreamweaver 製作的香港景點特搜與旅遊介紹網站。',
    year: '2026',
    tags: ['Dreamweaver', 'HTML', 'Travel'],
    link: 'https://dyu-web0429.barian.moe/',
    icon: <Layout className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'DREAMWEAVER SITE',
  },
  {
    id: 'w11-project',
    title: '香港．景點特搜 (加表格)',
    description: 'DW-景點特搜(scenic.html)下方加表格作業。',
    year: '2026',
    tags: ['Dreamweaver', 'HTML', 'Table'],
    link: 'https://dyu-web0429.barian.moe/scenic.html',
    icon: <Layout className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'DREAMWEAVER SITE',
  },
  {
    id: 'w12-project',
    title: '文字旅行',
    description: 'DW-文字旅行(blog.html等四個檔案 + hk.css) 作業網站。',
    year: '2026',
    tags: ['Dreamweaver', 'HTML', 'Blog'],
    link: 'https://dyuweb513.barian.moe/',
    icon: <Layout className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'DREAMWEAVER SITE',
  },
  {
    id: 'w14-project',
    title: '多媒新聞',
    description: 'DW-多媒新聞(news.html) 作業網站。',
    year: '2026',
    tags: ['Dreamweaver', 'HTML', 'News'],
    link: 'https://dyuweb0527.barian.moe',
    icon: <Layout className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'DREAMWEAVER SITE',
  },
  {
    id: '4',
    title: '期末作業 刀劍神域愛麗絲篇',
    description: '利用 HTML5 UP! 範本製作的刀劍神域愛麗絲篇介紹網站。',
    year: '2026',
    tags: ['HTML5 UP!', 'Anime', 'Web Design'],
    link: 'http://saoaliceweb.barian.moe/',
    icon: <Swords className="w-12 h-12 text-[#B89020]" strokeWidth={1.5} />,
    type: 'HTML SITE',
  },
];

interface FolderData {
  id: string;
  week: string;
  date: string;
  description: string;
  projects?: Project[];
}

const folders: FolderData[] = [
  { id: 'w1', week: '第一週', date: '2/25', description: '在Neocities網站建立首頁、將網址交到作業區，做第1週測驗', projects: [projects[0]] },
  { id: 'w2', week: '第二週', date: '3/4', description: '用 ChatGPT 或 Gemini 或 Claude等AI，選一個做主題網頁', projects: [projects[1]] },
  { id: 'w3', week: '第三週', date: '3/11', description: '用 Canva 及 Gamma，各做一個主題網頁', projects: [projects[2], projects[3]] },
  { id: 'w4', week: '第四週', date: '3/18', description: '接續上週 Gamma 做第2頁，用 Strikingly做網頁', projects: [projects[4]] },
  { id: 'w5', week: '第五週', date: '3/25', description: '接續上週 Strikingly 加商城與部落格，用Wix做網頁' },
  { id: 'w10', week: '第十週', date: '4/29', description: 'DW-香港．說走就走(about.html)、景點特搜(scenic.html)', projects: [projects[5]] },
  { id: 'w11', week: '第十一週', date: '5/6', description: 'DW-景點特搜(scenic.html)下方加表格', projects: [projects[6]] },
  { id: 'w12', week: '第十二、十三週', date: '5/13、5/20', description: 'DW-文字旅行(blog.html等四個檔案 + hk.css)', projects: [projects[7]] },
  { id: 'w14', week: '第十四週', date: '5/27', description: 'DW-多媒新聞(news.html)', projects: [projects[8]] },
  { id: 'w15', week: '第十五、十六週', date: '6/3、6/10', description: 'DW-期末作業(final資料夾)', projects: [projects[9]] },
];

export default function App() {
  const [viewMode, setViewMode] = useState<'folder' | 'grid'>('folder');

  return (
    <div className="min-h-screen bg-[#0F111A] text-gray-300 font-sans selection:bg-[#B89020] selection:text-white relative flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0F111A]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold text-white tracking-wider">幽影櫻的作業區</h1>
        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex bg-[#1A1C23] border border-white/10 rounded-lg p-1">
            <button
              onClick={() => setViewMode('folder')}
              className={`flex items-center justify-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === 'folder'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Folder className="w-4 h-4" />
              <span className="hidden sm:inline">資料夾模式</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center justify-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">卡片模式</span>
            </button>
          </div>

          <a
            href="https://home.barian.moe"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">回到主頁</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full z-10">
        
        {viewMode === 'folder' ? (
          /* Folder Mode View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {folders.map((folder) => (
              <div 
                key={folder.id} 
                className="group relative flex flex-col bg-[#1A1C23] border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-[#B89020]/40 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
              >
                {/* Folder decorative tab */}
                <div className="absolute top-0 left-0 w-32 h-2 bg-gradient-to-r from-[#B89020] to-transparent opacity-80" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-[#B89020]/10 group-hover:border-[#B89020]/30 transition-all">
                    <Folder className="w-8 h-8 text-[#B89020] stroke-[1.5]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-wide">{folder.week}</h2>
                    <span className="text-xs font-mono tracking-wider text-gray-500">{folder.date}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {folder.description}
                </p>

                {/* Optional Project Links inside Folder */}
                {folder.projects && folder.projects.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
                    {folder.projects.map((project, idx) => (
                      <a 
                        key={idx}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-black/20 hover:bg-white/10 border border-white/5 hover:border-[#B89020]/30 transition-colors group/link"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          {React.isValidElement(project.icon) 
                            ? React.cloneElement(project.icon as React.ReactElement<any>, { className: 'w-4 h-4 text-[#B89020] shrink-0' }) 
                            : null}
                          <span className="text-sm font-medium text-gray-300 group-hover/link:text-white truncate">
                            {project.title}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/link:text-[#B89020] shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Grid Mode View (Original) */
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200 text-white font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>前往頁面</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 mt-auto border-t border-white/5 bg-[#0F111A]/50 backdrop-blur-sm flex justify-center items-center z-10 relative">
        <p className="text-gray-400 text-sm tracking-widest flex items-center gap-1">
          <a href="https://barian.moe" target="_blank" rel="noopener noreferrer" className="text-[#B89020] hover:text-[#d4af37] transition-colors font-medium">
            幽影櫻
          </a> 
          <span>製作</span>
        </p>
      </footer>
    </div>
  );
}
