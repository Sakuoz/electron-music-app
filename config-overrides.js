const {
  override,
  fixBabelImports,
  addBabelPlugins,
  addBabelPresets,
  removeModuleScopePlugin
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  removeModuleScopePlugin(),
  ...addBabelPlugins([
    'emotion',
    {
      sourceMap: true,
      autoLabel: false,
      labelFormat: '[local]',
      cssPropOptimization: true
    }
  ]),
  ...addBabelPresets(['@emotion/babel-preset-css-prop'])
)
