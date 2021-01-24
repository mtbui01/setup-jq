import * as core from '@actions/core'
import * as os from 'os'
import {Installer} from './installer'

const toolName = 'app'

export class AppInstaller implements Installer {
  async install(version: string) {
    const url = getDownloadUrl(version, toolName)
    console.log(`install app called version : ${version} url : ${url}`)
  }
}

function getDownloadUrl(version: string, tool: string): string {
  let appname = getAppName(tool)
  return `https://github.com/stedolan/jq/releases/download/jq-${version}/${appname}`
}

function getAppName(tool: string) {
  let appname: string | null = null
  switch (os.platform()) {
    case 'linux':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-linux64`
          break
      }
      break
    case 'darwin':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-osx-amd64`
          break
      }
      break
    case 'win32':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-win64.exe`
          break
      }
      break
  }
  if (!appname) {
    throw `Unsupported platform. platform:${os.platform()}, arch:${os.arch()}`
  }
  return appname
}
