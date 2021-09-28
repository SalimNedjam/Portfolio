const skills = [
  {
    title: 'C',
    competency: 4,
    category: ['Languages', 'Operating Systems'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Mobile'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Operating Systems'],
  },
  {
    title: 'Assembly',
    competency: 3.5,
    category: ['Languages', 'Operating Systems'],
  },
  {
    title: 'QEMU',
    competency: 3.5,
    category: ['Operating Systems'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'JEE',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MYSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Swift',
    competency: 2.5,
    category: ['Languages', 'Mobile'],
  },
  {
    title: 'Objective-C',
    competency: 2,
    category: ['Languages', 'Mobile'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3.5,
    category: ['Tools'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },

  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Hbase',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Cassandra',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Zookeeper',
    competency: 2,
    category: ['Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
