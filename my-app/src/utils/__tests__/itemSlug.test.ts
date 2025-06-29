import { itemSlug } from "../item";

describe("itemSlug", () => {
  it("converts names to file-friendly slugs", () => {
    expect(itemSlug("ADRENALINE SHOT")).toBe("adrenaline_shot");
    expect(itemSlug("3D-PRINTED LANCE")).toBe("3dprinted_lance");
    expect(itemSlug("MONARCH'S DECREE")).toBe("monarchs_decree");
  });
});
