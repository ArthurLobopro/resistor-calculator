module.exports = {
  packagerConfig: {
    icon: "./build/icon",
    ignore: [
      "\\.git",
      "\\.scss",
      "\\.ts",
      "\\.tsx",
      "/build"
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "ArthurLobopro",
          name: "resistor-calculator"
        },
        prerelease: false,
        draft: true
      }
    }
  ],
}
