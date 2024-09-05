const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" type="text/css"
        href="${import.meta.url.match(/.*\//)[0]}/taskbox.css"/>
    <dialog>
        <!-- Modal content -->
        <span>&times;</span>
        <div>
            <div>Title:</div>
            <div>
                <input type="text" size="25" maxlength="80"
                    placeholder="Task title" autofocus/>
            </div>
            <div>Status:</div><div><select></select></div>
        </div>
        <p><button type="submit">Add task</button></p>
    </dialog>
`;

class TaskBox extends HTMLElement {
    #dialog

    constructor() {
        super();

        const content = template.content.cloneNode(true);
        this.#dialog = content.querySelector("dialog");

        // make sure the "x" in the dialog modal closes it (like ESC key would)
        content.querySelector("span").addEventListener("click", () => {
            this.#dialog.close()
        })
        this.appendChild(content);
    }

    newtaskCallback(callback) {
        console.error("TaskBox: newtaskCallback() not implemented yet");
    }

    setStatusesList(list) {
        console.error("TaskBox: setStatusesList() not implemented yet");
    }

    show() {
        this.#dialog.showModal();
    }

    close() {
        this.#dialog.close();
    }
}

customElements.define('task-box', TaskBox);
