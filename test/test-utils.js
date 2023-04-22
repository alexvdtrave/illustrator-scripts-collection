function reload(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
};

module.exports = { reload };