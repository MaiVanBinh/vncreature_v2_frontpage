export const getCreatures = async (payload: any) => {
  try {
    return [{ name_vn: "a", name_latin: "b", image: "c" }];
  } catch (err) {
    console.log("get area by id err", err);
    return {};
  }
};
