let kiemtra = ([...dayso]) => {
    if (dayso.length < 2) {
        return false;
    }
    const diff = dayso[1] - dayso[0];
    for (let i = 1; i < dayso.length; i++) {
        if (dayso[i] !== dayso[i - 1] + diff) {
            return false;
        }
    }

    return true;
}
const dayso = [51, 185, 30, 92];

console.log(kiemtra([...dayso]));