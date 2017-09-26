/**
 * Map an enum to it's values
 * @param e enum
 */
export default function mapEnum(e: any): any[] {
    return Object.keys(e).map((x: string) => e[x]);
}
