module.exports = {
  // lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // lint and format MarkDown and JSON
  '**/*.(md|json)': filenames => `npx prettier --write ${filenames.join(' ')}`,
};
