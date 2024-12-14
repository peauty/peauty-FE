export type SexType = 'M' | 'F';

export type BreedType = 'AFFENPINSCHER' | 'TERRIER' | 'BEAGLE' | 'BICHON_FRISE' | 'CHIHUAHUA' | 'DACHSHUND' | 'MALTESE' | 'POMERANIAN' | 'PUG' | 'SHIHTZU' | 'SHEPHERD' | 'BORDER_COLLIE' | 'BULLDOG' | 'DALMATIAN' | 'POODLE' | 'RETRIEVER' | 'SAINT_BERNARD' | 'SAMOYED';

export type PuppySizeType = 'SMALL' | 'MEDIUM' | 'LARGE';



export interface GetPuppyDetailResponse {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  age?: number;
  formattedAge?: string;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface UpdatePuppyDetailResponse {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: SexType;
  formattedAge?: string;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface UpdatePuppyDetailRequest {
  name?: string;
  breed?: BreedType;
  weight?: number;
  sex?: SexType;
  birthdate?: string;
  detail?: string;
  disease?: 'NONE' | 'ETC' | 'PATELLA' | 'EAR_INFECTION' | 'DERMATITIS' | 'EYE_DISEASE' | 'HEART_DISEASE' | 'ARTHRITIS'[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: PuppySizeType;
}

export interface DeletePuppyResponse {
  message?: string;
}

export interface GetPuppyProfilesResponse {
  customerId?: number;
  customerNickname?: string;
  customerImageUrl?: string;
  puppies?: {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  age?: number;
  disease?: string[];
  puppyProfileImageUrl?: string;
}[];
}

export interface GetPuppyProfileResponse {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  age?: number;
  disease?: string[];
  puppyProfileImageUrl?: string;
}

export interface RegisterPuppyResponse {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  formattedAge?: string;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface RegisterPuppyRequest {
  name: string;
  breed: BreedType;
  weight: number;
  sex: SexType;
  birthdate: string;
  detail?: string;
  disease?: 'NONE' | 'ETC' | 'PATELLA' | 'EAR_INFECTION' | 'DERMATITIS' | 'EYE_DISEASE' | 'HEART_DISEASE' | 'ARTHRITIS'[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: PuppySizeType;
}

export interface UploadPuppyImageResponse {
  customerId?: number;
  puppyId?: number;
  uploadedPuppyImageUrl?: string;
}
