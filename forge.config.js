const package = require("./package.json")
const { execSync } = require("child_process")

const version = package.version

module.exports = {
    packagerConfig: {
        icon: "./build/icon",
        name: "Resistor Calculator",
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
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "resistor-calculator",
                setupIcon: "./build/icon.ico",
                setupExe: `resistor-calculator-${version}-setup.exe`,
                iconUrl: "https://raw.githubusercontent.com/ArthurLobopro/resistor-calculator/master/build/icon.ico"
            }
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
    hooks: {
        async generateAssets() {
            return new Promise(async (resolve, reject) => {
                try {
                    console.log("Compiling TypeScript...")
                    execSync("yarn tsc")
                    console.log("Compiling SASS...")
                    execSync("yarn sass-compiler --compile")
                    resolve()
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}
