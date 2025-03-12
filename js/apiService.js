export async function getTeachers() {
    const response = await fetch('http:/localhost:3000/api/teachers');
    return await response.json();
}

export async function getNews() {
    const response = await fetch('http:/localhost:3000/api/news');
    return await response.json();
}

export async function getStudents() {
    const response = await fetch('http:/localhost:3000/api/students');
    return await response.json();
}