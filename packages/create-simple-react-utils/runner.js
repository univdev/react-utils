import { Command } from 'commander';
import packageJson from './package.json' with { type: 'json' };
import { exec } from 'node:child_process';
import { Glob } from 'glob';
import fs from 'node:fs';
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

function removeOriginalGitFiles(packageName) {
  console.log(chalk.green(`${packageName} 폴더 내에 설정 된 기존 git 파일을 제거합니다.`));
  return new Promise((resolve) => {
    fs.rmdir(`./${packageName}/.git`, () => {
      resolve(true);
    });
  }, []);
}

function changePackageNames(packageName) {
  return new Promise((resolve) => {
    console.log(chalk.green('패키지 이름을 변경하고 있습니다.'));
    const g = new Glob(`./${packageName}/**/package.json`, 'g');
  
    for (const file of g) {
      fs.readFile(file, 'utf8', (_, data) => {
        const updatedData = data.replace('simple-react-utils', packageName);
  
        fs.writeFile(file, updatedData, 'utf8', (err) => console.error(err));
      });
  
      console.log(chalk.green('패키지 이름이 변경 되었습니다!'));
      return resolve();
    }
  });
}

function removePackageRunner(packageName) {
  return new Promise((resolve) => {
    return fs.rmdir(`./${packageName}/packages/create-simple-react-utils`, () => {
      resolve();
    });
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
        .then(() => removeOriginalGitFiles(name))
        .then(() => changePackageNames(name))
        .then(() => removePackageRunner(name))
        .then(() => {
          console.log('------------------------------');
          console.log(chalk.green.bold('패키지 설정이 완료 되었습니다.'))
        });
    });

  program.parse(process.argv);
}

init();