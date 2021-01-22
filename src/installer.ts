import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as path from 'path';


export async function get(version: string) {
  let toolPath: string;
  toolPath = tc.find('ant', version);
  core.debug('tool path  ${toolPath}');
}
