export interface GetPuppyDetailResponse {
  puppyId?: number;
  name?: string;
  breed?: string;
  weight?: number;
  sex?: string;
  age?: number;
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
  sex?: 'M' | 'F';
  age?: number;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface UpdatePuppyDetailRequest {
  name?: string;
  breed?: string;
  weight?: number;
  sex?: 'M' | 'F';
  age?: number;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
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
  age?: number;
  birthdate?: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface RegisterPuppyRequest {
  name: string;
  breed: string;
  weight: number;
  sex: 'M' | 'F';
  age: number;
  birthdate: string;
  detail?: string;
  disease?: string[];
  diseaseDescription?: string;
  profileImageUrl?: string;
  puppySize?: string;
}

export interface UploadPuppyImageResponse {
  customerId?: number;
  puppyId?: number;
  uploadedPuppyImageUrl?: string;
}
