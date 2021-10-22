export const getRepositories = async (user: string) => {
  const { json } = await fetch(`https://api.github.com/users/${user}/repos`);

  const data = await json();
};
