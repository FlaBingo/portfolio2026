// frontend\src\sections\Projects.tsx

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  handleExtensionNotDeployed,
  handlePendingWork,
} from "@/lib/devProgress";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Product Saver",
    description:
      "Never lose track of your wishlist items again. Save product photos, details, prices, and purchase links in one place to buy when you're ready.",
    image: "./projects/productsaver_screenshot.png",
    tags: [
      "Javascript",
      "MERN",
      "CSS",
      "REST",
      "Nodemailer",
      "Zustand",
      "Axios",
    ],
    link: "https://product-store-frontend-six.vercel.app/",
    github: "https://github.com/FlaBingo/productStore",
    startTime: "Mar 2025",
    endTime: "May 2025",
  },
  {
    title: "Product Saver Extension",
    description:
      "Save products instantly. With one click, Product Saver automatically fills in product details so you can save items quickly without manual effort.",
    image: "./projects/productsaver_extension_screenshot.png",
    tags: ["HTML", "CSS", "Javascript", "JSON", "Manifold V3"],
    link: "https://product-store-frontend-six.vercel.app/",
    github: "https://github.com/FlaBingo/extensions",
    startTime: "Aug 2025",
    endTime: "Aug 2025",
  },
  {
    title: "OnlyFriends",
    description:
      "A role-based content-sharing platform that allows creators to publish exclusive posts for their fan community.",
    image: "./projects/onlyfriends_screenshot.png",
    tags: [
      "Typescript",
      "NextJS",
      "Shadcn",
      "Server Actions",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "UploadThing",
    ],
    link: "https://onlyfriends-one.vercel.app/",
    github: "https://github.com/FlaBingo/NextJS/tree/main/social_app",
    startTime: "Jun 2025",
    endTime: "Jun 2025",
  },
  {
    title: "LearnVault",
    description:
      "A content resource management web application that let's users create, collab, organize, and share repositories of curated resources (improved learning efficiency by 30%).",
    image: "./projects/learn_vault_screenshot.png",
    tags: [
      "Typescript",
      "NextJS",
      "Shadcn",
      "Server Actions",
      "PostgreSQL",
      "Drizzle",
      "Caching",
    ],
    link: "https://learn-vault.vercel.app/",
    github: "https://github.com/FlaBingo/Learn_Vault",
    startTime: "Jul 2025",
    endTime: "Nov 2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
                borderRadius: "1rem",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title !== "Product Saver Extension" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <div
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                      onClick={handleExtensionNotDeployed}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                    <span>
                      {project.startTime} - {project.endTime}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className="text-center mt-12 animate-fade-in animation-delay-500"
          onClick={handlePendingWork}
        >
          <AnimatedBorderButton className="px-2 py-2">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
