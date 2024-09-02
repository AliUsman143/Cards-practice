import axios from "axios";
export const ApidataFetch = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log("🚀 ~ ApidataFetch ~ res:", res);
    return res.data;
  } catch (error) {
    throw new Error("🚀 ~ ApidataFetch ~ error:", error);
  }
};
