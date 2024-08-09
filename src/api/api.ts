export const fetchHomeData = async () => {
  const response = await fetch("/homeData.json");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
};

export const fetchProductData = async () => {
  const response = await fetch("/products.json");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
};
