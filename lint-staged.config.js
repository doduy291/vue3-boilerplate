module.exports = {
  "./src/**/*.(vue|ts|js)": (filenames) => `npx eslint ${filenames.join(" ")}`,
  "./src/**/*.(css|scss|sass)": (filenames) =>
    `npx stylelint ${filenames.join(" ")}`,
};
