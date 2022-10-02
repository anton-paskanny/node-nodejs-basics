import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const chProcess = spawn('node', [`./files/script.js`, ...args.split(' ')]);
    
    process.stdin.on('data', data => chProcess.stdin.write(data));

    chProcess.stdout.on('data', data => {
        console.log(data.toString());
        process.stdout.write(data);
    });
};


spawnChildProcess('--version --kek');