// TODO Add a couple lines about each project
const data = [
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
