export const createOrder = async (token, data) => {
  try {
    const res = await fetch(`/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
