import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const getTypeById = async (id) => {
  const { data } = await $host.get("api/type/" + id);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const getBrandById = async (id) => {
  const { data } = await $host.get("api/brand/" + id);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post("api/product", product);
  return data;
};

export const getProducts = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get("api/product", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  
  return data;
};

export const getProductById = async (id) => {
  const { data } = await $host.get("api/product/" + id);
  return data;
};
