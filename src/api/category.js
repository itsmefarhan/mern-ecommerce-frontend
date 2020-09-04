export const createCategory = async (token, category) => {
  try {
    const res = await fetch("/api/category/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch("/api/category", {
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
