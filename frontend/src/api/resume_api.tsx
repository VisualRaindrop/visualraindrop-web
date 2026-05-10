const API_BASE = import.meta.env.VITE_API_BASE;

export async function getExperience() {
    const response = await fetch(`${API_BASE}/experience/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function getEducation() {
    const response = await fetch(`${API_BASE}/education/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function getSkills() {
    const response = await fetch(`${API_BASE}/skill/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}

export async function getTimeline() {
    const response = await fetch(`${API_BASE}/timeline/`);
    if (!response.ok) { throw new Error(response.statusText); }
    return await response.json();
}