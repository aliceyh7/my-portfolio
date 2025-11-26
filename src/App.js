import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Award,
  BookOpen,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  Link as LinkIcon,
  Code,
  Download,
  X,
  ScrollText,
  FileDown,
  Icon,
  Link2Icon,

} from 'lucide-react';
import { Image as ImageIcon } from "lucide-react";
import profilePic from './assets/Profile_Pic.jpg';
import metaLogo from './assets/logos/meta.png';
import adobeLogo from './assets/logos/adobe.png';
import ciccLogo from './assets/logos/cicc.png';
//import cvPdf from './assets/Yuhe_Hu_CV.pdf';

// Research Paper PDFs 
import vlmPaperPdf from "./assets/papers/IEEE.pdf";
import bpPresentationPdf from "./assets/papers/ACEP_Presentation.pdf";
import moePaperPdf from "./assets/papers/MoE.pdf";
import moeSlidesPdf from "./assets/papers/MoE_Presentation.pdf";
import abstractPaperPdf from "./assets/papers/NLP.pdf";
import ece661Pdf from "./assets/papers/ECE661.pdf";
import ece661SlidesPdf from "./assets/papers/ECE661_Presentation.pdf";

// Project Assets
import wordGamePaper from "./assets/projects/word_game_engine.pdf";
import wordGameSlides from "./assets/projects/word_game_engine_presentation.pdf";
import miniAmazonPaperPdf from "./assets/projects/mini_amazon.pdf";

// Poster Thumbnails
import poster1photo from "./assets/thumb/thumb_p1.jpg"
import poster2photo from "./assets/thumb/thumb_p2.PNG";
import poster3photo from "./assets/thumb/thumb_p3.png";
import bpPosterPhoto from "./assets/thumb/thumb_bp.JPG";

// Poster PDFs
import poster1 from "./assets/posters/Fall_2023.pdf";
import poster2 from "./assets/posters/Spring_2024.pdf";
import poster3 from "./assets/posters/Spring_2025.pdf";

//Leadership 
import witPhoto from "./assets/leadership/wit.png";
import taPhoto from "./assets/leadership/ta.png";

//Diagrams
import wordleDiagram from "./assets/diagrams/350-diagram.png";
import yiranchenDiagram from "./assets/diagrams/661-diagram.png";
import amazondiagram from "./assets/diagrams/amazon-diagram.png";
import amazondiagram2 from "./assets/diagrams/amazon-diagram2.png";
import bpdiagram from "./assets/diagrams/bp-diagram.png";
import lindiagram from "./assets/diagrams/lindiagram.png";
import lindiagram2 from "./assets/diagrams/lindiagram2.png";
import moediagram from "./assets/diagrams/moe-diagram.png";
import moed2 from "./assets/diagrams/moe-d2.png";
import moed3 from "./assets/diagrams/moe-d3.png";
import nlpdiagram from "./assets/diagrams/nlp-diagram.png";
import wordle from "./assets/diagrams/wordle.png";
import wordhunt from "./assets/diagrams/wordhunt.png";
import sbom from "./assets/diagrams/sbom.png";
import sbom2 from "./assets/diagrams/sbom2.png";

