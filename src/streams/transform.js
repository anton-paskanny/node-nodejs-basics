import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const revertData = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join(''));
        }
    })

    pipeline(
        process.stdin,
        revertData,
        process.stdout,
        err => {
            console.log('Error: ', err);
        }
    )
};

transform();