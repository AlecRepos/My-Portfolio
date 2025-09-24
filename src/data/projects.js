export const projects = [
{
slug: 'pacman-2-0',
title: 'PacMan 2.0',
excerpt: 'Realizzazione applicativo PacMan con Java e Gradle + Strategy Pattern',
cover: '/public/CardCover/PacMan2.0.png',
tags: ['Java', 'JavaFX', 'Gradle', 'Strategy pattern'],
body: `\
Il progetto consiste nella realizzazione di un applicativo che permetta agli utenti di rivivere l’emozione del classico Pac‑Man, 
uscito per la prima volta nel 1980, con un’interfaccia e un’architettura modernizzate pur conservando il gameplay originale.

Il software Pac‑Man offre al giocatore la possibilità di controllare l’iconico personaggio giallo in un labirinto popolato 
da puntini da mangiare (dots) e fantasmi ostili. L’obiettivo è raccogliere tutti i punti presenti nella mappa evitando i 
quattro fantasmi, ciascuno con comportamenti di movimento caratteristici: quando si raccolgono le “power‑pill” si attiva 
temporaneamente la modalità “scared” che consente di mangiare i fantasmi per il punteggio extra. Completato il consumo di 
tutti i puntini, il livello avanza e, di tanto in tanto, compare una frutta bonus che conferisce ulteriori punti e 
occasionali poteri speciali come velocità aumentata o congelamento dei fantasmi.`,
links: [
{ label: 'Repository', url: 'https://github.com/AlecRepos/PacMan2.0_Game-JavaFX-Gradle-with-sounds-sprites' }
]
},
{
slug: 'findmatch',
title: 'Findmatch – Organizzatore sportivo',
excerpt: 'Web app per organizzare partite amatoriali (Vue + Node + Postgres).',
cover: '/public/CardCover/FindMatch.png',
tags: ['Vue', 'Node.js', 'Vite', 'Bootstrap', 'JavaScript', 'PostgreSQL'],
body: `\
Negli ultimi anni, la pratica sportiva amatoriale ha assunto un ruolo sempre più centrale nella vita delle persone, non solo per mantenere uno stile di vita sano, ma anche come momento di socializzazione e svago. Tuttavia, uno dei problemi più comuni per chi desidera praticare sport di squadra o individuali è la difficoltà nel trovare compagni o avversari con cui organizzare partite in maniera semplice e veloce. Spesso, infatti, si rinuncia ad allenarsi o a giocare perché manca il numero minimo di partecipanti o non si conoscono persone disponibili nello stesso momento.

Per rispondere a questa esigenza nasce FindMatch, un’applicazione web che permette di organizzare e gestire partite sportive amatoriali in modo immediato ed intuitivo. L’utente ha la possibilità di:
• creare una nuova partita scegliendo lo sport tra Calcio a 5, Calcio a 11, Pallavolo, Beach Volley, Basket, Padel, Beach Tennis o Tennis, specificando 
  luogo, data, orario e numero di giocatori richiesti;
• cercare partite già disponibili e unirsi rapidamente, anche scegliendo il proprio ruolo nel caso di sport come il calcio a 5 e calcio a 11;

Lo scopo principale dell’applicazione è quello di facilitare l’incontro tra persone con la stessa passione sportiva, incentivando la pratica regolare di attività fisica, riducendo le difficoltà logistiche e favorendo nuove occasioni di socializzazione. In questo modo, FindMatch diventa non solo uno strumento per mantenersi allenati, ma anche un mezzo per creare connessioni e vivere lo sport come esperienza condivisa e accessibile a tutti.
`,
links: [
{ label: 'Repository', url: 'https://github.com/AlecRepos/Findmatch-Project' }
]
},
{
slug: 'Cash Control',
title: 'CashControl.it',
excerpt: 'App per organizzare il proprio patrimonio - spese, entrate e risparmi. Attualmente in sviluppo',
cover: '/public/CardCover/CashControl.png',

body: `\
Ho deciso di iniziare a sviluppare questa applicazione, in primis, per una necessità personale. Mi sono ritrovato ad avere troppi fogli excel e note sparse in cui mi segnavo le spese e le uscite, un foglio excel in cui facevo il saldo, un foglio excel in cui controllavo i risparmi. Inoltre, non è ancora presente un'applicazione che possa gestire, in sicurezza, tutto questo.

Feature principali:
- Poter segnarsi le proprie uscite
- Poter segnarsi le proprie entrate
- Poter segnarsi i propri risparmi divisi in un macroaree personalizzabili
- Poter segnarsi i propri investimenti. Con API che tiene traccia delle oscillazioni del mercato

L'applicazione sarà molto semplice da usare e totalmente personalizzabile. L'idea è proprio quella di renderla adatta a chiunque, sia al signore che deve andare in pensione, ma anche al ragazzino che sta iniziando a mettere i primi soldini da parte e ancora, ovviamente non pensa a investirli. 
`,
links: [
{ label: 'Repository', url: 'https://github.com/AlecRepos/CashControl.it' }
]
},
{
slug: 'Data Analysis',
title: 'Data Analysis with ipynb & numpy',
excerpt: 'Web app per organizzare partite amatoriali (Vue + Node + Postgres).',
cover: '/public/CardCover/Data Analysis.png',
tags: ['Python', 'Pandas', 'numpy', 'matplotlib', 'seaborn'],
body: `\
Contenuto del progetto
- Dataset: jobs_dataset.csv, con dati su lavori nel settore Data Science dal 2020 al 2023.
- Variabili principali: anno (work_year), titolo di lavoro (job_title), categoria (job_category), valuta e stipendio (salary, salary_currency, salary_in_usd), residenza, livello di esperienza, tipo di impiego, modalità di lavoro, località dell’azienda e dimensione aziendale.

Analisi:
- Caricamento e pulizia del dataset.
- Calcolo di medie salariali in base a categorie e località.
- Esplorazione della categoria Data Engineering.
- Visualizzazioni con grafici (istogrammi e heatmap tramite Matplotlib/Seaborn).
`,
links: [
{ label: 'Repository', url: 'https://github.com/AlecRepos/Data-Analysis-ipynb-numpy' }
]
},
{
slug: 'MultiClass Classification',
title: 'MultiClass Classification with ResNet50 & EfficientNet',
excerpt: 'Classificazione multiclasse allenando modelli di intelligenza artificiale',
cover: '/public/CardCover/Multi Class.png',
tags: ['ResNet50', 'EfficientNet'],
body: `\
Il progetto è lo sviluppo di un’architettura di rete neurale volta a risolvere un problema di classificazione multi-classe. Ho utilizzato modelli pre-addestrati (ResNet50 e EfficientNet) e tecniche di preprocessing per migliorare le performance. Clicca "Report" per scaricare il PDF di spiegazione`,
links: [
  { label: 'Repository', url: 'https://github.com/AlecRepos/Multi-Class_Classification_ResNet50-EfficientNet' },
  { label: 'PDF', url: '/public/docs/Project_Report_Multiclass.pdf', download: true }
]

},
{
slug: 'Automated Laboratory',
title: 'Automated Laboratory with Ansible & Vagrant + GPO',
excerpt: 'Laboratorio automatizzato per creare e configurare VM Windows e Ubuntu Linux',
cover: '/public/CardCover/Automated Laboratory.png',
tags: ['Vagrant', 'Ansible', 'BadBlood', 'GPO', 'Windows Defender', 'WSL', 'SSH'],
body: `\
Laboratorio automatizzato per creare e configurare VM Windows e Ubuntu Linux. L'obiettivo era rendere veloci e automatici processi che si svolgevano per fare dei test all'interno dell'azienda. Con questo laboratorio si crea un SetUp completo e funzionante. Sono compresi anche script per scaricare i pacchetti necessari`,
links: [
  { label: 'Repository', url: 'https://github.com/AlecRepos/Automation-Vagrant-and-Ansible-Lab-and-GPO' },
  { label: 'PDF', url: '/public/docs/Project_Report_Ansible.pdf', download: true }
]
},
{
slug: 'Ansible Deploy',
title: 'Ansible Deploy - PenTest, PwnDoc, ',
excerpt: 'Deploy automatizzato di PenTest, PwnDoc e MageAI con Ansible su WSL',
cover: '/public/CardCover/Screening.png',
tags: ['Ansible', 'PowerShell', 'WSL', 'PenTest', 'PwnDoc', 'MageAI'],
body: `\
`,
links: [
  { label: 'Repository', url: 'https://github.com/AlecRepos/Ansible_Deploy-Pentest-Pwndoc-Mage_AI' },
  { label: 'PDF', url: '/public/docs/Project_Report_First.pdf', download: true }
]
},
{
slug: 'OpenVAS',
title: 'OpenVas',
excerpt: 'Deploy automatizzato di OpenVAS con divisione Agent e Central & extra',
cover: '/public/CardCover/OpenVAS.png',
tags: ['Ansible', 'PowerShell', 'WSL', 'OpenVAS'],
body: `\
`,
links: [
  { label: 'Repository', url: 'https://github.com/AlecRepos/Ansible_Deploy-Pentest-Pwndoc-Mage_AI' },
  { label: 'PDF', url: '/public/docs/Project_Report_Second.pdf', download: true }
]
},
]