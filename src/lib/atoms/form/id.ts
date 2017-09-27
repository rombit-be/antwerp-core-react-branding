import { TypedInputProperties } from "./inputProperties";

export function inputElementId(props: TypedInputProperties): string {
    return `${props.required ? "required-" : ""}-${props.type}-${props.name}`;
}
