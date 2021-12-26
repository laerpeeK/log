const elementReact = React.createElement(
	"h1",
	{title:"foo"},
	"Hello"
)
const element = {
	type: "h1",
	props: {
		title: "foo",
		children: "Hello"
	}
}

const container = document.getElementById('root')

ReactDOM.render(element, container)

const node = document.createElement(element.type)
node['title'] = element.props.title
const text = document.createTextNode("")
text['nodeValue'] = element.props.children
node.appendChild(text)
container.appendChild(node)


const elementReact2 = React.createElement(
	"div",
	{id: "foo"},
	React.createElement("a", null, "bar"),
	React.createElement("b")

)


// The createElement Function

function createElement(type, props, ...children) {
	return {
		type,
		props: {
			...props,
			children: children.map(child => typeof child === 'object'? child: createTextElement(child))
		}
	}
}

function createTextElement(text) {
	return {
		type: "TEXT_ELEMENT",
		props: {
			nodeValue: text,
			children: []
		}
	}
}


const Didact = {
	createElement,
	render
}

const element = Didact.createElement(
	"div",
	{id: "foo"},
	Didact.createElement("a", null, "bar"),
	Didact.createElement("b")
)


// The render Function
function render(element, container) {
	const dom = element.type === 'TEXT_ELEMENT'?document.createTextNode(""):document.createElement(element.type)

	const isProperty = key => key !== "children"
	Object.keys(element.props).filter(isProperty).forEach(name => {dom[name] = element.props[name]})

	element.props.children.forEach(child => render(child, dom))

	container.appendChild(dom)
}

// Concurrent Mode
let nextUnitOfWork = null
function workLoop(deadline) {
	let shouldYield = false
	while (nextUnitOfWork && !shouldYield) {
		nextUnitOfWork = performUnitOfWork(
			nextUnitOfWork
		)
		shouldYield = deadline.timeRemaining() < 1
	}
	requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

function performUnitOfWork(nextUnitOfWork) {
	// TODO
}


// Fibers
function createDom(fiber) {
	
}