import "nikita-toast-component/src/styles/index.css";
import "./styles/main.css";
import {generateManagerWithContent, generateManager, createToastElement} from "nikita-toast-component";

const manger = generateManagerWithContent("Hello, that's example page, enjoy", {
    title: 'im title',
    status: 'success',
});

let title = 'im title';

let duration = 0

document.querySelector('.message')
    .addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    manger.createNew(data.get('message'), title)
});

document.querySelector('#duration-input')
    .addEventListener('input', ({target}) => {
    duration = +target.value;
});

document.querySelector('#set-duration')
    .addEventListener('click', () => {
    manger.options.autoCloseDuration = duration;
});

document.querySelector('#status-select')
    .addEventListener('change', ({target}) => {
    manger.options.status = target.value
});

document.querySelector("#close-checkbox")
    .addEventListener("input", e => {
        manger.options.closeOnClick = e.target.checked;
    })
