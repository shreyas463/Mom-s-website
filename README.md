# Dr. Rashmi Chaudhary — Official Website

A fast, secure, single-page website for **Dr. Rashmi Chaudhary**, Senior Consultant
Obstetrician & Gynaecologist at Cloudnine Hospitals, Bangalore.

Built with **React + Vite + TypeScript**. No backend, no database, no tracking —
which keeps it fast, cheap to host, and small in security surface.

---

## ⚠️ Before you go live — fill in real contact details

Open **`src/data/doctor.ts`** and edit the `contact` block at the top:

```ts
export const contact = {
  whatsappNumber: '910000000000', // real WhatsApp number, digits only, no "+"
  email: 'appointments@example.com',
  phoneDisplay: '+91 00000 00000',
  phoneDial: '+910000000000',
}
```

Until these are real, the booking form's WhatsApp/email/call actions won't reach her.

**Optional — turn on the "real inbox" backend:** set `formspreeEndpoint` in the
same `contact` block (create a free form at <https://formspree.io>). When set,
the booking form submits directly to your inbox without the visitor leaving the
site; WhatsApp/email become one-tap shortcuts. Left blank, it falls back to the
WhatsApp/email flow. See "How booking works" below.

**Also recommended:**
- Confirm the exact hospital addresses in `locations`.
- Replace the two paraphrased review "themes" with real, consented testimonials
  if she wishes (the aggregate rating and platform links are already real).

Her official Cloudnine photo is already included (`public/dr-rashmi.jpg`). To
swap it, drop a new image at that path (or update the `src` in `Hero.tsx`).

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:5190
```

Build for production:

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy (free, with HTTPS)

The project ships ready for **Netlify** or **Vercel**:

- **Netlify** — connect the repo (or drag-drop `dist/`). Config: `netlify.toml`.
- **Vercel** — import the repo; build command `npm run build`, output `dist`.
  Config: `vercel.json`.

Both hosts serve over HTTPS automatically and apply the security headers below.
After deploying, point the custom domain (e.g. `drrashmichaudhary.com`) at the host.

## Design & assets

- **Typography** — Fraunces (display serif) + DM Sans (body), **self-hosted** in
  `public/fonts/` so the site still makes zero third-party requests.
- **Photo** — Dr. Chaudhary's official Cloudnine headshot at `public/dr-rashmi.jpg`.
- **Palette** — warm, nurturing tones (cream, plum/wine, terracotta, blush, gold)
  chosen for an obstetrics/maternity audience. All colours live as CSS variables
  at the top of `src/styles.css` — change them there to re-theme the whole site.

## How booking works

The form validates input, then delivers the request one of two ways:

1. **Formspree backend (if `formspreeEndpoint` is set)** — submits directly to
   your inbox via `fetch`; the visitor never leaves the site. Email is required
   in this mode so the team can reply. A WhatsApp shortcut is also offered.
2. **WhatsApp / email fallback (default)** — opens a pre-filled WhatsApp
   (`wa.me`) message or `mailto` addressed to Dr. Chaudhary's team.

Either way, **no patient data is stored on the website**. She confirms the slot
manually — appropriate for a clinical practice.

## Security

- **Strict Content-Security-Policy** — blocks external scripts/styles/frames.
  Fonts, the photo and icons are all self-hosted; the only allowed cross-origin
  request is the optional Formspree form POST (`connect-src https://formspree.io`).
- **HSTS, X-Frame-Options: DENY, X-Content-Type-Options: nosniff,
  Referrer-Policy, Permissions-Policy** — set in `netlify.toml`, `vercel.json`,
  and `public/_headers`.
- **No secrets in the client**, no analytics, no cookies.
- **Form hardening** — required-field + phone/email validation, length caps,
  input cleaning, and a honeypot field to silently drop spam bots.
- **No patient data at rest** — requests go straight to WhatsApp/email.
- All outbound links use `rel="noopener noreferrer"`.

After deploying, verify headers with <https://securityheaders.com>.

## Content sources

Professional details were compiled from Dr. Chaudhary's public profiles
(Cloudnine, Practo, Justdial) and her Cloudnine YouTube videos. Review the
content in `src/data/doctor.ts` periodically to keep it accurate.

## Medical disclaimer

This site provides general information and appointment requests only and is not a
substitute for professional medical advice. In an emergency, contact the nearest
hospital.
