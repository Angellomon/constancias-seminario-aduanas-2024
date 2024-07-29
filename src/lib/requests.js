import fileSaver from 'file-saver';

const { saveAs } = fileSaver;

/**
 * Validates an email address.
 *
 * @param {string} email - the email address to validate
 * @return {boolean} true if the email is valid, false otherwise
 */
function validateEmail(email) {
	if (!email) return false;

	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

/**
 * Download Certificate PDF
 * @param {string} email
 */
export async function downloadCertificate(email, eventId = '12otozn0bz') {
	const validEmail = validateEmail(email);

	if (!validEmail)
		return {
			invalidEmail: true,
			notFound: false
		};

	const result = await fetch(`/pdf/${eventId}?correo=${email}`);

	if (!result.ok || result.status == 404)
		return {
			invalidEmail: false,
			notFound: true
		};

	const blob = await result.blob();

	console.log(blob.size);

	if (blob.size <= 420) {
		return {
			invalidEmail: false,
			notFound: true
		};
	}

	saveAs(blob, 'constancia-seminario-de-aduanas-ciclo-2024.pdf');

	return {
		invalidEmail: false,
		notFound: false
	};
}
