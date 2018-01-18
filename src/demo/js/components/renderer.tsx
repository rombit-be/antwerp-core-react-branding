import * as ReactDOM from "react-dom";

export default function renderer(element: JSX.Element, id: string) {
    if (element) {
        ReactDOM.render(element, document.getElementById(id));
    }
}
