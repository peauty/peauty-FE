interface KeyValueMap {
  [key: string]: string;
}

export const breedMap: KeyValueMap = {
  아펜핀셔: "AFFENPINSCHER",
  테리어: "TERRIER",
  비글: "BEAGLE",
  비숑: "BICHON_FRISE",
  치와와: "CHIHUAHUA",
  닥스훈트: "DACHSHUND",
  말티즈: "MALTESE",
  포메라니안: "POMERANIAN",
  퍼그: "PUG",
  시츄: "SHIHTZU",
  셰퍼드: "SHEPHERD",
  보더콜리: "BORDER_COLLIE",
  불독: "BULLDOG",
  달마시안: "DALMATIAN",
  푸들: "POODLE",
  리트리버: "RETRIEVER",
  "세인트 버나드": "SAINT_BERNARD",
  사모예드: "SAMOYED",
};

export const diseaseMap: KeyValueMap = {
  없음: "NONE",
  기타: "ETC",
  슬개골: "PATELLA",
  외이염: "EAR_INFECTION",
  피부염: "DERMATITIS",
  눈질환: "EYE_DISEASE",
  심장병: "HEART_DISEASE",
  관절염: "ARTHRITIS",
};

export const puppySizeMap: KeyValueMap = {
  소형견: "SMALL",
  중형견: "MEDIUM",
  대형견: "LARGE",
};
