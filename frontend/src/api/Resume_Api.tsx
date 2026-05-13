const API_BASE = import.meta.env.VITE_API_BASE;

export async function get_experience() {
    const response = await fetch(`${API_BASE}/experience/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function get_education() {
    const response = await fetch(`${API_BASE}/education/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function get_skills() {
    const response = await fetch(`${API_BASE}/skill/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function get_timeline() {
    const response = await fetch(`${API_BASE}/timeline/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}