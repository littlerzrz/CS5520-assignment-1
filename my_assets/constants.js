const colors = {
  darkGreen: "#2B4D4F",
  darkBlue: "#8EB8CC",
  gold: "#B1A172",
  lightBlue: "#C5E3F7",
  darkRed: "#EB5F5F",
  white: "#fff",
};

const gradients = {
  start: { colors: [colors.white, colors.darkBlue], locations: [0.1, 0.9] },
  game: { colors: [colors.gold, colors.lightBlue], locations: [0.2, 1] },
  final: { colors: [colors.white, colors.darkGreen], locations: [0.1, 1] },
};



export { colors, gradients };