// --- Data ---
const portfolioData = {
  name: "Yuhe Hu",
  tagline: "Building Trustworthy Systems & Applied ML",
  bio: "Hi, I am a senior at Duke University double majoring in Electrical/Computer Engineering and Computer Science. My research interest lies at the intersection of cybersecurity, IoT, and applied machine learning. Please feel free to reach out to me at alice.yh7@outlook.com.",
  profileImage: profilePic,
  contact: {
    email: "yh353@duke.edu",
    linkedin: "https://linkedin.com/in/aliceh7",
    github: "https://github.com/aliceyh7",
    cv: "#", // Link to CV PDF
  },
  education: [
    {
      institution: "Duke University",
      location: "Durham, NC",
      dates: "Aug 2022 – Dec 2025",
      degrees: ["B.S.E. in Electrical & Computer Engineering", "B.S. in Computer Science"],
      highlights: [
        "Double Major, Electrical & Computer Engineering and Computer Science",
        "Dean’s List with Distinction (Fall 2022, Fall 2023, Spring 2024, Fall 2025)",
        "Relevant Coursework: Advanced Machine Learning, Applied Cryptography, Embedded Systems Design, Computer Vision, Algorithms & Data Structures, Operating Systems",
      ],
    },
  ],
  experience: [
    {
      company: "Meta",
      logo:  metaLogo,
      role: "Software Engineer Intern",
      productName: "Product Infrastructure",
      productLink: "https://www.meta.com/",
      date: "May - Aug 2025",
      tech: ["C++", "Python", "GraphQL", "Hack"],
      points: [
        "Architected the Trusted Authentication Factor (TAF) service in C++/Hack to secure high-value transactions.",
        "Engineered risk-based device posture checks, reducing fraudulent authentication attempts by **15%**.",
        "Achieved a 'Greatly Exceeds' performance rating (top 10% of interns) for exceptional delivery and impact."
      ]
    },
    {
      company: "Adobe",
      logo: adobeLogo,
      role: "Software Engineer Intern",
      team: "Acrobat & Reader",
      productName: "Machine Learning",
      productLink: "https://www.adobe.com/acrobat",
      date: "May - Aug 2024",
      tech: ["Java Spring Boot", "Tensorflow", "Docker", "Kubernetes", "ML"],
      points: [
        "Spearheaded the development of an ML-powered document verification system serving **400M+** active users.",
        "Designed and deployed scalable RESTful APIs, containerized via Docker/Kubernetes.",
        "Optimized backend runtime efficiency by **30%** through strategic Redis caching."
      ]
    },
    {
      company: "CICC",
      logo: ciccLogo,
      role: "Operations & Analytics Intern",
      team: "Global Markets",
      productName: "Global Markets",
      productLink: "https://www.cicc.com/",
      date: "Summer 2023",
      tech: ["Python", "SQL", "Data Analytics"],
      points: [
        "Automated complex position reconciliation pipelines using Python, reducing manual error rates by **95%**.",
        "Built dynamic exposure reporting dashboards to provide real-time risk analysis for portfolio managers."
      ]
    },
  ],
  researchProjects: [
    {
      type: "Journal Article",
      title:
        "Probing the Augmented Reality Scene Analysis Capabilities of Large Multimodal Models",
      acceptance: "IEEE Internet Computing (2025)",
      isPublicationAccepted: true,
      description:
        "We evaluate commercial Large Multimodal Models (LMMs) for automated AR quality assessment using DiverseAR+, a 1,405-scene dataset. We also propose a hybrid cloud–edge system for scalable, real-time evaluation under varying network conditions.",
      tags: ["AR/VR", "Multimodal", "Evaluation", "Edge/Cloud", "GPT-4o", "Vision-Language Models"],
      links: {
        paper: vlmPaperPdf,
      },
      color: "bg-indigo-600",
      diagrams: [
        { src: lindiagram, alt: "Pipeline diagram" },
        { src: lindiagram2, alt: "System architecture diagram" },
        { src: poster3photo, alt: "Poster thumbnail" },
      ]
    },
    {
      type: "Publication",
      title: "A Computational Model for Automated Blood Pressure Control in Critical Care",
      acceptance:
        "Annals of Emergency Medicine (2025) • ACEP (2025) • SAEM (2024)",
      isPublicationAccepted: true,
      description:
        "We built a computational simulation model for closed-loop blood pressure control in critical care, aiming for stable automated BP regulation. The work is accepted for publication in Annals of Emergency Medicine (2025) and was accepted/presented at ACEP 2025 and SAEM 2024.",
      tags: ["Healthcare", "Control", "Simulation", "Critical Care"],
      links: {
        github: "https://github.com/aliceyh7/Autonomous-BP-for-Hypertensive-Crises",
        paper: "https://www.annemergmed.com/current",
        poster: bpPresentationPdf,
      },
      color: "bg-rose-600",
      diagrams: [ { src: bpdiagram, alt: "System architecture diagram" } , { src: bpPosterPhoto, alt: "Poster thumbnail" } ],
    },
    {
      type: "Course Project",
      title: "Quantized Backdoor Attacks on Mixture of Experts Models",
      acceptance: "ECE590: AI Security & Privacy",
      description:
        "We design a quantization-enabled backdoor attack for MoE models where malicious behavior is dormant in FP32 but activates after low-bit quantization (e.g., INT8/INT4). We study how quantization scope (experts vs. gate vs. whole model) affects clean accuracy and attack persistence.",
      tags: ["Security", "MoE", "Quantization", "Adversarial ML"],
      links: { 
        github: "https://github.com/linrally/moe-backdoor", 
        paper: moePaperPdf, 
        slides: moeSlidesPdf 
      },
      color: "bg-emerald-600",
      diagrams: [ { src: moediagram, alt: "Attack overview diagram" }, {src: moed2, alt: "methodology A"},  {src: moed3, alt: "methodology B"}],
    },

    {
      type: "Course Project",
      title: "Predicting Research Domains from Titles and Abstracts Using ArXiv Data",
      acceptance: "ECE684: Natural Language Processing",
      description:
        "We classify ArXiv papers into CS subfields from titles and abstracts, comparing Multinomial Naive Bayes, Doc2Vec+MLP, and an LSTM model. The project highlights trade-offs between lightweight baselines and neural approaches for large-scale paper categorization.",
      tags: ["NLP", "Text Classification", "ArXiv", "ML"],
      links: { 
        paper: abstractPaperPdf, 
        github: "https://github.com/aliceyh7/ECE684-Research-Abstract-Classifier" 
      },
      color: "bg-blue-600",
      diagrams: [ { src: nlpdiagram, alt: "Model architecture diagram" } ],
    },

    {
      type: "Course Project",
      title: "Adaptive Model Optimization for Audio Classification on Edge Devices",
      acceptance: "ECE661: Deep Neural Networks",
      description:
        "We optimize a ResNet-152 music-genre classifier (GTZAN) for Raspberry Pi deployment using FP16/INT8 and dynamic quantization. The optimized variants reduce latency and memory use with minimal accuracy loss.",
      tags: ["Edge ML", "Quantization", "Audio", "Raspberry Pi"],
      links: { 
        paper: ece661Pdf, 
        slides: ece661SlidesPdf, 
        github: "https://github.com/aliceyh7/ece661_final_project"
      },
      color: "bg-slate-700",
      diagrams: [ { src: yiranchenDiagram, alt: "Optimization pipeline diagram" } ],
    },
  ],

  softwareProjects: [
    {
      type: "Hardware / FPGA",
      title: "MIPS Pipelined Processor & Word Game Engine",
      description:
        "Built and tested a 5-stage pipelined MIPS-style processor and deployed it on FPGA. On top of our CPU, we implemented a word game engine and shipped two games—Wordle and Word Hunt. The entire game logic runs as MIPS assembly on our processor, with keyboard input and VGA output via memory-mapped I/O (MMIO). Emphasis was on low-level systems: datapath/control, pipelining behavior, and real-time I/O handled at the hardware/software boundary.",
      tags: ["FPGA", "Verilog", "MIPS Assembly", "Pipelining", "MMIO", "VGA", "Keyboard I/O"],
      links: {
        slides: wordGameSlides,
        github: "https://github.com/ben594/word-game-engine",
        paper: wordGamePaper, 
      },
      color: "bg-slate-900",
      diagrams: [ {
        src: wordle, alt: "Word Game Engine Architecture"
      }, 
      {
        src: wordhunt, alt: "Word Game Engine Architecture"
      }, 
      { src: wordleDiagram, alt: "MIPS processor and game engine architecture" } ],
    },

    {
      type: "Security / Supply Chain",
      title: "SBOM & Software Supply-Chain Security (Policy → Engineering)",
      description:
        "Explored how Software Bills of Materials (SBOMs) fit into modern software supply-chain defense. We analyzed common risk points (dependencies, provenance, build integrity), then proposed a practical workflow for generating and consuming SBOMs during development and release. Delivered a final presentation and demo narrative focused on real deployment constraints (teams, tooling, CI integration, and usability).",
      tags: ["SBOM", "Supply Chain Security", "DevSecOps", "Dependencies", "CI/CD"],
      links: {
        video: "https://www.youtube.com/watch?v=6gWMghLFA-Y&t=3s",
      },
      diagrams: [
        { src: sbom, alt: "SBOM generation/consumption pipeline" },
        { src: sbom2, alt: "SBOM generation/consumption pipeline" },
      ],
      color: "bg-indigo-700",
    },

    {
      type: "Full-Stack Systems",
      title: "MiniAmazon — Marketplace for Duke Students",
      description:
        "Built a mini e-commerce platform tailored to Duke students: product browsing/search, listings, carts, purchasing flows, and order history. The project emphasized end-to-end system thinking—data modeling, transactional workflows, and reliable APIs—plus a polished final demo that showcased a realistic marketplace experience.",
      tags: ["Full-Stack", "SQL", "REST APIs", "Transactions", "Auth", "Web App"],
      links: {
        github: "https://github.com/Starfarmer2/316MiniAmazon/blob/main/README_MS4.md",
        paper: miniAmazonPaperPdf, 
        demo: "https://www.youtube.com/watch?v=cWb1-RL9Uj4&feature=youtu.be",  
      },
      diagrams: [
        { src: "https://placehold.co/900x520/F0FDF4/166534?text=System+Architecture", alt: "System architecture diagram" },
      ],
      color: "bg-emerald-700",
      diagrams: [ { src: amazondiagram, alt: "System architecture diagram"},
        { src: amazondiagram2, alt: "Database schema diagram"}
      ]  
    },
  ],


  publications: [
    {
        title: "Probing the Augmented Reality Scene Analysis Capabilities of Large Multimodal Models",
        venue: "IEEE Internet Computing, 2025",
        authors: "Duan, L., Hu, Y., et al.",
        link: "#", 
        type: "Peer-Reviewed Publication"
    },
    {
        title: "A Computational Model for Automated Blood Pressure Control in Critical Care",
        venue: "Annals of Emergency Medicine, 2025",
        authors: "Hu, Y., Broder, J.S., et al.",
        link: "#", 
        type: "Peer-Reviewed Publication"
    }
  ],
  posters: [
    {
        title: "Closed-Loop Blood Pressure Control in Critical Care (Placeholder)",
        date: "Fall 2025",
        file: bpPresentationPdf,
        thumb: bpPosterPhoto,
        desc: "A computational control model for autonomous drug delivery to stabilize blood pressure in hypertensive crises.",
        presenting_photo: bpPosterPhoto,
    },
    {
        title: "Vision-Language Model-Based Evaluation of Shadows & Lighting in AR Scenes",
        date: "Spring 2025",
        file: poster3,
        thumb: poster3photo,
        desc: "Evaluating the perceptual realism of AR scenes using GPT-4o, compared to traditional CNN methods.",
        presenting_photo: poster3photo,
    },
    {
        title: "IoT Camera-Assisted Localization for AR in Simulated and Real-World Environments",
        date: "Spring 2024",
        file: poster2,
        thumb: poster2photo,
        desc: "Improving AR tracking precision by integrating third-view IoT camera data via YOLOv5.",
        presenting_photo: poster2photo,
    },
    {
        title: "Using Synthetic Data & Simulation to Enhance Object Detection Algorithms in Indoor Environments",
        date: "Fall 2023",
        file: poster1,
        thumb: poster1photo,
        desc: "Leveraging Unity and Meta Quest 3 to generate high-fidelity synthetic datasets for robust object detection.",
        presenting_photo: poster1photo,

    },
  ],
  leadership: [
    {
      role: "Teaching Assistant (CS & ECE)",
      org: "Duke University",
      desc:
        "Teaching Assistant for 6 semesters (out of 7) at Duke. Supported students through office hours, recitations, and grading across core CS/ECE courses.",
      details: [
        "Design & Analysis of Algorithms (Fall 2024, Spring 2025)",
        "Signals & Systems (Spring 2023, Fall 2024)",
        "Semiconductors & Microelectronics (Fall 2025)",
        "Data Structures & Algorithms (Spring 2022, Fall 2023)",
      ],
      photo: taPhoto,
    },
    {
      role: "President",
      org: "Duke Women in Technology",
      desc:
        "Led Duke’s Women in Tech community by organizing mentorship, workshops, and recruiting events, and partnering with sponsors to expand opportunities for members.",
      instagram: "https://www.instagram.com/dukewit/",
      photo: witPhoto,
    }
  ],
  awards: {
    universityHonorsAndScholarships: [
      "Dean’s List with Distinction, Duke University",
      "Duke Technology Scholar – Women in Technology Scholarship (Spring 2024, Spring 2025)",
      "Dean’s Merit Award, University of Toronto – $10,000 scholarship for secondary school academic achievement",
      "President’s Scholarship of Distinction, University of Waterloo – $5,000 entrance merit-based scholarship",
      "Alumni Women in Technology Entrance Scholarship, University of Waterloo – $5,000 entrance award recognizing academic merit and leadership in technology",
    ],
    nationalAndInternational: [
      "Top 100 in North America – CHEM13 News Chemistry Competition (University of Waterloo)",
      "Top 2% Nationwide – Canadian Senior Mathematics Contest (CEMC, 18,000 participants)",
      "Top 3% Nationwide – Euclid Mathematics Contest (CEMC, 20,000 participants)",
      "AP National Scholar with Distinction – Received score of 4 or 5 on fifteen AP exams",
    ],
  },
};

