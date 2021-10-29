const packageJson = require('./package.json');

module.exports = {
  webpack: (config, { webpack }) => {
    const { ModuleFederationPlugin } = webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          app2: 'app2@//localhost:3002/remoteEntry.js',
        },
        shared: {
          '@module-federation/nextjs-mf/lib/noop': {
            eager: false,
          },
          react: {
            eager: true,
            singleton: true,
            requiredVersion: packageJson.dependencies.react,
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: packageJson.dependencies['react-dom'],
          },
        },
      }),
    );

    return config;
  },
};
