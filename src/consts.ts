import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Desarrollador Web",
  DESCRIPTION: "Bienvenidx a mi Página Personal. Es un Portafolio, un Lugar para Cursos (Gratuitos) que Imparto, un Espacio de Divulgación de Área 1, un Blog, más sobre Mí y Recomendaciones de Proyectos.",
  AUTHOR: "Luis LoHer",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabajos",
  DESCRIPTION: "Lugares donde he trabajado.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escribir sobre temas que me apasionan.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he trabajado.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar todas las publicaciones y proyectos por palabra clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Trabajo", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "luisloher.dev@gmail.com",
    HREF: "mailto:luisloher.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "luisDur8",
    HREF: "https://github.com/luisDur8"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "luis-lopez-web-developer",
    HREF: "https://www.linkedin.com/in/luis-lopez-web-developer/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "luisDur_Math",
    HREF: "https://twitter.com/luisDur_Math",
  },
]

