import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub as Github } from 'react-icons/fa';

const projectsData = [
  {
    title: "Image Segmentation",
    date: "May 2025",
    tags: ["Algorithms", "C++", "Graphs/MST"],
    description: "Implemented graph-based segmentation using disjoint set union (union-find) and Kruskal's MST for region merging with 8-connected neighborhoods. Optimized edge processing with a counting sort algorithm for O(n) edge weight sorting.",
    github: "https://github.com/David-Magdy/Image-Segmentation",
    img: "/Image-Segmentation2.png"
  },
  {
    title: "Mini-Wasalny",
    date: "May 2025",
    tags: ["Qt", "C++", "Visualization"],
    description: "Built a Qt desktop application for visualizing graph algorithms (DFS, BFS, Dijkstra, Floyd-Warshall). Implemented interactive graph manipulation with node dragging and real-time color highlighting.",
    github: "https://github.com/Peter-Refaat/Mini-Wasalny",
    img: "/Mini-Wasalny.png"
  },
  {
    title: "Watch-It",
    date: "Nov 2024",
    tags: ["Java", "JavaFX", "Dynamic Programming"],
    description: "Developed a full-stack Java application simulating streaming platform functionality. Implemented a search system using dynamic programming for efficient lookup and designed a responsive dashboard.",
    github: "https://github.com/youssab-osama/Watch_IT",
    img: "/Watch-it.png"
  }
];

const ProjectCard: React.FC<{ project: typeof projectsData[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full border border-surface-bright bg-surface-container p-6 overflow-hidden rounded-xl shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary group-hover:opacity-50 pointer-events-none rounded-xl transition-all duration-300 pointer-events-none" />

      {/* Mockup Container */}
      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-[#0e0e0e] border border-surface-highest group-hover:border-primary/50 transition-colors">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-contain p-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-80 pointer-events-none" />
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="font-display font-semibold text-2xl text-on-surface group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest bg-background border border-surface-bright px-2 py-1 rounded">
          {project.date}
        </span>
      </div>

      <p className="font-sans text-on-surface-variant text-sm md:text-base mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Button pushed to bottom to force equal heights */}
      <div className="mt-auto pt-4 border-t border-surface-bright">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="group/btn relative w-full flex items-center justify-center gap-3 bg-surface-bright text-on-surface py-3 px-4 font-mono text-sm tracking-widest font-bold uppercase transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover/btn:w-full" />
          <Github size={18} className="relative z-10 group-hover/btn:text-on-primary transition-colors duration-300" />
          <span className="relative z-10 group-hover/btn:text-on-primary transition-colors duration-300">View Source</span>
        </a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full px-6 py-20 relative bg-surface-container-lowest">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-on-surface mb-4">
            FEATURED<br /><span className="text-secondary glow-hover">WORK.</span>
          </h2>
          <p className="font-mono text-sm text-on-surface-variant uppercase tracking-[0.1em] border-l-2 border-secondary pl-4">
            Engineering & Infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
