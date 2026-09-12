import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { X } from 'lucide-react';

import profilePic from './assets/Profile_Pic.jpg';
import metaLogo from './assets/logos/meta.png';
import adobeLogo from './assets/logos/adobe.png';
import netflixLogo from './assets/logos/netflix.svg';

// Research Paper PDFs
import cgadPdf from "./assets/papers/CGAD.pdf";
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
import poster1photo from "./assets/thumb/thumb_p1.jpg";
import poster2photo from "./assets/thumb/thumb_p2.PNG";
import poster3photo from "./assets/thumb/thumb_p3.png";
import bpPosterPhoto from "./assets/thumb/thumb_bp.JPG";

// Poster PDFs
import poster1 from "./assets/posters/Fall_2023.pdf";
import poster2 from "./assets/posters/Spring_2024.pdf";
import poster3 from "./assets/posters/Spring_2025.pdf";

// Leadership
import witPhoto from "./assets/leadership/wit.png";
import taPhoto from "./assets/leadership/ta.png";

// Diagrams
import cgadFramework from "./assets/diagrams/cgad-framework.png";
import cgadResults from "./assets/diagrams/cgad-results.png";
import cgadScatter from "./assets/diagrams/cgad-scatter.png";
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
const SCHOLAR_PROFILE = "https://scholar.google.com/citations?hl=en&user=qB1bTbEAAAAJ";
const SCHOLAR_CGAD =
  "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qB1bTbEAAAAJ&citation_for_view=qB1bTbEAAAAJ:u-x6o8ySG0sC";

