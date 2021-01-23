import * as core from '@actions/core'
import {Installer} from './installer'

export class AppInstaller implements Installer {
  async install(version: string) {
    core.debug('install app called ${version}')
    console.log('install app called' + version)
  }
}
