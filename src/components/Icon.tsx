/** Inline SVG icons (no external requests). 24x24 stroke icons. */

const paths: Record<string, JSX.Element> = {
  pregnancy: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <path d="M12 8c3 0 4.5 2.5 4.5 5.5S15 20 12 20c-1 0-1.8-.3-2.4-.8" />
      <path d="M9.5 12c0 2.5.8 5 2.5 7" />
    </>
  ),
  fetal: (
    <>
      <path d="M12 21c4-2.5 7-6 7-10a7 7 0 1 0-14 0c0 4 3 7.5 7 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  surgery: (
    <>
      <path d="M4 4l9 9" />
      <path d="M13 13l6 6" />
      <path d="M11 11l2-2" />
      <circle cx="5" cy="5" r="1.4" />
    </>
  ),
  gynae: (
    <>
      <path d="M12 3v10" />
      <path d="M8 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
      <path d="M9 8h6" />
    </>
  ),
  fertility: (
    <>
      <circle cx="9.5" cy="12" r="5" />
      <circle cx="14.5" cy="12" r="5" />
    </>
  ),
  maternity: (
    <>
      <circle cx="12" cy="6" r="2.2" />
      <path d="M12 8.5v6" />
      <path d="M8 12h8" />
      <path d="M9 20l3-5 3 5" />
    </>
  ),
}

export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? paths.gynae}
    </svg>
  )
}
