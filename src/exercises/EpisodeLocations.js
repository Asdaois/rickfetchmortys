const getData = require('../getData');
const { extractIndexFromUrl } = require('../helpers/extractIndexFromUrl');

const EpisodeLocations = async () => {
  const [allLocations, allCharacters, episodes] = await getData();

  const results = episodes.map((episode) => {
    const locations = new Set();

    episode.characters.forEach((characterUrl) => {
      const characterSchema = allCharacters[extractIndexFromUrl(characterUrl)];
      if (characterSchema?.origin) { locations.add(characterSchema.origin.name); }
    });

    return { name: episode.name, episode: episode.episode, locations: Array.from(locations) };
  });

  return { exerciseName: 'Episode Locations', results };
};

module.exports = EpisodeLocations;
