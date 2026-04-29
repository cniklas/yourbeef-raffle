import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/main.css'

const formEl = document.querySelector<HTMLFormElement>('#js-form')
const submitButtonEl = document.querySelector<HTMLButtonElement>('#js-submit-button')
const dialogEl = document.querySelector<HTMLDialogElement>('#js-dialog')
const closeButtonEl = document.querySelector<HTMLButtonElement>('#js-close-button')
const dialogContentEl = document.querySelector<HTMLDivElement>('#js-dialog-content')

const handleSuccess = () => {
	if (!dialogContentEl) return
	dialogContentEl.innerHTML = `
			<div class="dialog-header success" id="aria-dialog-heading">Vielen Dank!</div>
			<div>Deine Antwort wurde erfolgreich übertragen.</div>
		`
}
const handleError = async (response: Response) => {
	if (!dialogContentEl) return
	const data = response.status !== 404 ? await response.json() : null
	const isValidationError = response.status === 422
	dialogContentEl.innerHTML = `
			<div class="dialog-header error" id="aria-dialog-heading">${
				isValidationError ? 'Bitte korrigiere deine Eingabe' : 'Ein Fehler ist aufgetreten'
			}</div>
			<div>${
				isValidationError && data?.errors?.email?._isUnique
					? 'Diese E-Mail-Adresse wurde bereits eingetragen'
					: (data?.message ?? response.statusText ?? '')
			}</div>
		`
	submitButtonEl?.setAttribute('aria-disabled', 'false')
}

formEl?.addEventListener('submit', async e => {
	e.preventDefault()
	if (!dialogContentEl) return
	if (submitButtonEl?.getAttribute('aria-disabled') === 'true') return
	submitButtonEl?.setAttribute('aria-disabled', 'true')

	try {
		const response = await fetch(`${import.meta.env.VITE_POSTURL}/submits/`, {
			method: 'POST',
			cache: 'no-cache',
			body: new FormData(formEl),
			headers: { accept: 'application/json' },
		})

		response.ok ? handleSuccess() : handleError(response)
	} catch (err) {
		console.error(err)
		dialogContentEl.innerHTML = `<div class="dialog-header error" id="aria-dialog-heading">${
			(err as Error).message ?? 'Ein unbekannter Fehler ist aufgetreten'
		}</div>`
		submitButtonEl?.setAttribute('aria-disabled', 'false')
	} finally {
		dialogEl?.showModal()
		dialogEl?.focus()
	}
})

closeButtonEl?.addEventListener('click', () => {
	dialogEl?.close()
})
dialogEl?.addEventListener('close', () => {
	if (!dialogContentEl) return
	dialogContentEl.innerHTML = ''
})
