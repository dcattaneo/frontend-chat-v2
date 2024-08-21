const adventureCharacters = [
  "bmo.png",
  "bmo2.png",
  "finn.png",
  "flameprincess.png",
  "iceking.png",
  "jake.png",
  "ladyunicorn.png",
  "lsp.png",
  "marceline.png",
  "princessbubblegum.png",
  "slimeprincess.png",
  "snail.png",
  "thelich.png",
];

export function getRandomCharacters() {
  return adventureCharacters[
    Math.floor(Math.random() * adventureCharacters.length)
  ];
}
