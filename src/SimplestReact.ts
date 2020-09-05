interface SimplestReactElement {
    type: string;
    props: {
        [name: string]: any,
        nodeValue: string | null,
        children: (SimplestReactElement | string)[]
    }
}

function createElement(type: string, props: any = null, ...children: (SimplestReactElement | string)[]): SimplestReactElement {
    return {
        type,
        props: {
            ...props,
            children: children.map((child: SimplestReactElement | string) => {
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

function createTextElement(text: string): SimplestReactElement {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    };
}

function render(element: SimplestReactElement, container: HTMLElement) {
    const dom: any = element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);

    const isProperty = (key: string) => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((name: string) => {
            dom[name] = element.props[name];
        });

    element.props.children.forEach((child: SimplestReactElement) => {
        render(child, dom);
    });

    container.appendChild(dom);
}

const SimplestReact = {
    createElement,
    render
};

const element = SimplestReact.createElement("div", { id: "foo" },
    SimplestReact.createElement("a", null, "bar"),
    SimplestReact.createElement("b")
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
