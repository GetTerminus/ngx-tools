module.exports = {
  branches: 'release',
  plugins: [
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING CHANGES',
            'BREAKING',
          ],
        },
        writerOpts: {
          commitsSort: [
            'subject',
            'scope',
          ],
        },
      },
    ],
    '@semantic-release/git',
  ],
  verifyConditions: [
    'condition-circle',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  getLastRelease: '@semantic-release/npm',
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md',
    },
    {
      path: '@semantic-release/git',
      // eslint-disable-next-line no-template-curly-in-string
      message: '📚 Add ${nextRelease.version} release notes [skip ci]',
    },
  ],
  publish: [
    {
      path: '@semantic-release/exec',
      // eslint-disable-next-line no-template-curly-in-string
      cmd: './tools/ci/inject-version-number.sh ${nextRelease.version}',
    },
    {
      path: '@semantic-release/npm',
      npmPublish: true,
      pkgRoot: 'dist/ngx-tools',
    },
    {
      path: '@semantic-release/github',
      assets: [
        'CHANGELOG.md',
      ],
      npmPublish: false,
    },
  ],
};
