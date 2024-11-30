export type VariantType = {
  x: number;
  y: number;
  scale?: number;
  mixBlendMode?: string;
};

export type VariantsType = {
  default: VariantType;
  zoomed: VariantType & { scale: number; mixBlendMode: string };
};

export type BgImgType = {
  imgType: "marketeers" | "problem-solvers" | "";
};

export type VideoItemType = {
  videoTitle: string;
  videoLink: string;
};

export type ServiceItemGroupType = {
  groupTitle: string;
  groupLength: number;
  backgroundColor: string;
};

export type ServiceItemType = {
  id: string;
  title: string;
  path: string;
  itemGroup?: ServiceItemGroupType[];
  urlGroup?: string[];
  length?: number;
  description: string;
  imgLink: string;
  backgroundColor: string;
};
