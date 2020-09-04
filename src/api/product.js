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

export const getProducts = async (sortBy) => {
  try {
    const res = await fetch(
      `/api/product?sortBy=${sortBy}&order=desc&limit=3`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByCategory = async (categoryTitle) => {
  try {
    const res = await fetch(`/api/product/category/${categoryTitle}`, {
      method: "GET",
    });
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
