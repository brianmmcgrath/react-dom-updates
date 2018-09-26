const jsContainer = document.querySelector('#js');
const reactContainer = document.querySelector('#react');

const render = () => {
	jsContainer.innerHTML = `
		<div class="demo">
			Hello JS
			<input />
			<p>${new Date()}</p>
		</div>
		`;

	ReactDOM.render(
		React.createElement(
			"div",
			{ className: "demo" },
			"Hello React",
			React.createElement("input"),
			React.createElement(
				"p",
				null,
				new Date().toString()
			)
		),
		reactContainer
	);
}

setInterval(render, 1000);