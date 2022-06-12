export const parseArgs = () => {
    const args = process.argv.slice(2);

    const res = args.reduce((acc, value, index, arr) => {
        const valueAfterCommandKey = arr[index + 1];
        if (value.startsWith('--') && valueAfterCommandKey) {
            acc.push(`${value.slice(2)} is ${valueAfterCommandKey}`);
        }

        return acc;
    }, []);

    console.log(res.join(', '))
};

parseArgs();