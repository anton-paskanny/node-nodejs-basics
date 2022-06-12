export const parseEnv = () => {
    for (let value in process.env) {
        value.startsWith('RSS_') && console.log(`${value}=${process.env[value]}`);
    }
};

parseEnv();