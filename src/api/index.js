export async function getDataApiLocal() {
  try {
    const response = await fetch("http://localhost:3000/data-blogs");
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return error;
  }
}

export async function postDataApiLocal(data) {
  const url = "http://localhost:3000/data-blogs";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Terjadi kesalahan saat mengirim data ke API.");
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteDataApiLocal(id) {
  try {
    const url = `http://localhost:3000/data-blogs/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
