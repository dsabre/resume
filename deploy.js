const {execSync} = require("child_process");
const fs         = require("fs");
const chalk      = require("chalk");

// github branch pages name
const PAGES_BRANCH_NAME = 'gh-pages';

const execSyncVerbose = command => {
    console.log(command);
    execSync(command);
};

// get current branch name
let currentBranch = execSync("git branch |grep \\* |sed 's/\\* //g'");
currentBranch     = currentBranch.toString().trim();

const endProcess = (folderName) => {
    console.log('\n' + chalk.cyan(`Return to ${currentBranch} branch`));

    if (folderName) {
        execSyncVerbose(`rm -rf ${folderName}`);
    } else {
        execSyncVerbose('rm -rf dist');
        execSyncVerbose('rm -rf build');
    }

    execSyncVerbose(`git checkout -f ${currentBranch}`);
    execSyncVerbose(`git branch -D ${PAGES_BRANCH_NAME}`);
};

try {
    console.log(chalk.cyan('Deploy started from branch') + ' ' + chalk.bgBlue(chalk.yellowBright(currentBranch)));

    try {
        console.log('\n' + chalk.cyan('Committing uncommitted changes'));
        execSyncVerbose('git add .');
        execSyncVerbose('git commit -m "Develop"');
        execSyncVerbose('git pull');
        execSyncVerbose('git push');
    } catch (err) {
        console.error(chalk.yellow('Nothing to commit'));
    }

    console.log('\n' + chalk.cyan('Build project'));
    execSyncVerbose(`git checkout --orphan ${PAGES_BRANCH_NAME}`);
    execSyncVerbose('npm run build');

    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    console.log('\n' + chalk.cyan(`Commit ${folderName} directory`));
    execSyncVerbose(`git --work-tree ${folderName} add --all`);
    execSyncVerbose(`git --work-tree ${folderName} commit -m "GitHub pages deploy"`);

    console.log('\n' + chalk.cyan(`Pushing to ${PAGES_BRANCH_NAME}`));
    execSyncVerbose(`git push origin HEAD:${PAGES_BRANCH_NAME} --force`);

    endProcess(folderName);

    console.log('\n' + chalk.green('SUCCESSFULLY DEPLOYED'));
} catch (err) {
    console.error(chalk.red(err.message));

    endProcess(false);

    process.exit(1);
}
