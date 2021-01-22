import * as core from '@actions/core'
import * as installer from './installer';

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    core.debug(`version ${version} `) 

    core.debug(new Date().toTimeString())
    await installer.get(version)
    core.debug(new Date().toTimeString())

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