// --- Sub-components ---

const Tag = ({ text }) => (
  <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200">
    {text}
  </span>
);

const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
  >
    {children}
  </a>
);

const ProjectLinkButton = ({ href, icon: Icon, label, color }) => {
    if (!href || href === '#') return null;
    const isCode = label === 'Code';
    const linkClasses = `flex items-center text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
        isCode 
        ? 'bg-slate-900 text-white hover:bg-slate-700' 
        : `bg-indigo-50 text-indigo-700 hover:bg-indigo-100`
    }`;
    
    return (
        <a href={href} target="_blank" rel="noreferrer" className={linkClasses}>
            <Icon className="w-4 h-4 mr-1.5" /> 
            {label}
        </a>
    );
};


const ProjectCard = ({ project, onOpenDiagrams }) => (
  <div className="min-w-[360px] md:min-w-[440px] min-h-[520px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full snap-start group relative">
    <div className={`h-2 ${project.color} w-full`} />
    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-slate-100 text-slate-600">
          {project.type}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {project.title}
      </h3>

      {/* Acceptance line */}
      {project.acceptance && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.isPublicationAccepted && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              Accepted for publication
            </span>
          )}
          <span className="text-xs text-slate-500">{project.acceptance}</span>
        </div>
      )}

      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* ✅ Small diagrams BELOW description (no big button) */}
      {project.diagrams?.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
            <ImageIcon className="w-4 h-4" />
            Diagrams
          </div>

          <div className="grid grid-cols-3 gap-2">
            {project.diagrams.slice(0, 6).map((d, i) => (
              <button
                type="button"
                key={i}
                onClick={() => onOpenDiagrams?.(project)} // opens your modal (optional)
                className="group relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-sm transition"
                title={d.alt || "Diagram"}
              >
                <img
                  src={d.src}
                  alt={d.alt || `Diagram ${i + 1}`}
                  className="w-full h-20 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* optional: show "+N more" */}
          {project.diagrams.length > 6 && (
            <p className="mt-2 text-[11px] text-slate-400">
              +{project.diagrams.length - 6} more
            </p>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto border-t border-slate-100 pt-4">
        <ProjectLinkButton href={project.links?.paper || project.links?.pdf} icon={FileText} label="Report" />
        <ProjectLinkButton href={project.links?.slides} icon={ScrollText} label="Slides" />
        <ProjectLinkButton href={project.links?.demo} icon={ArrowUpRight} label="Demo" />
        <ProjectLinkButton href={project.links?.video} icon={LinkIcon} label="Video" />
        <ProjectLinkButton href={project.links?.github || project.links?.code} icon={Code} label="Code" />
      </div>
    </div>
  </div>
);

// --- Modal Component ---
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-slate-900 bg-opacity-80 z-[100] flex items-center justify-center p-4 transition-opacity"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl w-full h-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="flex justify-end p-3">
                    <button 
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex-grow overflow-auto p-4 md:p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};


// --- Main App ---

const App = () => {
  const scrollContainerRef = useRef(null);
  const softwareScrollRef = useRef(null);

  const scrollByRef = (ref, direction) => {
    if (!ref?.current) return;
    const scrollAmount = 420; // tuned for your larger cards
    ref.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectModalProject, setProjectModalProject] = useState(null);

  const openProjectModal = (project) => {
    setProjectModalProject(project);
    setProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setProjectModalOpen(false);
    setProjectModalProject(null);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 420;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  const openPosterModal = (poster) => {
      setModalContent(poster);
      setModalOpen(true);
  };

  const closePosterModal = () => {
      setModalOpen(false);
      setModalContent(null);
  };

  // Utility to render PDF or placeholder in modal
  const renderModalContent = (poster) => {
      if (poster.file && poster.file !== '#') {
          return (
              <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{poster.title}</h3>
                  <p className="text-slate-600 mb-4">{poster.desc}</p>
                  <iframe 
                      src={poster.file} 
                      title={poster.title} 
                      className="w-full flex-grow border-0 rounded-lg shadow-inner min-h-[50vh]"
                      style={{ minHeight: '600px' }}
                  />
                  <a 
                      href={poster.file} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                      <Download className="w-4 h-4 mr-2" /> Download Poster ({poster.date})
                  </a>
              </div>
          );
      }
      return (
          <div className="p-10 text-center bg-slate-50 rounded-lg">
              <ScrollText className="w-16 h-16 mx-auto text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">Poster Unavailable</h3>
              <p className="text-slate-600 mt-2">The PDF file for "{poster.title}" is not currently linked. This is a placeholder.</p>
          </div>
      );
  };

  const renderProjectModalContent = (project) => {
    const diagrams = project?.diagrams || [];
    return (
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
        {project.type && <p className="text-sm text-indigo-600 font-medium mt-1">{project.type}</p>}
        {project.description && <p className="text-slate-600 mt-4">{project.description}</p>}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {diagrams.map((d, i) => (
            <a
              key={i}
              href={d.src}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition"
              title="Open image in new tab"
            >
              <img
                src={d.src}
                alt={d.alt || `Diagram ${i + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-3 text-sm text-slate-600">
                {d.alt || `Diagram ${i + 1}`}
              </div>
            </a>
          ))}
        </div>

        {diagrams.length === 0 && (
          <div className="mt-8 p-8 text-center rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">No diagrams added yet (placeholder).</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-slate-900">YH.</span>
          <div className="hidden md:flex gap-8">
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#experience">Industry</NavLink>
            <NavLink href="#research">Research Projects</NavLink>
            <NavLink href="#posters">Poster Presentations</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#extra">Leadership</NavLink>
            <NavLink href="#awards">Awards</NavLink>
          </div>
          <div className="flex gap-3">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="text-slate-500 hover:text-indigo-600"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="text-slate-500 hover:text-indigo-600"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.contact.cv}
              target="_blank"
              rel="noreferrer"
              title="CV"
              className="text-slate-500 hover:text-indigo-600"
            >
              <FileDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-28 px-6 max-w-6xl mx-auto space-y-32">
        
        {/* --- Hero Section --- */}
        <section id="about" className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Alice</span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                {portfolioData.tagline}
              </p>
              <p className="text-slate-600 max-w-xl leading-relaxed">
                {portfolioData.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <LinkIcon className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <LinkIcon className="w-5 h-5" />
                GitHub
              </a>

              <a
                href={portfolioData.contact.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <LinkIcon className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
             <div className="absolute inset-0 bg-indigo-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
             <img 
               src={portfolioData.profileImage} 
               alt="Yuhe Hu" 
               className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
             />
          </div>
        </section>

        {/* --- Education (Compact) --- */}
        <section id="education" className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          </div>

          {portfolioData.education.map((edu) => (
            <div key={edu.institution} className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                  <p className="text-xs text-slate-500">{edu.location}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{edu.dates}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {edu.degrees.map((d) => (
                  <span
                    key={d}
                    className="px-2 py-0.5 text-[11px] font-semibold bg-indigo-100 text-indigo-700 rounded border border-indigo-200"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <ul className="mt-3 space-y-2">
                {edu.highlights.map((h) => (
                  <li key={h} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* --- Research Projects Gallery --- */}
        <section id="research">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Research Projects</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Scroll to explore <span className="font-mono">→</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll('left')} className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scroll('right')} className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory hide-scrollbar -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {portfolioData.researchProjects.map((item, idx) => (
              <ProjectCard key={idx} project={item} onOpenDiagrams={openProjectModal} />
            ))}
          </div>
        </section>

        {/* --- Industry Experience --- */}
        <section id="experience">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
               <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Industry Experience</h2>
          </div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 group">
                {/* Logo Column */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm p-2 flex items-center justify-center overflow-hidden">
                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            {exp.company} 
                          </h3>
                          {exp.productLink && (
                           <a href={exp.productLink} target="_blank" rel="noreferrer" title={`View ${exp.productName}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
                             <ArrowUpRight className="w-4 h-4" />
                           </a>
                          )}
                      </div>
                      <span className="text-sm font-mono text-slate-500 whitespace-nowrap">{exp.date}</span>
                    </div>
                    
                    <p className="text-indigo-600 font-medium mb-3">{exp.role} <span className="text-slate-400 font-normal">({exp.productName})</span></p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded border border-indigo-200">{t}</span>
                        ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-600 text-sm leading-relaxed flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Software Projects Gallery --- */}
        <section id="software">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Software Projects</h2>
                <p className="text-slate-500 text-sm mt-1">
                  Systems, security, and low-level builds <span className="font-mono">→</span>
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollByRef(softwareScrollRef, "left")}
                className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByRef(softwareScrollRef, "right")}
                className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={softwareScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory hide-scrollbar -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolioData.softwareProjects.map((item, idx) => (
              <ProjectCard key={idx} project={item} onOpenDiagrams={openProjectModal} />
            ))}
          </div>
        </section>
        
        {/* --- Publications (Horizontal) --- */}
        <section id="publications">
           <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Publications</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.publications.map((pub, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{pub.type}</span>
                                <FileText className="w-4 h-4 text-slate-400" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 leading-snug">{pub.title}</h3>
                            <p className="text-sm text-slate-600 italic mb-4">Authors: {pub.authors}</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                             <span className="text-xs font-medium bg-slate-100 px-2 py-1 rounded text-slate-600">{pub.venue}</span>
                             <a href={pub.link} className="text-slate-400 hover:text-indigo-600" title="View Article"><ArrowUpRight className="w-5 h-5" /></a>
                        </div>
                    </div>
                ))}
           </div>
        </section>
        
        {/* --- Poster Gallery --- */}
        <section id="posters">
           <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <ScrollText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Poster Gallery</h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {portfolioData.posters.map((poster, idx) => (
                   <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group">
                       <button onClick={() => openPosterModal(poster)} className="w-full h-40 overflow-hidden relative block">
                            <img src={poster.thumb} alt={`Thumbnail for ${poster.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold text-sm bg-indigo-600 px-3 py-1.5 rounded-full">View Poster</span>
                            </div>
                       </button>
                       <div className="p-4">
                           <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">{poster.title}</h3>
                           <p className="text-xs text-slate-500 mb-3">{poster.desc.substring(0, 50)}...</p>
                           <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{poster.date}</span>
                       </div>
                   </div>
               ))}
           </div>
        </section>

        {/* --- Leadership / Extra --- */}
        <section id="extra">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Leadership & Teaching</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.leadership.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                        <img 
                            src={item.photo} 
                            alt={`${item.role} photo`} 
                            className="w-full h-48 object-cover object-center bg-indigo-500/10"
                        />
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-1">{item.role}</h3>
                              <p className="text-sm text-indigo-600 font-medium mb-3">{item.org}</p>
                            </div>

                            {/* Prominent Instagram link for WiT */}
                            {item.instagram && (
                              <a
                                href={item.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                                title="Duke Women in Technology Instagram"
                              >
                                <LinkIcon className="w-4 h-4" />
                                @dukewit
                              </a>
                            )}
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>

                          {/* TA course list */}
                          {item.details?.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {item.details.map((d) => (
                                <li key={d} className="text-slate-600 text-sm leading-relaxed flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Photo placeholder note (optional) */}
                          <p className="mt-4 text-xs text-slate-400">
                            Photos placeholder — will be replaced with real images.
                          </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>

        {/* --- Awards --- */}
        <section id="awards" className="max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">University Honors & Scholarships</h3>
              <ul className="space-y-2">
                {portfolioData.awards.universityHonorsAndScholarships.map((a) => (
                  <li key={a} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">National & International</h3>
              <ul className="space-y-2">
                {portfolioData.awards.nationalAndInternational.map((a) => (
                  <li key={a} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="border-t border-slate-200 pt-12 pb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <h3 className="font-bold text-slate-900">Yuhe Hu</h3>
             <p className="text-slate-500 text-sm">Personal Website</p>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
        </footer>

      </main>
      
      {/* Poster Modal */}
      <Modal isOpen={modalOpen} onClose={closePosterModal}>
          {modalContent && renderModalContent(modalContent)}
      </Modal>

      {/* Project Diagrams Modal */}
      <Modal isOpen={projectModalOpen} onClose={closeProjectModal}>
        {projectModalProject && renderProjectModalContent(projectModalProject)}
      </Modal>

      <style>{`
        /* Hide scrollbar for gallery section */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;