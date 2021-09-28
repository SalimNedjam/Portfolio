// TODO Add a couple lines about each project
const data = [
  {
    title: 'Sécurisation de la migration des machines virtuelles sur QEMU',
    subtitle: 'Migration fingerprints',
    image: '/images/projects/FINGERPRINT.png',
    date: '2021',
    desc:
    "Génération d'empreintes de machine virtuelle pour l'enregistrer dans la blockchain afin de sécuriser l'intégrité des données du transfert dans les cas suivants :"
    + 'Migrations froides.'
    + 'Migrations à chaud avec disque partagé.'
    + 'Migrations à chaud sans disque partagé.',
  },
  {
    title: 'MAScheduler',
    subtitle: 'Mutex Aware Scheduler',
    link: 'https://github.com/SalimNedjam/MAScheduler',
    image: '/images/projects/MAS.png',
    date: '2020',
    desc:
    'Modification dans le kernel Linux afin de diminuer la charge sur le scheduler '
    + 'lorsque le détenteur d\'une ressource partagée bloque l\'avancement des autres tâches.'
    + "Rajout d'un mécanisme qui permet d'agir directement sur les priorités des tâches lors de"
    + "la prise du verrou, afin d'accélérer l'exécution des processus.",
  },
  {
    title: 'OUICHEFS',
    subtitle: 'Implementation d\'un système de fichier sous linux',
    link: 'https://github.com/SalimNedjam/ouiche_fs',
    image: '/images/projects/OUICHEFS.png',
    date: '2020',
    desc:
    "Conception, réalisation et implémentation dans le kernel Linux d'un système de fichiers avec toutes fonctionnalités nécessaires.",
  },
];

export default data;
