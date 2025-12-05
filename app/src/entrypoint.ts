import { mount } from "svelte";
import App from "./App.svelte";

const root = document.querySelector("#root");
if (!root) {
	throw new Error("Could not find root element.");
}

mount(App, { target: root });
