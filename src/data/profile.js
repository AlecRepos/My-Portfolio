// ─────────────────────────────────────────────────────────────
//  Tutte le informazioni personali stanno qui.
//  Ogni testo è bilingue: { it: '...', en: '...' }
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alessandro Cacchi',
  firstName: 'Alessandro',
  location: { it: 'Cesena, Italia', en: 'Cesena, Italy' },
  email: 'alessandro.cacchi.bs@gmail.com',
  github: 'https://github.com/AlecRepos',
  linkedin: 'https://www.linkedin.com/in/alessandro-cacchi-40292b341',

  // Mostra il badge "Disponibile" nell'hero
  available: true,
  availability: { it: 'Aperto a nuove opportunità', en: 'Open to new opportunities' },

  role: {
    it: 'Cybersecurity & automazione delle infrastrutture',
    en: 'Cybersecurity & infrastructure automation',
  },
  headline: {
    it: 'Rendo le infrastrutture più sicure, automatizzando tutto ciò che si può automatizzare.',
    en: 'I make infrastructure more secure by automating everything that can be automated.',
  },
  intro: {
    it: 'Laureando in Informatica all’Università di Bologna. Ho lavorato su ambienti Active Directory, hardening e deploy automatizzati di strumenti di sicurezza con Ansible, Vagrant e Docker. Mi piace costruire soluzioni semplici, pulite e affidabili.',
    en: 'Computer Science student at the University of Bologna. I have worked on Active Directory environments, hardening and automated deployment of security tooling with Ansible, Vagrant and Docker. I like building simple, clean and reliable solutions.',
  },

  // Riquadro "in breve" nell'hero
  facts: [
    { label: { it: 'Focus', en: 'Focus' }, value: { it: 'Blue & Red Team automation', en: 'Blue & Red Team automation' } },
    { label: { it: 'Esperienza', en: 'Experience' }, value: { it: 'Cyberloop S.r.l. · 7 mesi', en: 'Cyberloop S.r.l. · 7 months' } },
    { label: { it: 'Studi', en: 'Studies' }, value: { it: 'Informatica · UniBo', en: 'Computer Science · UniBo' } },
    { label: { it: 'Stack', en: 'Stack' }, value: { it: 'Ansible · Docker · PowerShell · Vue', en: 'Ansible · Docker · PowerShell · Vue' } },
  ],

  experience: [
    {
      role: { it: 'Tirocinio — Cybersecurity', en: 'Cybersecurity Intern' },
      org: 'Cyberloop S.r.l.',
      place: 'Cesena (FC)',
      period: { it: 'Mar 2025 — Ott 2025', en: 'Mar 2025 — Oct 2025' },
      items: [
        {
          title: { it: 'Blue Teaming', en: 'Blue Teaming' },
          text: {
            it: 'Provisioning automatico di ambienti Active Directory on‑premise e messa in sicurezza tramite hardening.',
            en: 'Automated provisioning of on‑premise Active Directory environments and security hardening.',
          },
          tags: ['Ansible', 'Vagrant', 'BadBlood', 'Windows Defender', 'PowerShell', 'SSH', 'Ubuntu'],
        },
        {
          title: { it: 'Red Teaming', en: 'Red Teaming' },
          text: {
            it: 'Automazione del deploy e integrazione di strumenti di sicurezza in infrastrutture di Red Teaming.',
            en: 'Deployment automation and integration of security tools into Red Team infrastructure.',
          },
          tags: ['PwnDoc', 'PCF', 'MageAI', 'OpenVAS', 'Docker Compose', 'PowerShell', 'Linux'],
        },
      ],
    },
  ],

  education: [
    {
      title: { it: 'Laurea Triennale in Informatica', en: 'B.Sc. in Computer Science' },
      org: { it: 'Università di Bologna — Campus di Cesena', en: 'University of Bologna — Cesena Campus' },
      detail: { it: 'Tecnologie dei Sistemi Informatici', en: 'Computer Systems Technologies' },
      period: { it: 'Laurea prevista: nov 2025', en: 'Expected graduation: Nov 2025' },
      courses: [
        { name: { it: 'Sicurezza Informatica e Crittografia', en: 'Cybersecurity & Cryptography' }, grade: '29/30' },
        { name: { it: 'Programmazione in C', en: 'C Programming' }, grade: '29/30' },
        { name: { it: 'Ingegneria e Sviluppo Web', en: 'Web Engineering & Development' }, grade: '27/30' },
        { name: { it: 'Basi di Dati', en: 'Databases' } },
        { name: { it: 'Reti', en: 'Computer Networks' } },
        { name: { it: 'Ingegneria del Software', en: 'Software Engineering' } },
        { name: { it: 'Algoritmi', en: 'Algorithms' } },
      ],
    },
    {
      title: { it: 'Diploma — Sistemi Informativi Aziendali', en: 'High School Diploma — Business Information Systems' },
      org: { it: 'ITE R. Serra, Cesena', en: 'ITE R. Serra, Cesena' },
      detail: { it: 'Voto: 75/100', en: 'Grade: 75/100' },
    },
  ],

  skills: [
    {
      icon: 'shield',
      title: { it: 'Cybersecurity, sistemi e reti', en: 'Security, systems & networking' },
      sub: { it: 'AD · OS · Automazione · Networking', en: 'AD · OS · Automation · Networking' },
      items: ['Active Directory', 'Windows Server', 'Linux', 'PowerShell', 'Ansible', 'Vagrant', 'Docker / Compose', 'OpenVAS', 'TCP/IP', 'HTTP/HTTPS', 'SSH', 'DHCP'],
    },
    {
      icon: 'code',
      title: { it: 'Sviluppo web e database', en: 'Web development & databases' },
      sub: { it: 'Frontend · Backend · API · SQL', en: 'Frontend · Backend · API · SQL' },
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Bootstrap', 'Node.js', 'REST API', 'PostgreSQL', 'MySQL'],
    },
    {
      icon: 'chart',
      title: { it: 'Programmazione e data science', en: 'Programming & data science' },
      sub: { it: 'Core · Analisi dati · ML', en: 'Core · Data analysis · ML' },
      items: ['C', 'Java', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    },
    {
      icon: 'cloud',
      title: { it: 'Cloud e strumenti', en: 'Cloud & tools' },
      sub: { it: 'Cloud · Versioning · Design', en: 'Cloud · Versioning · Design' },
      items: ['Microsoft Azure (base)', 'GCP (base)', 'Git / GitHub', 'Figma'],
    },
  ],
}
