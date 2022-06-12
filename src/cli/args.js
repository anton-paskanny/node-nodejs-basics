export const parseArgs = () => {
    const args = process.argv.slice(2);

    for (let value of args) {
        const valueToPrint = value.slice(2).split('=');
        console.log(`${valueToPrint[0]} is ${valueToPrint[1]}`);
    }
};

parseArgs();