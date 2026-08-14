'use client'

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiMongodb, SiGithub, SiFigma, SiLinux, SiSolidity,
  SiFlutter, SiFirebase, SiTailwindcss, SiHtml5, SiCss,
} from 'react-icons/si'

function ReactNativeIcon({ size = 28, color = '#61dafb' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47m-7.07-7.14c-.63.35-.82 1.82-.31 3.96.77-.11 1.62-.25 2.4-.36.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7M19.43 15c.32-.87.43-1.79.43-2.71 0-.91-.11-1.83-.43-2.71-.51-1.42-1.5-2.5-2.71-3.14-.63-.35-1.5-.2-2.5.35.52.59 1.03 1.23 1.51 1.9.78.11 1.63.25 2.4.36.51 2.14.32 3.61-.31 3.96-.63.38-2.01-.2-3.6-1.7.52.59 1.03 1.23 1.51 1.9.78.11 1.63.25 2.4.36.51-2.14.32-3.61-.31-3.96m-1.4-8.14c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.11 1.62-.25 2.4-.36.48-.67.99-1.31 1.51-1.9M12 6.5c-.39 0-.74.04-1.08.1.35.47.69.97 1.08 1.5.39-.53.73-1.03 1.08-1.5C12.74 6.54 12.39 6.5 12 6.5m0 11c.39 0 .74-.04 1.08-.1-.35-.47-.69-.97-1.08-1.5-.39.53-.73 1.03-1.08 1.5.34.06.69.1 1.08.1" />
    </svg>
  )
}

const skills = [
  { name: 'HTML5',         Icon: SiHtml5,           color: '#e34f26' },
  { name: 'CSS3',          Icon: SiCss,             color: '#1572b6' },
  { name: 'JavaScript',    Icon: SiJavascript,      color: '#f7df1e' },
  { name: 'TypeScript',    Icon: SiTypescript,      color: '#3178c6' },
  { name: 'React.js',      Icon: SiReact,           color: '#61dafb' },
  { name: 'React Native',  Icon: ReactNativeIcon,   color: '#61dafb' },
  { name: 'Next.js',       Icon: SiNextdotjs,       color: '#fff' },
  { name: 'Tailwind',      Icon: SiTailwindcss,     color: '#38bdf8' },
  { name: 'Node.js',       Icon: SiNodedotjs,       color: '#6cc24a' },
  { name: 'Python',        Icon: SiPython,          color: '#3776ab' },
  { name: 'MongoDB',       Icon: SiMongodb,         color: '#47a248' },
  { name: 'Firebase',      Icon: SiFirebase,        color: '#ffca28' },
  { name: 'Flutter',       Icon: SiFlutter,         color: '#54c5f8' },
  { name: 'Solidity',      Icon: SiSolidity,        color: '#a0aec0' },
  { name: 'GitHub',        Icon: SiGithub,          color: '#fff' },
  { name: 'Linux / Kali',  Icon: SiLinux,           color: '#fcc624' },
  { name: 'Figma',         Icon: SiFigma,           color: '#f24e1e' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: '#0a0a0a',
        padding: '5rem 1.5rem',
        borderTop: '1px solid #111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
          <h2 className="section-heading">
            <span className="hash">#</span>skills
          </h2>
          <div className="section-divider" />
        </div>

        {/* Icon grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {skills.map((s) => (
            <div key={s.name} className="skill-box">
              <s.Icon size={32} color={s.color} />
              <span
                style={{
                  color: '#666',
                  fontSize: '0.7rem',
                  textAlign: 'center',
                  fontFamily: 'inherit',
                  lineHeight: 1.3,
                }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
