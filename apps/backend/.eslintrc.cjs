module.exports = {
  root: true,
  extends: ['custom/node'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