const portfolioData = {
  name: "Alice Hu",
  bio: "I'm an ML Research Engineer at Netflix working on recommendation and personalization systems, focused on scaling retrieval and ranking models and optimizing them for GPU training and inference. My background spans applied ML, security, and systems.",
  profileImage: profilePic,
  contact: {
    email: "alice.yh7@outlook.com",
    linkedin: "https://linkedin.com/in/aliceh7",
    github: "https://github.com/aliceyh7",
    scholar: SCHOLAR_PROFILE,
    cv: "#",
  },

  experience: [
    {
      company: "Netflix",
      logo: netflixLogo,
      role: "ML Research Engineer",
      team: "Recommendations & Personalization",
      link: "https://research.netflix.com/",
      tech: ["PyTorch", "CUDA", "Triton", "Distributed Training", "Retrieval", "Ranking"],
      points: [
        "Scale retrieval and ranking models for Netflix's recommendation and personalization systems, studying how model capacity and data scale translate into member-facing quality.",
        "Optimize GPU training and inference for large-scale recommenders (kernel efficiency, memory footprint, and throughput) to make larger models practical in production.",
      ],
    },
    {
      company: "Meta",
      logo: metaLogo,
      role: "Software Engineer",
      team: "Full Time",
      link: "https://www.meta.com/",
      tech: ["Python", "Reinforcement Learning", "Evaluation", "Coding Models"],
      points: [
        "RL training environments and eval harnesses used to train Meta's coding models.",
      ],
    },
    {
      company: "Adobe",
      logo: adobeLogo,
      role: "Software Engineer",
      team: "Acrobat Sign",
      link: "https://www.adobe.com/sign",
      points: [
        "Credential and identity verification services for Adobe's e-signature platform.",
      ],
    },
  ],

  researchProjects: [
    {
      type: "Research Report",
      title: "Counterfactual Group-Aware Debiasing for Fair Ad Ranking under Exposure Confounding",
      venue: "Research Report, 2026",
      description:
        "CGAD is a two-layer framework for learning to rank from biased click feedback: it first estimates group-conditioned examination propensities, then trains the ranker with group-aware counterfactual risk minimization and a fairness regularizer. On Criteo and Avazu it keeps ranking accuracy competitive while reducing cross-group exposure disparity.",
      tags: ["Learning to Rank", "Counterfactual", "Fairness", "Computational Advertising"],
      links: { paper: cgadPdf, scholar: SCHOLAR_CGAD },
      diagrams: [
        { src: cgadFramework, alt: "Overview of the CGAD framework" },
        { src: cgadResults, alt: "NDCG@10 and exposure fairness gap vs. position bias strength" },
        { src: cgadScatter, alt: "Accuracy vs. fairness trade-off across configurations" },
      ],
    },
    {
      type: "Journal Article",
      title: "Probing the Augmented Reality Scene Analysis Capabilities of Large Multimodal Models",
      venue: "IEEE Internet Computing, 2025",
      description:
        "We evaluate commercial Large Multimodal Models (LMMs) for automated AR quality assessment using DiverseAR+, a 1,405-scene dataset, and propose a hybrid cloud–edge system for scalable, real-time evaluation under varying network conditions.",
      tags: ["AR/VR", "Multimodal", "Evaluation", "Edge/Cloud", "Vision-Language Models"],
      links: { paper: vlmPaperPdf },
      diagrams: [
        { src: lindiagram, alt: "Pipeline diagram" },
        { src: lindiagram2, alt: "System architecture diagram" },
        { src: poster3photo, alt: "Poster thumbnail" },
      ],
    },
    {
      type: "Publication",
      title: "A Computational Model for Automated Blood Pressure Control in Critical Care",
      venue: "Annals of Emergency Medicine, 2025 · ACEP 2025 · SAEM 2024",
      description:
        "A computational simulation model for closed-loop blood pressure control in critical care, aiming for stable automated BP regulation. Accepted for publication in Annals of Emergency Medicine and presented at ACEP 2025 and SAEM 2024.",
      tags: ["Healthcare", "Control", "Simulation", "Critical Care"],
      links: {
        github: "https://github.com/aliceyh7/Autonomous-BP-for-Hypertensive-Crises",
        paper: "https://www.annemergmed.com/current",
        poster: bpPresentationPdf,
      },
      diagrams: [
        { src: bpdiagram, alt: "System architecture diagram" },
        { src: bpPosterPhoto, alt: "Poster thumbnail" },
      ],
    },
    {
      type: "Course Project",
      title: "Quantized Backdoor Attacks on Mixture of Experts Models",
      venue: "ECE590: AI Security & Privacy",
      description:
        "A quantization-enabled backdoor attack for MoE models where malicious behavior is dormant in FP32 but activates after low-bit quantization (INT8/INT4). We study how quantization scope (experts vs. gate vs. whole model) affects clean accuracy and attack persistence.",
      tags: ["Security", "MoE", "Quantization", "Adversarial ML"],
      links: { github: "https://github.com/linrally/moe-backdoor", paper: moePaperPdf, slides: moeSlidesPdf },
      diagrams: [
        { src: moediagram, alt: "Attack overview diagram" },
        { src: moed2, alt: "Methodology A" },
        { src: moed3, alt: "Methodology B" },
      ],
    },
    {
      type: "Course Project",
      title: "Predicting Research Domains from Titles and Abstracts Using ArXiv Data",
      venue: "ECE684: Natural Language Processing",
      description:
        "Classifying ArXiv papers into CS subfields from titles and abstracts, comparing Multinomial Naive Bayes, Doc2Vec+MLP, and an LSTM model, with a focus on the trade-offs between lightweight baselines and neural approaches.",
      tags: ["NLP", "Text Classification", "ArXiv"],
      links: { paper: abstractPaperPdf, github: "https://github.com/aliceyh7/ECE684-Research-Abstract-Classifier" },
      diagrams: [{ src: nlpdiagram, alt: "Model architecture diagram" }],
    },
    {
      type: "Course Project",
      title: "Adaptive Model Optimization for Audio Classification on Edge Devices",
      venue: "ECE661: Deep Neural Networks",
      description:
        "Optimizing a ResNet-152 music-genre classifier (GTZAN) for Raspberry Pi deployment using FP16/INT8 and dynamic quantization, reducing latency and memory use with minimal accuracy loss.",
      tags: ["Edge ML", "Quantization", "Audio"],
      links: { paper: ece661Pdf, slides: ece661SlidesPdf, github: "https://github.com/aliceyh7/ece661_final_project" },
      diagrams: [{ src: yiranchenDiagram, alt: "Optimization pipeline diagram" }],
    },
  ],

  softwareProjects: [
    {
      type: "Hardware / FPGA",
      title: "MIPS Pipelined Processor & Word Game Engine",
      description:
        "A 5-stage pipelined MIPS-style processor deployed on FPGA, with a word game engine (Wordle and Word Hunt) running entirely as MIPS assembly on the processor. Keyboard input and VGA output are handled via memory-mapped I/O.",
      tags: ["FPGA", "Verilog", "MIPS Assembly", "Pipelining", "MMIO"],
      links: { slides: wordGameSlides, github: "https://github.com/ben594/word-game-engine", paper: wordGamePaper },
      diagrams: [
        { src: wordle, alt: "Word Game Engine architecture" },
        { src: wordhunt, alt: "Word Hunt on the engine" },
        { src: wordleDiagram, alt: "MIPS processor and game engine architecture" },
      ],
    },
    {
      type: "Security / Supply Chain",
      title: "SBOM & Software Supply-Chain Security",
      description:
        "How Software Bills of Materials fit into modern supply-chain defense: an analysis of common risk points (dependencies, provenance, build integrity) and a practical workflow for generating and consuming SBOMs during development and release.",
      tags: ["SBOM", "Supply Chain Security", "DevSecOps", "CI/CD"],
      links: { video: "https://www.youtube.com/watch?v=6gWMghLFA-Y&t=3s" },
      diagrams: [
        { src: sbom, alt: "SBOM generation/consumption pipeline" },
        { src: sbom2, alt: "SBOM pipeline detail" },
      ],
    },
    {
      type: "Full-Stack Systems",
      title: "MiniAmazon — Marketplace for Duke Students",
      description:
        "A mini e-commerce platform for Duke students: product browsing and search, listings, carts, purchasing flows, and order history, with an emphasis on data modeling, transactional workflows, and reliable APIs.",
      tags: ["Full-Stack", "SQL", "REST APIs", "Transactions"],
      links: {
        github: "https://github.com/Starfarmer2/316MiniAmazon/blob/main/README_MS4.md",
        paper: miniAmazonPaperPdf,
        demo: "https://www.youtube.com/watch?v=cWb1-RL9Uj4&feature=youtu.be",
      },
      diagrams: [
        { src: amazondiagram, alt: "System architecture diagram" },
        { src: amazondiagram2, alt: "Database schema diagram" },
      ],
    },
  ],

  publications: [
    {
      title: "Counterfactual Group-Aware Debiasing for Fair Ad Ranking under Exposure Confounding",
      authors: "Yilun Wu, Kaili Zhang, Hejun Huang, Yuhe Hu",
      venue: "Research Report",
      year: "2026",
      link: cgadPdf,
      status: "Published",
    },
    {
      title: "Quantization Effects on Tool-Failure Recovery Vary Across Prompts and Evaluation Designs",
      authors: "Yuhe Hu",
      venue: "Under review",
      year: "2026",
      status: "Under review",
    },
    {
      title: "Is Your Test-Time Learner Actually Learning? Error Correction in Trained TTT Layers",
      authors: "Yuhe Hu, Wen Jia Hu",
      venue: "Under review",
      year: "2026",
      status: "Under review",
    },
    {
      title: "Open-World Classification as Bayesian Model Selection over Evolving Label Spaces",
      authors: "Shangqing Shi, Meimei Zhang, Yuhe Hu, Haoliang Zhang, Saisai Hu, Zixiao Huang, Zhiming Lin, Xander Zhang",
      venue: "Under review",
      year: "2026",
      status: "Under review",
    },
    {
      title: "Probing the Augmented Reality Scene Analysis Capabilities of Large Multimodal Models",
      authors: "Lin Duan, Yuhe Hu, et al.",
      venue: "IEEE Internet Computing",
      year: "2025",
      link: vlmPaperPdf,
      status: "Published",
    },
    {
      title: "A Computational Model for Automated Blood Pressure Control in Critical Care",
      authors: "Yuhe Hu, Joshua S. Broder, et al.",
      venue: "Annals of Emergency Medicine",
      year: "2025",
      link: "https://www.annemergmed.com/current",
      status: "Published",
    },
  ],

  posters: [
    {
      title: "Closed-Loop Blood Pressure Control in Critical Care",
      date: "Fall 2025",
      file: bpPresentationPdf,
      thumb: bpPosterPhoto,
      desc: "A computational control model for autonomous drug delivery to stabilize blood pressure in hypertensive crises.",
    },
    {
      title: "Vision-Language Model-Based Evaluation of Shadows & Lighting in AR Scenes",
      date: "Spring 2025",
      file: poster3,
      thumb: poster3photo,
      desc: "Evaluating the perceptual realism of AR scenes using GPT-4o, compared to traditional CNN methods.",
    },
    {
      title: "IoT Camera-Assisted Localization for AR in Simulated and Real-World Environments",
      date: "Spring 2024",
      file: poster2,
      thumb: poster2photo,
      desc: "Improving AR tracking precision by integrating third-view IoT camera data via YOLOv5.",
    },
    {
      title: "Using Synthetic Data & Simulation to Enhance Object Detection Algorithms in Indoor Environments",
      date: "Fall 2023",
      file: poster1,
      thumb: poster1photo,
      desc: "Leveraging Unity and Meta Quest 3 to generate high-fidelity synthetic datasets for robust object detection.",
    },
  ],

  leadership: [
    {
      role: "Teaching Assistant (CS & ECE)",
      org: "Duke University",
      desc: "Teaching Assistant for 6 semesters at Duke, supporting students through office hours, recitations, and grading across core CS/ECE courses.",
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
      desc: "Led Duke's Women in Tech community by organizing mentorship, workshops, and recruiting events, and partnering with sponsors to expand opportunities for members.",
      link: { href: "https://www.instagram.com/dukewit/", label: "@dukewit" },
      photo: witPhoto,
    },
  ],

  awards: {
    universityHonorsAndScholarships: [
      "Dean's List with Distinction, Duke University",
      "Duke Technology Scholar – Women in Technology Scholarship (Spring 2024, Spring 2025)",
      "Dean's Merit Award, University of Toronto – $10,000 scholarship for secondary school academic achievement",
      "President's Scholarship of Distinction, University of Waterloo – $5,000 entrance merit-based scholarship",
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

// --- Small building blocks ---

const SectionHeading = ({ id, children }) => (
  <div className="mb-8 border-b border-sand pb-3">
    <h2 id={id} className="font-serif text-2xl md:text-3xl text-ink">{children}</h2>
  </div>
);

const TextLink = ({ href, children, external = true }) => {
  if (!href || href === "#") return null;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-forest underline decoration-sand underline-offset-4 hover:decoration-forest transition-colors"
    >
      {children}
    </a>
  );
};

const LINK_LABELS = [
  ["paper", "Paper"],
  ["scholar", "Google Scholar"],
  ["slides", "Slides"],
  ["poster", "Poster"],
  ["demo", "Demo"],
  ["video", "Video"],
  ["github", "Code"],
];

const ProjectLinks = ({ links = {} }) => {
  const items = LINK_LABELS.filter(([key]) => links[key] && links[key] !== "#");
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
      {items.map(([key, label]) => (
        <TextLink key={key} href={links[key]}>{label}</TextLink>
      ))}
    </div>
  );
};

const ProjectCard = ({ project, onOpenDiagrams }) => (
  <article className="bg-paper border border-sand rounded-md p-6 flex flex-col gap-4">
    <div>
      <p className="text-xs uppercase tracking-widest text-muted mb-2">{project.type}</p>
      <h3 className="font-serif text-xl leading-snug text-ink">{project.title}</h3>
      {project.venue && <p className="text-sm text-muted mt-1">{project.venue}</p>}
    </div>

    <p className="text-sm leading-relaxed text-ink/80">{project.description}</p>

    {project.diagrams?.length > 0 && (
      <div className="grid grid-cols-3 gap-2">
        {project.diagrams.slice(0, 3).map((d, i) => (
          <button
            type="button"
            key={i}
            onClick={() => onOpenDiagrams?.(project)}
            className="rounded border border-sand bg-white overflow-hidden hover:border-forest transition-colors"
            title={d.alt || "Figure"}
          >
            <img src={d.src} alt={d.alt || `Figure ${i + 1}`} className="w-full h-20 object-contain p-1" loading="lazy" />
          </button>
        ))}
      </div>
    )}

    <p className="text-xs text-muted">{project.tags.join(" · ")}</p>

    <div className="mt-auto pt-3 border-t border-sand">
      <ProjectLinks links={project.links} />
    </div>
  </article>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-ink/70 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-paper rounded-md w-full h-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-sand"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="p-2 text-muted hover:text-ink transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow overflow-auto px-6 pb-6">{children}</div>
      </div>
    </div>
  );
};

