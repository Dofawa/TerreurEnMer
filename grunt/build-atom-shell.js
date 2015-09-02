module.exports = function(grunt) {
  return {
    tag: 'master',
    buildDir: (process.env.TMPDIR || process.env.TEMP || '/tmp') + '/atom-shell',
    projectName: 'terreurenmer',
    productName: 'TerreurEnMer'
  };
};
