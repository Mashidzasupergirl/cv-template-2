const projectsContainer = document.getElementById('projectsContainer');
const articlesContainer = document.getElementById('articlesContainer');
const otherContainer = document.getElementById('otherContainer');

const projects = [
  {
    image: 'img/project-1.png',
    name: 'Anti-Corruption Foundation',
    link: 'https://acf.international/',
    description:
    'Corruption kills. As Ukrainian cities are bombed by Putin, this has never been more obvious. Putin and his circle have done everything to stay in power — and steal, and steal, and steal some more. High on their own supply, they started a devastating war.',
    tags: ['PutinHujlo', 'NoWar', 'FreeNavalny']
  },
  {
    image: 'img/project-2.png',
    name: 'Smart Voting',
    link: 'https://votesmart.appspot.com/',
    description:
      'Elections are the last safe form of protest. This is a way to unite and say: "We are against the criminal government." We are convinced that now, when they are trying to completely deprive each of us of the right to participate in politics, it is more important than ever to participate in it.',
    tags: ['VoteSart', 'PutinHujlo'],
  },


];

const otherProjects = [
  {
    name: 'I was poisoned by Putin',
    link: 'https://en.wikipedia.org/wiki/Poisoning_of_Alexei_Navalny#:~:text=On%2020%20August%202020%2C%20Russian,was%20hospitalized%20in%20serious%20condition.',
    description:
      'On 20 August 2020, I was poisoned with a Novichok nerve agent and was hospitalized in serious condition.',
    tags: ['Novichok'],
  },
  {
    name: 'Now I am in prison',
    link: 'https://en.wikipedia.org/wiki/Poisoning_of_Alexei_Navalny#Return_and_imprisonment',
    description:
      '6/8 In my last word, I spoke, of course, about the war. About how it became a direct consequence of corruption and degradation. A bloody cover for the failure of the Putin regime.',
    tags: ['Stand with Ukraine'],
  },

];

const articles = [
  {
    image: 'img/article-1.png',
    title: 'An ailing Navalny describes a prison move that will extend his isolation.',
    link: 'https://www.nytimes.com/2023/02/01/world/europe/navalny-russia-prison.html',
    description:
      'The New York Times article',
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="card">
    <div class="image-container" style="background-image: url('')">
      <img src="${item.image}"/>
    </div>
    <div class="card-text">
      <h2>${item.name}</h2>
      <p>
      ${item.description}
        <span class="arrow-link">>></span>
      </p>
    </div>
    <div class="tags-container" id="tags">
      ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
    </div>
  </div>
</a>
  `;
});

otherProjects.forEach((item) => {
  otherContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="content-container">
    <h2>${item.name}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
  <div class="other-tags-container">
  ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
  </div>
</a>
  `;
});

articles.forEach((item) => {
  articlesContainer.innerHTML += `
  <a
  class="card"
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="image-container">
    <img
      class="image"
      src=${item.image}
      alt="code-article"
    />
  </div>
  <div class="card-text">
    <h2>${item.title}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
</a>
  `;
});
