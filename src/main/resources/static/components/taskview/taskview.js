const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" type="text/css"
        href="${import.meta.url.match(/.*\//)[0]}/taskview.css"/>
    <h1>Tasks</h1>
    <div id="message"><p>Waiting for server data.</p></div>
    <div id="newtask">
        <button type="button" disabled>New task</button>
    </div>
    <!-- The task list -->
    <task-list></task-list>
    
    <!-- The Modal -->
    <task-box></task-box>
`;

class TaskView extends HTMLElement {
    #tasklist
    #taskbox
    constructor() {
        super();
        const content = template.content.cloneNode(true);

        // save the tasklist and taskbox elements for easier access
        this.#tasklist = content.querySelector("task-list");
        this.#taskbox = content.querySelector("task-box");

        // add click handler to the new task button
        const btn = content.querySelector("#newtask>button");
        btn.addEventListener("click", () => {
            this.#taskbox.show();
        });

        this.appendChild(content);
    }

}
customElements.define('task-view', TaskView);
