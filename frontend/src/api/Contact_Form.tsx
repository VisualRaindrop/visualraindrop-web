export const API_BASE = import.meta.env.VITE_API_BASE;

export async function send_contact_form(data : {
    name: string,
    email: string,
    message: string,
}) {
    const response = await fetch(`${API_BASE}/contact_form/`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    if (!response.ok) {
        const error_data = await response.json().catch(() => null);
        console.error('Contact form error:', error_data);
        throw new Error(response.statusText); }
    return await response.json();
}