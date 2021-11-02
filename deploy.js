const {execSync} = require('child_process');
const chalk = require('chalk');
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const config = {
    user: "dsstuff",
    password:   "VJh9w2sDKH82",
    host:       "dsstuff.altervista.org",
    port:       21,
    localRoot:  __dirname + "/dist",
    remoteRoot: "/resume/",
    include: ["*", "**/*"],      // this would upload everything except dot files
    // include: ["*.php", "dist/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    // exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false
};

try {
    console.log(chalk.cyan('INFO: init build'));
    execSync('npm run build');
    console.log(chalk.cyan('INFO: end build'));

    console.log(chalk.cyan('INFO: init deploy'));
    ftpDeploy
        .deploy(config)
        .then(() => {
            console.log(chalk.cyan('INFO: end deploy'));

            execSync('rm -rf dist');

            console.log(chalk.green('SUCCESS: see on http://' + config.host + config.remoteRoot));
        })
        .catch(err => {
            console.log(err);
        });
} catch (err) {
}
