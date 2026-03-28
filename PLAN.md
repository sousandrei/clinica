# Clinica Equilibrio do Ser - Landing page

## Necessary Information

- Name - Clinica Equilibrio do Ser
- Address - Setor Bancário Sul, quadra 2 Bloco S Sala 507/511 e 805 Edifício Empire Center, Brasília, Brazil 70070120
- Call to Action on Whatsapp - +55 61 9822-0458
- Types of medical things to mention
  - acupuntura
  - fisioterapia
  - psicologia 
  - nutrição
  - pilates
  - RPG 
- photos? We can generate some with AI, use placeholders

## Design philosophy

Read the PDF files in docs/ to see how to use the brand.
Use the aceternity, lucide icons and motion (old framer motion) libraries.
Make it work on mobile as well as computers
Website content needs to be portuguese

---

## Executed Plan & Architecture

### 1. Brand & Design System Setup
- **Typography:**
  - Primary Font (UI, Body, Headings): **Quicksand**
  - Secondary Font (Quotes, Elegance): **Cormorant Garamond**
- **Colors:**
  - Brand Primary: Yellow/Orange gradient (`#eaaa00` to `#db8700`) and Purple gradient (`#8b60c4` to `#604ca8`).
  - Brand Neutral/Dark: Brown (`#594d3e`) and Dark Navy (`#333159`).
  - Brand Accents: Teal (`#00cdb4`), Blue (`#1571bc`).

### 2. Dependencies Installed
- `framer-motion` (Animations and scroll effects)
- `lucide-react` (Iconography)
- `clsx` & `tailwind-merge` (Utility classes for UI components)

### 3. Page Architecture & Sections

**A. Navbar / Header**
- **Logo:** "Equilíbrio do Ser" text with the primary yellow gradient.
- **Links:** Serviços, A Clínica, Localização.
- **Mobile:** Responsive hamburger menu for mobile devices.
- **CTA Button:** "Agendar" linking directly to the clinic's WhatsApp.

**B. Hero Section**
- **Concept:** Visuals inspired by the "Espiral da Vida" (Spiral of Life), representing dynamic flow and energy.
- **Headline:** "Equilíbrio entre Corpo, Mente e Espírito."
- **Primary CTA:** "Agendar Avaliação" (WhatsApp `+55 61 9822-0458`).
- **Visuals:** Placeholder layout for an image of a peaceful clinic environment, accompanied by glowing spiral animations.

**C. Services (Nossas Especialidades)**
- Interactive card grid with hover effects (`framer-motion`).
- Specialties include:
  - 🌬️ **Acupuntura**
  - 🏃 **Fisioterapia**
  - 🧠 **Psicologia**
  - 🍎 **Nutrição**
  - 🧘 **Pilates**
  - 🧍 **RPG**

**D. About the Clinic (A Clínica)**
- **Concept:** Explaining the three dimensions (Body, Mind, Spirit) and the clinic's core philosophy (Humanismo & Inovação).
- **Visuals:** A stylized quote block using the elegant "Cormorant Garamond" font and animated spiral rings to represent the brand's core concept.

**E. Location & Contact (Rodapé / Footer)**
- **Brand Intro:** Short description of the clinic's mission in Brasília.
- **Contact:** WhatsApp number and Instagram links prominently displayed.
- **Address:** Full address details (Edifício Empire Center, Brasília - DF).
- **Hours:** Operation hours (Seg-Sex: 08h-20h, Sáb: 08h-14h).
