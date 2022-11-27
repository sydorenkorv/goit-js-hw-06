
const refs = {
input: document.querySelector('input#name-input'),
output: document.querySelector('span#name-output')
}
const DEFAULT_VALUE = 'Anonymous';

refs.input.addEventListener('input', function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value === '' ? DEFAULT_VALUE : event.currentTarget.value
})