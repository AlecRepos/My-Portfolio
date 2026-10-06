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

  // Badge nell'hero: metti false per nasconderlo
  available: true,
  availability: { it: 'Aperto a collaborazioni', en: 'Open to collaborations' },

  role: {
    it: 'IT Specialist · Sistemi, reti e supporto',
    en: 'IT Specialist · Systems, networks & support',
  },
  // Frase grande sotto il nome (opzionale: metti null per non mostrarla)
  headline: null,
  intro: {
    it: 'Laureato in Informatica all’Università di Bologna, oggi lavoro come IT Specialist: mi occupo di ambienti Microsoft, reti, sicurezza degli utenti e assistenza tecnica. In parallelo sviluppo siti e web app, e uso gli strumenti di intelligenza artificiale ogni giorno per lavorare in modo più rapido e preciso.',
    en: 'Computer Science graduate from the University of Bologna, now working as an IT Specialist at Onit Sistemi: I look after Microsoft environments, networks, end-user security and technical support. On the side I build websites and web apps, and I use AI tools every day to work faster and more accurately.',
  },

  // Riquadro "in breve" nell'hero
  facts: [
    { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'IT Specialist · Onit Sistemi', en: 'IT Specialist · Onit Sistemi' } },
    { label: { it: 'Focus', en: 'Focus' }, value: { it: 'Microsoft · Reti · Sicurezza utenti', en: 'Microsoft · Networks · User security' } },
    { label: { it: 'Studi', en: 'Studies' }, value: { it: 'Laurea in Informatica · UniBo', en: 'B.Sc. Computer Science · UniBo' } },
    { label: { it: 'Stack', en: 'Stack' }, value: { it: 'AD · Azure AD · PowerShell · AI', en: 'AD · Azure AD · PowerShell · AI' } },
  ],

  experience: [
    {
      role: { it: 'IT Specialist', en: 'IT Specialist' },
      org: 'Onit Sistemi',
      place: { it: 'Tempo pieno', en: 'Full-time' },
      period: { it: 'Gen 2026 — Oggi', en: 'Jan 2026 — Present' },
      current: true,
      items: [
        {
          title: { it: 'Sistemi Microsoft e identità', en: 'Microsoft systems & identity' },
          text: {
            it: 'Gestione di utenti, gruppi e accessi in Active Directory e Azure AD, e amministrazione degli ambienti Microsoft.',
            en: 'Managing users, groups and access in Active Directory and Azure AD, and administering Microsoft environments.',
          },
          tags: ['Microsoft', 'Active Directory', 'Azure AD'],
        },
        {
          title: { it: 'Reti, internet e telefonia', en: 'Networks, internet & telephony' },
          text: {
            it: 'Configurazione e troubleshooting di reti e connettività, apparati di rete e centralini VoIP.',
            en: 'Configuring and troubleshooting networks and connectivity, network devices and VoIP phone systems.',
          },
          tags: ['UniFi Network', 'Pulse Network', '3CX'],
        },
        {
          title: { it: 'Sicurezza utenti ed endpoint', en: 'User & endpoint security' },
          text: {
            it: 'Protezione delle postazioni con antivirus/EDR, sicurezza della posta e gestione dei backup.',
            en: 'Protecting workstations with antivirus/EDR, email security and backup management.',
          },
          tags: ['SentinelOne', 'Libraesva', 'Nakivo', 'OpenText'],
        },
        {
          title: { it: 'Supporto e automazione', en: 'Support & automation' },
          text: {
            it: 'Assistenza tecnica di primo livello, gestione remota dei dispositivi e script per automatizzare le attività ricorrenti.',
            en: 'First-level technical support, remote device management and scripts to automate recurring tasks.',
          },
          tags: ['NinjaOne', 'PowerShell', 'Scripting'],
        },
      ],
    },
    {
      role: { it: 'Tirocinio — Cybersecurity', en: 'Cybersecurity Intern' },
      org: 'Cyberloop S.r.l.',
      place: { it: 'Cesena (FC)', en: 'Cesena, Italy' },
      period: { it: 'Mar 2025 — Ott 2025', en: 'Mar 2025 — Oct 2025' },
      items: [
        {
          title: { it: 'Blue Teaming', en: 'Blue Teaming' },
          text: {
            it: 'Provisioning automatico di ambienti Active Directory on‑premise e messa in sicurezza tramite hardening.',
            en: 'Automated provisioning of on‑premise Active Directory environments and security hardening.',
          },
          tags: ['Ansible', 'Vagrant', 'BadBlood', 'Windows Defender', 'PowerShell'],
        },
        {
          title: { it: 'Red Teaming', en: 'Red Teaming' },
          text: {
            it: 'Automazione del deploy e integrazione di strumenti di sicurezza in infrastrutture di Red Teaming.',
            en: 'Deployment automation and integration of security tools into Red Team infrastructure.',
          },
          tags: ['PwnDoc', 'PCF', 'MageAI', 'OpenVAS', 'Docker Compose'],
        },
      ],
    },
  ],

  education: [
    {
      title: { it: 'Laurea Triennale in Informatica', en: 'B.Sc. in Computer Science' },
      org: { it: 'Università di Bologna — Campus di Cesena', en: 'University of Bologna — Cesena Campus' },
      detail: { it: 'Tecnologie dei Sistemi Informatici', en: 'Computer Systems Technologies' },
      period: { it: 'Laureato', en: 'Graduated' },
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
      icon: 'server',
      title: { it: 'IT e sistemi aziendali', en: 'IT & business systems' },
      sub: { it: 'Identità · Reti · Telefonia', en: 'Identity · Networks · Telephony' },
      items: ['Microsoft', 'Active Directory', 'Azure AD', 'Windows Server', 'Microsoft Azure', 'UniFi Network', 'Pulse Network', '3CX', 'TCP/IP', 'DHCP'],
    },
    {
      icon: 'shield',
      title: { it: 'Sicurezza e gestione endpoint', en: 'Security & endpoint management' },
      sub: { it: 'EDR · Email · Backup · RMM', en: 'EDR · Email · Backup · RMM' },
      items: ['SentinelOne', 'Libraesva', 'Nakivo', 'NinjaOne', 'OpenText', 'Windows Defender'],
    },
    {
      icon: 'sparkle',
      title: { it: 'AI e LLM', en: 'AI & LLMs' },
      sub: { it: 'Uso professionale nel lavoro quotidiano', en: 'Professional, everyday use' },
      items: ['Claude', 'ChatGPT', 'Prompt engineering', 'AI per scripting e automazione', 'AI per documentazione e analisi'],
    },
    {
      icon: 'terminal',
      title: { it: 'Automazione e DevOps', en: 'Automation & DevOps' },
      sub: { it: 'Script · Provisioning · Container', en: 'Scripting · Provisioning · Containers' },
      items: ['PowerShell', 'Ansible', 'Vagrant', 'Docker / Compose', 'Linux', 'SSH', 'OpenVAS', 'Git / GitHub'],
    },
    {
      icon: 'code',
      title: { it: 'Sviluppo web e database', en: 'Web development & databases' },
      sub: { it: 'Frontend · Backend · API · SQL', en: 'Frontend · Backend · API · SQL' },
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Node.js', 'REST API', 'PostgreSQL', 'MySQL', 'Cloudflare Pages', 'Vercel', 'Figma'],
    },
    {
      icon: 'chart',
      title: { it: 'Programmazione e data science', en: 'Programming & data science' },
      sub: { it: 'Core · Analisi dati · ML', en: 'Core · Data analysis · ML' },
      items: ['C', 'Java', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    },
  ],
}
