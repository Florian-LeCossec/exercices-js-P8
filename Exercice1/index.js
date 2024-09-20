//votre code ici
const pairNumbers = (min, max) => {
    min = Number(min);
    max = Number(max);
    if (min > max) return '';

    let result = '';
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result += (result ? ',' : '') + i;
        }
    }
    return result;
}
export default pairNumbers
