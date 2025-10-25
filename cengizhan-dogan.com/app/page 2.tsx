"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "publications", "profile", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Cengizhan
                  <br />
                  <span className="text-muted-foreground">Dogan</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Engineer that loves working on new ideas and bringing projects to life, always up for a challenge.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Not available for work
                  </div>
                  <div>Istanbul, Turkey</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="text-foreground">Co-Founder & CEO</div>
                  <div className="text-muted-foreground">@ Stealth Startup</div>
                  <div className="text-xs text-muted-foreground">Aug 2025 — Present</div>
                </div>
                <div className="pt-4 border-t border-border/40 space-y-2 text-sm text-muted-foreground">
                  <div className="text-foreground">Co-Founder</div>
                  <div className="text-muted-foreground">@ Eper Technologies</div>
                  <div className="text-xs text-muted-foreground">Mar 2025 — Present</div>
                </div>
                <div className="pt-4 border-t border-border/40 space-y-2">
                  <div className="text-foreground">Research Associate</div>
                  <div className="text-muted-foreground">@ Kadir Has University</div>
                  <div className="text-xs text-muted-foreground">Mar 2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Agentic AI", "Autonomous Systems", "Flight Dynamics"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl font-light">Work Experience</h2>
              </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  time: "Aug 2025 — Present",
                  role: "Co-Founder & CEO",
                  company: "Stealth Startup",
                  location: "Istanbul, Turkey",
                  description: "Co-leading product direction for intelligent research agents accelerating engineering workflows.",
                  focus: ["Founding", "Agentic AI", "Product Strategy"],
                },
                {
                  time: "Mar 2025 — Present",
                  role: "Co-Founder",
                  company: "Eper Technologies",
                  location: "Istanbul, Turkey",
                  description: "Building simulation-first aerospace tooling that bridges research and real-world deployment.",
                  focus: ["Aerospace", "Simulation", "Operations"],
                },
                {
                  time: "Mar 2025 — Present",
                  role: "Research Associate",
                  company: "Kadir Has University",
                  location: "Istanbul, Turkey",
                  description: "Advancing the Dual Lyapunov Method to deliver stability guarantees for complex control systems.",
                  focus: ["Control Theory", "Dual Lyapunov Theorem", "Systems Engineering"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.time}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{job.location}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.focus.map((focus) => (
                      <span
                        key={focus}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Selected initiatives that explore resilience, autonomy, and human-centered tooling across research and
                industry contexts.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "MEDUSA",
                  timeframe: "2025 — Present",
                  summary:
                    "Swarm autonomy platform coordinating heterogeneous UAV fleets with resilient comms, onboard perception, and mission assurance tooling.",
                  tags: ["Agentic AI", "Swarm Control", "Edge Compute"],
                  link: { label: "Request briefing", href: "mailto:cengizhan@eperteknoloji.com" },
                },
                {
                  title: "Micro UAV",
                  timeframe: "2025",
                  summary:
                    "Palm-sized reconnaissance vehicle with custom flight controller, dual-use camera payload, and gust rejection tuned via CFD-informed winglets.",
                  tags: ["Flight Dynamics", "Embedded", "CFD"],
                  link: null,
                },
                {
                  title: "Rhinoplasty CFD Analysis",
                  timeframe: "2024",
                  summary:
                    "Patient-specific airflow simulation pipeline benchmarking surgical outcomes and informing rhinoplasty planning decisions.",
                  tags: ["CFD", "ANSYS", "Python"],
                  link: { label: "See study", href: "https://scholar.google.com" },
                },
                {
                  title: "eVTOL UAV",
                  timeframe: "2024 — Present",
                  summary:
                    "Hybrid-lift prototype delivering vertical takeoff with fixed-wing cruise, optimized for rapid payload swaps and autonomous missions.",
                  tags: ["eVTOL", "Systems Integration", "Control"],
                  link: null,
                },
                {
                  title: "Northwest Algorithms",
                  timeframe: "2023 — Present",
                  summary:
                    "Algorithm studio exploring geospatial inference, maritime decision-making, and dual-use autonomy concepts for frontier operations.",
                  tags: ["Strategy", "Geospatial", "Autonomy"],
                  link: { label: "Inquire", href: "mailto:cengizhan@eperteknoloji.com" },
                },
                {
                  title: "Dual Lyapunov Research",
                  timeframe: "2023 — Present",
                  summary:
                    "Applied research program extending dual Lyapunov methods to certify nonlinear aerospace systems under adversarial disturbances.",
                  tags: ["Control Theory", "Stability", "Mathematics"],
                  link: null,
                },
                {
                  title: "Intro to UAVs Course",
                  timeframe: "2022",
                  summary:
                    "Curriculum introducing fundamentals of unmanned aerial systems covering regulation, mission design, and basic aerodynamics.",
                  tags: ["Education", "Curriculum", "UAV"],
                  link: null,
                },
                {
                  title: "UAV Design Course",
                  timeframe: "2023",
                  summary:
                    "Hands-on cohort program guiding multidisciplinary teams through requirements capture, aero-structural design, and flight testing.",
                  tags: ["Education", "Design", "Systems"],
                  link: null,
                },
                {
                  title: "Advanced UAV Design Course",
                  timeframe: "2024",
                  summary:
                    "Graduate-level module focused on autonomous mission planning, real-time control architectures, and certification pathways.",
                  tags: ["Education", "Autonomy", "Flight Control"],
                  link: null,
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                        {project.timeframe}
                      </div>
                    </div>
                    {project.link ? (
                      <Link
                        href={project.link.href}
                        className="text-xs font-mono uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {project.link.label}
                      </Link>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-muted-foreground border border-border/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-light">Publications</h2>
              <p className="text-sm text-muted-foreground font-mono">
                * denotes equal contribution · # denotes alphabetical order of authorship
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "CFD Analysis of Teorhinoplasty",
                  authors: "Cengizhan Dogan, T. Dogan",
                },
                {
                  title: "Stability Certificates for Dynamical Systems on the Torus*",
                  authors: "Cengizhan Dogan, S. Tripathi, A. Gokcen, M. Kudeyt, S. Sahin, O. Karabcak",
                },
                {
                  title: "Drones and Wildfire Early Detection*",
                  authors: "Cengizhan Dogan, D. Aysan, D. Tilkici",
                },
              ].map((paper, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paper.authors}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="profile"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Education & Expertise</h2>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">University of Manchester</h3>
                  <div className="text-sm text-muted-foreground">
                    School of Engineering · B.Sc. Aerospace Engineering
                  </div>
                  <div className="text-sm text-muted-foreground">Sep 2022 — Jun 2025</div>
                  <div className="text-sm text-muted-foreground">GPA: 3.70 / 4.00</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Hyperloop Executive Committee Member</li>
                  <li>Mixed Martial Arts Club President</li>
                  <li>Royal Aeronautical Society &amp; IMechE Student/Affiliate</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">SKILLS</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Software</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Microsoft Office", "SolidWorks", "Simulink", "Unity", "ANSYS", "Star-CCM+", "Abaqus"].map(
                        (tool) => (
                          <span key={tool} className="px-2 py-1 text-xs border border-border rounded-full">
                            {tool}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Coding</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Python", "TypeScript", "MATLAB", "XPPAUT", "Pinescript", "LaTeX"].map((lang) => (
                        <span key={lang} className="px-2 py-1 text-xs border border-border rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">HONORS &amp; AWARDS</div>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li>
                    <div className="text-foreground">Mechanics Course Success Award</div>
                    <div>Top 5 of 450+ participants · Presented by Prof. A. Nihat Berker</div>
                  </li>
                  <li>
                    <div className="text-foreground">Turkish National Windsurfing Champion</div>
                    <div>National ranking in competitive windsurfing</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[5] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Exploring collaborations at the intersection of control theory, aerospace engineering, and intelligent systems.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:cengizhan@eperteknoloji.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">Email me</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "X",
                    summary: "Follow real-time updates and ideas",
                    url: "https://x.com/CengizhanDoga17",
                  },
                  {
                    name: "Mail",
                    summary: "Reach out directly via email",
                    url: "mailto:cengizhan@eperteknoloji.com",
                  },
                  {
                    name: "LinkedIn",
                    summary: "Connect professionally on LinkedIn",
                    url: "https://www.linkedin.com/in/cengo",
                  },
                  {
                    name: "Google Scholar",
                    summary: "Review publications and citations",
                    url: "https://scholar.google.com",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.summary}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Cengizhan Dogan. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Credit: Felix Macaspac</div>
            </div>

            <div className="flex items-center gap-4"></div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
