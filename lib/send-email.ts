import { FormData } from "../components/contact-form";
import { CareerFormData } from "../components/careers-form";

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email'

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
        alert(response.message)
    }).catch((err) => {
        alert(err)
    });
}

export function sendCareerEmail(data: CareerFormData) {
    const apiEndpoint = '/api/email-career'

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
        alert(response.message)
    }).catch((err) => {
        alert(err)
    });
}