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

export const getProducts = async (sortBy, limit = "") => {
  try {
    const res = await fetch(
      `/api/product?sortBy=${sortBy}&order=desc&limit=${limit}`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByCategory = async (
  categoryTitle,
  sortBy = "",
  order = "",
  limit = ""
) => {
  try {
    const res = await fetch(
      `/api/product/category/${categoryTitle}?sortBy=${sortBy}&order=${order}&limit=${limit}`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (productId) => {
  try {
    const res = await fetch(`/api/product/${productId}`, {
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getRelatedProducts = async (productId) => {
  try {
    const res = await fetch(`/api/product/related/${productId}`, {
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
