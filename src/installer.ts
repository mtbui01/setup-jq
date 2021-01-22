import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

export async function get(version: string): Promise<string> {
  const toolPath = tc.find('ant', version)
  console.log('tool path  ${toolPath}')
  return toolPath
}
