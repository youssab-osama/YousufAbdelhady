import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Image Segmentation",
    date: "May 2025",
    tags: ["Algorithms", "C++", "Graphs/MST"],
    description: "Implemented graph-based segmentation using disjoint set union (union-find) and Kruskal's MST for region merging with 8-connected neighborhoods. Optimized edge processing with a counting sort algorithm for O(n) edge weight sorting.",
    github: "https://github.com"
  },
  {
    title: "Mini-Wasalny",
    date: "May 2025",
    tags: ["Qt", "C++", "Visualization"],
    description: "Built a Qt desktop application for visualizing graph algorithms (DFS, BFS, Dijkstra, Floyd-Warshall). Implemented interactive graph manipulation with node dragging and real-time color highlighting.",
    github: "https://github.com"
  },
  {
    title: "Watch-It",
    date: "Nov 2024",
    tags: ["Java", "JavaFX", "Dynamic Programming"],
    description: "Developed a full-stack Java application simulating streaming platform functionality. Implemented a search system using dynamic programming for efficient lookup and designed a responsive JavaFX dashboard.",
    github: "https://github.com"
  }
];

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-[#333333] bg-[#1a1a1a] p-8 overflow-hidden hover:border-primary transition-colors duration-300 rounded-lg"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E")'
      }}
    >
      <div className="absolute inset-0 border border-transparent group-hover:border-primary group-hover:animate-glitch pointer-events-none transition-colors" />
      
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-display font-semibold text-2xl text-on-surface">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest bg-surface-bright px-2 py-1">
          {project.date}
        </span>
      </div>
      
      <p className="font-sans text-on-surface-variant text-base mb-8 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      
      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
        <span className="w-8 h-[1px] bg-surface-bright group-hover:bg-primary transition-colors" />
        View Source
      </a>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto w-full px-6">
      <div className="grid grid-cols-12 gap-6 relative mb-16">
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <h2 className="font-display font-semibold text-5xl tracking-[-0.02em] text-on-surface mb-4 uppercase">
            FEATURED<br /><span className="text-surface-bright">WORK.</span>
          </h2>
          <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest border-l border-surface-bright pl-4">
            Engineering & Infrastructure
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