const PdfPage = ({ title, src }) => (
  <div className="min-h-screen bg-cream">
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="font-serif text-xl text-ink">{title}</h1>
        <a href={src} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-forest text-cream text-sm hover:bg-forest-dark">
          Open / Download
        </a>
      </div>
      <div className="bg-paper border border-sand rounded-md overflow-hidden">
        <iframe src={src} title={title} style={{ width: "100%", height: "85vh", border: 0 }} />
      </div>
    </div>
  </div>
);

// --- Home page ---

const HomePage = () => {
  const [posterModal, setPosterModal] = useState(null);
  const [projectModal, setProjectModal] = useState(null);
  const { contact } = portfolioData;

  return (
    <div className="min-h-screen bg-cream text-ink font-sans pb-16">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-cream/95 backdrop-blur border-b border-sand z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg text-ink">Alice Hu</a>
          <div className="hidden md:flex gap-7 text-sm text-muted">
            <a href="#experience" className="hover:text-ink">Experience</a>
            <a href="#research" className="hover:text-ink">Research</a>
            <a href="#publications" className="hover:text-ink">Publications</a>
            <a href="#software" className="hover:text-ink">Projects</a>
            <a href="#posters" className="hover:text-ink">Posters</a>
            <a href="#leadership" className="hover:text-ink">Leadership</a>
            <a href="#awards" className="hover:text-ink">Awards</a>
          </div>
        </div>
      </nav>

      <main id="top" className="max-w-5xl mx-auto px-6 pt-16 md:pt-20 space-y-20">
        {/* Hero */}
        <section className="flex flex-col-reverse md:flex-row md:items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl text-ink">Alice Hu</h1>
            <p className="text-base md:text-lg leading-relaxed text-ink/80 max-w-xl">{portfolioData.bio}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <TextLink href={contact.linkedin}>LinkedIn</TextLink>
              <TextLink href={contact.github}>GitHub</TextLink>
              <TextLink href={contact.scholar}>Google Scholar</TextLink>
              <TextLink href={`mailto:${contact.email}`} external={false}>Email</TextLink>
            </div>
          </div>
          <div className="w-44 h-44 md:w-56 md:h-56 flex-shrink-0">
            <img
              src={portfolioData.profileImage}
              alt="Alice Hu"
              className="w-full h-full object-cover rounded-full border border-sand"
            />
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionHeading id="experience">Experience</SectionHeading>
          <div className="space-y-10">
            {portfolioData.experience.map((exp) => (
              <div key={exp.company} className="flex gap-5 md:gap-8">
                <div className="w-12 h-12 flex-shrink-0 rounded border border-sand bg-white p-1.5 flex items-center justify-center">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-serif text-xl text-ink">
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="hover:text-forest transition-colors">
                          {exp.company}
                        </a>
                      ) : exp.company}
                    </h3>
                    <span className="text-sm text-muted">{exp.role}{exp.team ? ` · ${exp.team}` : ""}</span>
                  </div>
                  {exp.points?.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm leading-relaxed text-ink/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-muted">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.tech?.length > 0 && (
                    <p className="mt-3 text-xs text-muted">{exp.tech.join(" · ")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section>
          <SectionHeading id="research">Research</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.researchProjects.map((item) => (
              <ProjectCard key={item.title} project={item} onOpenDiagrams={setProjectModal} />
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <SectionHeading id="publications">Publications</SectionHeading>
          <ol className="divide-y divide-sand border-t border-b border-sand">
            {portfolioData.publications.map((pub) => (
              <li key={pub.title} className="py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-sm text-muted md:w-14 flex-shrink-0 font-mono">{pub.year}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg leading-snug text-ink">
                    {pub.link && pub.link !== "#" ? (
                      <a href={pub.link} target="_blank" rel="noreferrer" className="hover:text-forest transition-colors">{pub.title}</a>
                    ) : pub.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{pub.authors}</p>
                  <p className="text-sm mt-1">
                    {pub.status === "Under review" ? (
                      <span className="italic text-muted">Under review</span>
                    ) : (
                      <span className="text-ink/80">{pub.venue}</span>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Software projects */}
        <section>
          <SectionHeading id="software">Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.softwareProjects.map((item) => (
              <ProjectCard key={item.title} project={item} onOpenDiagrams={setProjectModal} />
            ))}
          </div>
        </section>

        {/* Posters */}
        <section>
          <SectionHeading id="posters">Posters</SectionHeading>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.posters.map((poster) => (
              <button
                key={poster.title}
                type="button"
                onClick={() => setPosterModal(poster)}
                className="text-left group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded border border-sand bg-white">
                  <img src={poster.thumb} alt={`Thumbnail for ${poster.title}`} className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-xs text-muted">{poster.date}</p>
                <h3 className="text-sm font-medium leading-snug mt-1 group-hover:text-forest transition-colors">{poster.title}</h3>
              </button>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <SectionHeading id="leadership">Leadership & Teaching</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.leadership.map((item) => (
              <div key={item.role} className="bg-paper border border-sand rounded-md overflow-hidden">
                <img src={item.photo} alt={item.role} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-ink">{item.role}</h3>
                  <p className="text-sm text-muted mt-1">
                    {item.org}
                    {item.link && (
                      <>
                        {" · "}
                        <TextLink href={item.link.href}>{item.link.label}</TextLink>
                      </>
                    )}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/80 mt-3">{item.desc}</p>
                  {item.details?.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((d) => (
                        <li key={d} className="text-sm text-ink/80">{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <SectionHeading id="awards">Awards</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-4">University Honors & Scholarships</h3>
              <ul className="space-y-2">
                {portfolioData.awards.universityHonorsAndScholarships.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-ink/80">{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-4">National & International</h3>
              <ul className="space-y-2">
                {portfolioData.awards.nationalAndInternational.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-ink/80">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-sand pt-8 flex flex-col md:flex-row justify-between gap-2 text-sm text-muted">
          <span>Alice Hu</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </footer>
      </main>

      {/* Poster modal */}
      <Modal isOpen={!!posterModal} onClose={() => setPosterModal(null)}>
        {posterModal && (
          <div className="flex flex-col h-full">
            <h3 className="font-serif text-xl text-ink mb-1">{posterModal.title}</h3>
            <p className="text-sm text-muted mb-4">{posterModal.desc}</p>
            <iframe
              src={posterModal.file}
              title={posterModal.title}
              className="w-full flex-grow border border-sand rounded"
              style={{ minHeight: "600px" }}
            />
            <div className="mt-4 text-sm">
              <TextLink href={posterModal.file}>Download poster ({posterModal.date})</TextLink>
            </div>
          </div>
        )}
      </Modal>

      {/* Figures modal */}
      <Modal isOpen={!!projectModal} onClose={() => setProjectModal(null)}>
        {projectModal && (
          <div>
            <h3 className="font-serif text-2xl text-ink">{projectModal.title}</h3>
            <p className="text-sm text-muted mt-1">{projectModal.venue || projectModal.type}</p>
            <div className="mt-6 space-y-6">
              {(projectModal.diagrams || []).map((d, i) => (
                <figure key={i} className="border border-sand rounded bg-white overflow-hidden">
                  <a href={d.src} target="_blank" rel="noreferrer" title="Open image in new tab">
                    <img src={d.src} alt={d.alt || `Figure ${i + 1}`} className="w-full object-contain max-h-[70vh]" loading="lazy" />
                  </a>
                  <figcaption className="px-4 py-3 text-sm text-muted">{d.alt || `Figure ${i + 1}`}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acep_poster" element={<PdfPage title="ACEP Poster" src={bpPresentationPdf} />} />
        <Route path="/fall_2023" element={<PdfPage title="Poster 1 (Fall 2023)" src={poster1} />} />
        <Route path="/spring_2024" element={<PdfPage title="Poster 2 (Spring 2024)" src={poster2} />} />
        <Route path="/spring_2025" element={<PdfPage title="Poster 3 (Spring 2025)" src={poster3} />} />
      </Routes>
    </BrowserRouter>
  );
}
