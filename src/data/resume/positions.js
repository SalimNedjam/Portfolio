const positions = [
  {
    position: "Laboratoire d'informatique de Sorbonne Université (LIP6)",
    company: 'Projet de recherche: Modification de l\'ordonnanceur de Linux',
    link: 'https://github.com/SalimNedjam/MAScheduler',
    daterange: 'Février 2020 - Juin 2020',
    points: [
      'Modification dans le kernel Linux afin de diminuer la charge sur le scheduler lorsque le détenteur d\'une ressource partagée bloque l\'avancement des autres tâches.',
      "Rajout d'un mécanisme qui permet d'agir directement sur les priorités des tâches lors de la prise du verrou, afin d'accélérer l'exécution des processus.",
      'C, Ordonnancement des threads CFS, OS Linux, Programmation Kernel.',
    ],
  },
  {
    position: "Laboratoire d'informatique de Sorbonne Université (LIP6)",
    company: 'Projet: Implementation d\'un système de fichier sous linux',
    link: 'https://github.com/SalimNedjam/ouiche_fs',
    daterange: 'Juin 2020',
    points: [
      "Conception, réalisation et implémentation dans le kernel Linux d'un système de fichiers avec toutes fonctionnalités nécessaires.",
      'C, Système de Fichier Virtuel, OS Linux, Programmation Kernel.',
    ],
  },
  {
    position: "Laboratoire d'informatique de Sorbonne Université (LIP6)",
    company: 'Stage: Site web pour l\'évaluation efficace des traveaux étudiants',
    link: 'https://github.com/SalimNedjam/evalml',
    daterange: 'Juillet 2019 - Septembre 2019',
    points: [
      "Conception et réalisation d'un site web intuitif qui permet aux étudiants de soumettre leurs travaux et d'être noté.",
      "Réalisation de la partie client et serveur d'un site web qui permet d'une part de communiqué avec une base de données, d'organiser et de traiter les tâches d'évaluation des travaux soumis afin d'optimiser la bande passante ainsi que le rendement de la machine hôte.",
      'Django, RabbitMQ, MangoDB, ReactJS, Redux ',
    ],
  },
  {
    position: "Laboratoire d'informatique de l'USTHB",
    company: 'Stage: Application mobile pour l\'aide au suivi alimentaire',
    link: 'https://github.com/SalimNedjam/NutritionApp',
    daterange: 'Janvier 2018 - Juin 2020',
    points: [
      'Création d\'une application mobile qui aide à gérer un régime alimentaire.',
      'Réalisation de la partie client et serveur ainsi que les communications avec la base de données.',
      'Android SDK, Java, RDF, SPARQL, Firebase.',
    ],
  },
];

export default positions;
