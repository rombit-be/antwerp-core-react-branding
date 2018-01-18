export default function lookupEnumValue(e: any, value: any): any {
    if (value) {
        if (e[value]) {
            return e[value];
        } else {
            let lookupValue: any;
            Object.keys(e).forEach((x) => {
                if (!lookupValue && e[x] === value) {
                    lookupValue = x;
                }
            });
            return lookupValue;
        }
    }
}
