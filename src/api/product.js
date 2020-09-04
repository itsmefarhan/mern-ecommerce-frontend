export const createProduct = async (token, product) => {
  try {
    const res = await fetch("/api/product/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
