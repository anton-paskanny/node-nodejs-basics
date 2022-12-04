import { Worker } from 'worker_threads';
import os from 'os';

export const performCalculations = async () => {
    const cpusArr = os.cpus();
    let startNum = 10;

    const workersResult = await Promise.allSettled(cpusArr.map(cpu => {
        return new Promise((res, rej) => {
            const worker = new Worker('./worker.js', { workerData: { num: startNum++ } });
        
            worker.on('message', data => {
                console.log('Worker is sending data to parent thread: ', data);
                
                res(data);
            });
    
            worker.on('error', err => {
                rej(err);
            });
        });
    }))

    const res = workersResult.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'err',
        data: status === 'fulfilled' ? value : null,
    }));

    console.log(res);

    return res;
};

performCalculations();