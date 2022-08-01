// TODO: remove hardcoded data; use the github api instead
// https://api.github.com/repos/andrejjurkin/template-bhai/stats/contributors
// https://api.github.com/repos/AndrejJurkin/template-bhai/stargazers

export interface Stats {
  templates: number;
  contributors: number;
  commits: number;
  "github stars": number;
}

const stats: Stats = {
  templates: 20,
  contributors: 6,
  commits: 100,
  "github stars": 34,
};

export interface Contributor {
  name: string;
  username: string;
  avatarUrl: string;
}

const contributors: Contributor[] = [
  {
    name: "Andrej",
    username: "andrejjurkin",
    avatarUrl: "https://avatars.githubusercontent.com/u/6149523?v=4",
  },
  {
    name: "Subho",
    username: "subhoghoshX",
    avatarUrl: "https://avatars.githubusercontent.com/u/108616679?v=4",
  },
  {
    name: "Zougari",
    username: "zougari47",
    avatarUrl: "https://avatars.githubusercontent.com/u/24995094?v=4",
  },
  {
    name: "Chigala",
    username: "chigala",
    avatarUrl: "https://avatars.githubusercontent.com/u/92148630?v=4",
  },
  {
    name: "Karthik",
    username: "Karthik-315",
    avatarUrl: "https://avatars.githubusercontent.com/u/23008566?v=4",
  },
  {
    name: "Dharmik",
    username: "dharmik48",
    avatarUrl: "https://avatars.githubusercontent.com/u/64529217?v=4",
  },
  {
    name: "Mayank",
    username: "mayank-ks",
    avatarUrl: "https://avatars.githubusercontent.com/u/62908116?v=4",
  },
];

// ====================================================================== //

export async function getStats() {
  return stats;
}

export async function getContributors() {
  return contributors;
}
