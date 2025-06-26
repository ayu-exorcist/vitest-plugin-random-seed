'use strict';

let seed;
function RandomSeed(options) {
  const shouldLog = seed == null;
  seed ??= options?.seed ?? getEnvSeed() ?? getRandomSeed();
  const definition = options?.define ?? "import.meta.test.SEED";
  return {
    name: "random-seed",
    apply: (_, { mode }) => mode === "test",
    config: () => {
      if (shouldLog) {
        console.log(`Test seed: \x1B[1m\x1B[36m${seed}\x1B[0m`);
      }
      return {
        define: {
          [definition]: JSON.stringify(seed)
        }
      };
    }
  };
}
function getRandomSeed() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}
function getEnvSeed() {
  const env = process.env.TEST_SEED?.trim();
  if (!env) return;
  const num = Number(env);
  if (isNaN(num)) return;
  return num;
}

module.exports = RandomSeed;
