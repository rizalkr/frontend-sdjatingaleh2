export async function getTeachers() {
  try {
    const response = await fetch('http://localhost:3000/api/teachers'); // pastikan URL ini sesuai dengan endpoint API kamu
    if (!response.ok) {
      const text = await response.text(); // tangkap respons HTML error
      throw new Error(`HTTP Error ${response.status}: ${text}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
}
export async function getNews() {
  try {
    const response = await fetch('http://localhost:3000/api/news'); // pastikan URL ini sesuai dengan endpoint API kamu
    if (!response.ok) {
      const text = await response.text(); // tangkap respons HTML error
      throw new Error(`HTTP Error ${response.status}: ${text}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getStudents() {
  try {
    const response = await fetch('http://localhost:3000/api/students'); // pastikan URL ini sesuai dengan endpoint API kamu
    if (!response.ok) {
      const text = await response.text(); // tangkap respons HTML error
      throw new Error(`HTTP Error ${response.status}: ${text}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
}