// ─────────────────────────────────────────────────────────────
//  Progetti. L'ordine dell'array è l'ordine sul sito.
//  category: 'security' | 'web' | 'data' | 'software'
//  cover: immagine in /public/covers (consigliato .webp, ~1200px)
//  links[].type: 'repo' | 'pdf' | 'live'
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: 'web', label: { it: 'Web', en: 'Web' } },
  { id: 'security', label: { it: 'Cybersecurity', en: 'Cybersecurity' } },
  { id: 'data', label: { it: 'Data & AI', en: 'Data & AI' } },
  { id: 'software', label: { it: 'Software', en: 'Software' } },
]

export const projects = [
  {
    slug: 'soave',
    category: 'web',
    wip: true,
    title: 'SOAVE',
    excerpt: {
      it: 'Sito ufficiale di SOAVE, collettivo che organizza club night e DJ set in location sempre diverse.',
      en: 'Official website for SOAVE, a collective running club nights and DJ sets in ever-changing venues.',
    },
    cover: '/covers/soave.webp',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages', 'Google Sign-In'],
    body: {
      it: 'Un sito su misura per raccontare il progetto SOAVE e accompagnare il pubblico da una serata all’altra: prossimo evento sempre in primo piano, archivio dei “volumi” passati e foto da scaricare. Design scuro costruito attorno al blu del logo, pensato prima di tutto per lo smartphone.',
      en: 'A custom website that tells the SOAVE story and keeps the audience engaged from one night to the next: the next event always up front, an archive of past “volumes” and downloadable photos. A dark design built around the logo’s blue, designed mobile-first.',
    },
    highlights: {
      it: [
        'Biglietto del prossimo evento con countdown e lista d’ingresso',
        'Archivio eventi e gallerie fotografiche in alta risoluzione',
        'Sezioni merch e community',
        '“Ruota del mese” con accesso Google e premi per l’evento successivo',
      ],
      en: [
        'Next-event ticket with countdown and guest list',
        'Event archive and high-resolution photo galleries',
        'Merch and community sections',
        '“Wheel of the month” with Google sign-in and prizes for the next event',
      ],
    },
    links: [
      { type: 'live', url: 'https://soave.pages.dev/' },
    ],
  },
  {
    slug: 'cashcontrol',
    category: 'web',
    wip: true,
    title: 'CashControl',
    excerpt: {
      it: 'App per gestire il proprio patrimonio: spese, entrate, risparmi e investimenti.',
      en: 'App to manage personal finances: expenses, income, savings and investments.',
    },
    cover: '/covers/cashcontrol.webp',
    tags: ['Web app', 'API'],
    body: {
      it: 'Nata da un’esigenza personale: troppi fogli Excel e note sparse per tenere traccia di spese, saldo e risparmi. L’obiettivo è un’app semplice, sicura e personalizzabile, adatta a chiunque.',
      en: 'Born from a personal need: too many spreadsheets and scattered notes to track expenses, balance and savings. The goal is a simple, secure and customisable app that works for anyone.',
    },
    highlights: {
      it: [
        'Registrazione di entrate e uscite',
        'Risparmi suddivisi in macro-aree personalizzabili',
        'Investimenti con andamento di mercato via API',
      ],
      en: [
        'Track income and expenses',
        'Savings split into customisable categories',
        'Investments with live market data via API',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/CashControl.it' },
    ],
  },
  {
    slug: 'findmatch',
    category: 'web',
    title: 'FindMatch',
    excerpt: {
      it: 'Web app per organizzare partite sportive amatoriali e trovare compagni di gioco.',
      en: 'Web app to organise amateur sports matches and find people to play with.',
    },
    cover: '/covers/findmatch.webp',
    tags: ['Vue', 'Node.js', 'PostgreSQL', 'Vite', 'Bootstrap', 'JavaScript'],
    body: {
      it: 'Spesso si rinuncia a giocare perché manca il numero minimo di partecipanti. FindMatch permette di creare e trovare partite in modo immediato, facilitando l’incontro tra persone con la stessa passione sportiva.',
      en: 'People often skip a game because there aren’t enough players. FindMatch makes it quick to create and find matches, bringing together people who share the same sport.',
    },
    highlights: {
      it: [
        'Creazione di partite: sport, luogo, data, orario e numero di giocatori',
        '8 sport supportati, dal calcio a 5 al padel',
        'Ricerca partite e scelta del ruolo (es. calcio)',
      ],
      en: [
        'Create matches: sport, place, date, time and number of players',
        '8 supported sports, from 5-a-side football to padel',
        'Search matches and pick your role (e.g. football)',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Findmatch-Project' },
    ],
  },
  {
    slug: 'automated-lab',
    category: 'security',
    title: 'Automated Laboratory',
    excerpt: {
      it: 'Laboratorio automatizzato che crea e configura VM Windows e Ubuntu con Ansible, Vagrant e GPO.',
      en: 'Automated lab that provisions and configures Windows and Ubuntu VMs with Ansible, Vagrant and GPO.',
    },
    cover: '/covers/automated-lab.webp',
    tags: ['Vagrant', 'Ansible', 'BadBlood', 'GPO', 'Windows Defender', 'WSL', 'SSH'],
    body: {
      it: 'L’obiettivo era rendere veloci e ripetibili i processi di preparazione degli ambienti di test usati in azienda. Con un solo comando il laboratorio crea un setup completo e funzionante.',
      en: 'The goal was to make the preparation of the company’s test environments fast and repeatable. A single command brings up a complete, working setup.',
    },
    highlights: {
      it: [
        'Provisioning di VM Windows e Ubuntu con Vagrant',
        'Configurazione e policy (GPO) applicate tramite Ansible',
        'Script inclusi per scaricare i pacchetti necessari',
      ],
      en: [
        'Windows and Ubuntu VMs provisioned with Vagrant',
        'Configuration and policies (GPO) applied through Ansible',
        'Bundled scripts to download all required packages',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Automation-Vagrant-and-Ansible-Lab-and-GPO' },
      { type: 'pdf', url: '/docs/Project_Report_Ansible.pdf' },
    ],
  },
  {
    slug: 'ansible-deploy',
    category: 'security',
    title: 'Ansible Deploy — PenTest, PwnDoc, MageAI',
    excerpt: {
      it: 'Deploy automatizzato di strumenti di penetration testing, PwnDoc e MageAI con Ansible su WSL.',
      en: 'Automated deployment of penetration-testing tools, PwnDoc and MageAI with Ansible on WSL.',
    },
    cover: '/covers/ansible-deploy.webp',
    tags: ['Ansible', 'PowerShell', 'WSL', 'Docker', 'PwnDoc', 'MageAI'],
    body: {
      it: 'Playbook Ansible che installano e configurano in modo automatico l’infrastruttura di supporto alle attività di Red Teaming: dagli strumenti di pentest alla reportistica con PwnDoc, fino alle pipeline dati con MageAI.',
      en: 'Ansible playbooks that automatically install and configure the infrastructure supporting Red Team activities: from pentest tools to reporting with PwnDoc and data pipelines with MageAI.',
    },
    highlights: {
      it: [
        'Installazione ripetibile e idempotente su WSL',
        'Integrazione di PwnDoc per la reportistica dei test',
        'MageAI per l’elaborazione dei dati raccolti',
      ],
      en: [
        'Repeatable, idempotent setup on WSL',
        'PwnDoc integration for test reporting',
        'MageAI for processing the collected data',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Ansible_Deploy-Pentest-Pwndoc-Mage_AI' },
    ],
  },
  {
    slug: 'openvas',
    category: 'security',
    title: 'OpenVAS Deploy',
    excerpt: {
      it: 'Deploy automatizzato di OpenVAS con architettura separata Agent / Central.',
      en: 'Automated OpenVAS deployment with a split Agent / Central architecture.',
    },
    cover: '/covers/openvas.webp',
    tags: ['Ansible', 'PowerShell', 'WSL', 'OpenVAS'],
    body: {
      it: 'Automazione dell’installazione di OpenVAS per il vulnerability scanning, con separazione tra nodi Agent e un nodo Central che raccoglie i risultati.',
      en: 'Automated installation of OpenVAS for vulnerability scanning, with separate Agent nodes and a Central node that collects the results.',
    },
    highlights: {
      it: [
        'Architettura distribuita Agent / Central',
        'Setup automatizzato con Ansible e PowerShell',
      ],
      en: [
        'Distributed Agent / Central architecture',
        'Automated setup with Ansible and PowerShell',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Ansible_Deploy-Pentest-Pwndoc-Mage_AI' },
    ],
  },
  {
    slug: 'multiclass-classification',
    category: 'data',
    title: 'Multi-Class Image Classification',
    excerpt: {
      it: 'Classificazione di immagini multiclasse con reti pre-addestrate ResNet50 ed EfficientNet.',
      en: 'Multi-class image classification with pre-trained ResNet50 and EfficientNet networks.',
    },
    cover: '/covers/multiclass.webp',
    tags: ['Python', 'ResNet50', 'EfficientNet', 'Transfer learning'],
    body: {
      it: 'Sviluppo di un’architettura di rete neurale per un problema di classificazione multiclasse, partendo da modelli pre-addestrati e applicando tecniche di preprocessing per migliorare le prestazioni.',
      en: 'Design of a neural network architecture for a multi-class classification problem, starting from pre-trained models and applying preprocessing techniques to improve performance.',
    },
    highlights: {
      it: [
        'Transfer learning con ResNet50 ed EfficientNet',
        'Preprocessing e confronto delle prestazioni',
        'Report PDF con metodologia e risultati',
      ],
      en: [
        'Transfer learning with ResNet50 and EfficientNet',
        'Preprocessing and performance comparison',
        'PDF report with methodology and results',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Multi-Class_Classification_ResNet50-EfficientNet' },
      { type: 'pdf', url: '/docs/Project_Report_Multiclass.pdf' },
    ],
  },
  {
    slug: 'data-analysis',
    category: 'data',
    title: 'Data Science Jobs Analysis',
    excerpt: {
      it: 'Analisi dei salari nel settore Data Science (2020–2023) con Pandas, NumPy e Seaborn.',
      en: 'Salary analysis of Data Science jobs (2020–2023) with Pandas, NumPy and Seaborn.',
    },
    cover: '/covers/data-analysis.webp',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    body: {
      it: 'Notebook di analisi su un dataset di offerte di lavoro in ambito Data Science: ruolo, categoria, stipendio, esperienza, modalità di lavoro e dimensione aziendale.',
      en: 'Analysis notebook on a dataset of Data Science job offers: role, category, salary, seniority, work mode and company size.',
    },
    highlights: {
      it: [
        'Caricamento e pulizia del dataset',
        'Salari medi per categoria e località',
        'Focus sulla categoria Data Engineering',
        'Istogrammi e heatmap con Matplotlib / Seaborn',
      ],
      en: [
        'Dataset loading and cleaning',
        'Average salaries by category and location',
        'Deep dive into Data Engineering',
        'Histograms and heatmaps with Matplotlib / Seaborn',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/Data-Analysis-ipynb-numpy' },
    ],
  },
  {
    slug: 'pacman',
    category: 'software',
    title: 'PacMan 2.0',
    excerpt: {
      it: 'Il classico Pac-Man rivisitato in Java/JavaFX, con architettura moderna e Strategy pattern.',
      en: 'The classic Pac-Man reimagined in Java/JavaFX, with a modern architecture and the Strategy pattern.',
    },
    cover: '/covers/pacman.webp',
    tags: ['Java', 'JavaFX', 'Gradle', 'Strategy pattern'],
    body: {
      it: 'Un applicativo che fa rivivere il Pac-Man del 1980 con interfaccia e architettura modernizzate, mantenendo il gameplay originale.',
      en: 'An application that brings back the 1980 Pac-Man with a modernised interface and architecture, while keeping the original gameplay.',
    },
    highlights: {
      it: [
        'Quattro fantasmi con comportamenti distinti (Strategy pattern)',
        'Power-pill e modalità “scared” per mangiare i fantasmi',
        'Frutta bonus con poteri speciali: velocità e congelamento',
        'Avanzamento di livello, suoni e sprite',
      ],
      en: [
        'Four ghosts with distinct behaviours (Strategy pattern)',
        'Power pills and “scared” mode to eat the ghosts',
        'Bonus fruit with special powers: speed and freeze',
        'Level progression, sounds and sprites',
      ],
    },
    links: [
      { type: 'repo', url: 'https://github.com/AlecRepos/PacMan2.0_Game-JavaFX-Gradle-with-sounds-sprites' },
    ],
  },
]
