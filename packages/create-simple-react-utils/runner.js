// const { Command } = require('commander');
import { Command } from 'commander';
// const rootPackageJson = require('../../package.json');
import rootPackageJson from '../../package.json' with { type: 'json' };
// const packageJson = require('./package.json');
import packageJson from './package.json' with { type: 'json' };
// const { exec } = require('node:child_process');
import { exec } from 'node:child_process';
// const { Glob } = require('glob');
import { Glob } from 'glob';
// const fs = require('node:fs');
import fs from 'node:fs';
// const chalk = require('chalk');
import chalk from 'chalk';

function gitClone(packageName) {
  console.log(`\`${chalk.white.italic(packageJson.repository.url)}\`에서 프로젝트를 복사하고 있습니다.`);
  return new Promise((resolve) => {
    return exec(`git clone ${packageJson.repository.url} ${packageName}`, () => {
      console.log(chalk.green.bold('프로젝트 복사 완료!'));
      return resolve();
    });
  });
}

function changePackageNames(packageName) {
  return new Promise((resolve) => {
    console.log(chalk.green('패키지 이름을 변경하고 있습니다.'));
    const g = new Glob(`./${packageName}/**/package.json`, 'g');
  
    for (const file of g) {
      fs.readFile(file, 'utf8', (_, data) => {
        const updatedData = data.replace(rootPackageJson.packageName, packageName);
  
        fs.writeFile(file, updatedData, 'utf8', (err) => console.error(err));
      });
  
      console.log(chalk.green('패키지 이름이 변경 되었습니다!'));
      return resolve();
    }
  });
}

function init() {
  const program = new Command();

  program
    .name(packageJson.name)
    .version(packageJson.version)
    .arguments('<package_name>')
    .description('패키지를 설치할 때 사용할 새로운 패키지 이름입니다.')
    .action((name) => {
      console.log(chalk.green('simple-react-utils 패키지 설정을 시작합니다.'));
      gitClone(name)
        .then(() => changePackageNames(name))
        .then(() => {
          console.log('------------------------------');
          console.log(chalk.green.bold('패키지 설정이 완료 되었습니다.'))
        });
    });

  program.parse(process.argv);
}

init();