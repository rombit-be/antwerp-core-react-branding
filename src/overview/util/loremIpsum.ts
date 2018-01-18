const template: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce id nunc aliquam, dapibus nisi eget, finibus mauris.
In nisi nisi, faucibus ut porttitor sit amet, condimentum id elit. Phasellus dictum massa eget ante volutpat luctus.
Vestibulum pulvinar neque ex, a elementum neque viverra nec. Nunc euismod risus ex, ultrices rutrum nisi hendrerit eu.
Nulla id blandit lectus. Sed non mi urna. Proin aliquet tincidunt pharetra. Donec vel eros et ligula rutrum hendrerit
vitae ac mauris. Nunc pulvinar aliquet tellus, a iaculis metus sodales consequat. Vestibulum eu vulputate nisl.

Praesent vitae nulla at eros ultricies venenatis nec et nulla. Praesent aliquet vulputate eros imperdiet auctor.
Maecenas lobortis dui eu ligula placerat, vitae dignissim elit sagittis.
Vivamus eget facilisis orci. Nullam in odio justo. Suspendisse vulputate nisl tellus, id aliquam lectus facilisis a.
Sed vitae metus sem. Donec libero quam, interdum fermentum elit nec, facilisis faucibus nunc.
Nunc porttitor turpis ligula, in dapibus lorem tristique imperdiet. Nullam convallis consequat ante,
non gravida purus commodo non.
Proin eu urna nunc. Duis hendrerit lacus et leo lacinia, sed pharetra sem facilisis. Quisque viverra eros in dui tempus,
id convallis ipsum ultricies. Morbi mi erat, sagittis a mi non, condimentum pharetra tortor.
Fusce vestibulum accumsan nunc, vel semper massa pretium ac. Praesent interdum orci lacus,
a faucibus nunc fermentum vitae.
`;

/**
 * Generate some lorem ipsum text.
 * @param length length of parts
 * @param type s for scentence, w for word
 */
export default function loremIpsum(length: number, type: "s" | "w" = "s"): string {
    const token = (type === "s") ? "." : " ";
    if (length > 0) {
        return template.split(token).slice(0, length).join(token) + (type === "s" ? "." : "");
    }
    return "-";
}
