const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  const env = {
    TMDB_API_KEY: "a4d43df3db9fe894fda8b274ba849945",
  };

  // next.config.js object
  return {
    env,
  };
};
