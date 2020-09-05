interface MiniReactElement {
    type: string;
    props: {
        [name: string]: any,
        nodeValue: string | null,
        children: (MiniReactElement | string)[]
    }
}

function createElement(type: string, props: any = null, ...children: (MiniReactElement | string)[]): MiniReactElement {
    return {
        type,
        props: {
            ...props,
            children: children.map((child: MiniReactElement | string) => {
                if (typeof child === "object") {
                    return child;
                }
                else {
                    return createTextElement(child);
                }
            })
        }
    };
}

function createTextElement(text: string): MiniReactElement {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    };
}

function render(element: MiniReactElement, container: HTMLElement) {
    const dom: any = element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);

    const isProperty = (key: string) => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((name: string) => {
            dom[name] = element.props[name];
        });

    element.props.children.forEach((child: MiniReactElement) => {
        render(child, dom);
    });

    container.appendChild(dom);
}

const MiniReact = {
    createElement,
    render
};

const element = MiniReact.createElement("div", { id: "foo" },
    MiniReact.createElement("a", null, "bar"),
    MiniReact.createElement("b")
);

const container = document.getElementById("root");
/*
ReactDOM.render(element, container);
const element = (
    <div id="foo">
        <a>bar</a>
        <b/>
        </div>
)
 */
