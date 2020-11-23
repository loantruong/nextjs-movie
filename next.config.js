const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const env = {
    TMDB_API_KEY: "a4d43df3db9fe894fda8b274ba849945",
  };

  return {
    env,
  };
};
