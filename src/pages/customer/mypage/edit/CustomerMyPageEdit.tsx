import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, CustomInput, CustomButton, GNB } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import { MyPageEditWrapper } from "./CustomerMyPageEdit.styles";
import { ROUTE } from "../../../../constants/routes";
import { getCustomerProfile, uploadProfileImage, updateCustomerProfile } from "../../../../apis/customer/resources/customer";
import { GetCustomerProfileResponse, UploadProfileImageResponse, UpdateCustomerProfileResponse } from "../../../../types/customer/customer";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { useLocation } from "../../../../hooks/useLocation";
import { useCheckNickname } from "../../../../hooks/useUser";
import Loading from "../../../../components/page/sign-up/Loading";

export default function CustomerMyPageEdit() {
    const navigate = useNavigate();
    const { userId, isLoading } = useUserDetails();
    const { location, error: locationError, locationLoading, fetchLocation } = useLocation();
    const { check } = useCheckNickname();
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [profileData, setProfileData] = useState<GetCustomerProfileResponse>({});
    const [originalNickname, setOriginalNickname] = useState("");
    const [formData, setFormData] = useState({
        nickname: '',
        name: '',
        address: '',
    });
    const [profileImage, setProfileImage] = useState<string>("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [checkedNickname, setCheckedNickname] = useState("");
    const [isNickNameAvailable, setIsNickNameAvailable] = useState(false);

    useEffect(() => {
        if (!isLoading && userId) {
            const fetchProfile = async () => {
                try {
                    const data = await getCustomerProfile(userId);
                    setProfileData(data);
                    setProfileImage(data.profileImageUrl || "");
                    setFormData({
                        nickname: data.nickname || '',
                        name: data.name || '',
                        address: data.address || '',
                    });
                    setOriginalNickname(data.nickname || '');
                    setCheckedNickname(data.nickname || '');
                    setIsNickNameAvailable(true);
                } catch (error) {
                    console.error('Failed to fetch profile:', error);
                }
            };
            fetchProfile();
        }
    }, [userId, isLoading]);

    useEffect(() => {
        if (location) {
            setFormData(prev => ({
                ...prev,
                address: location
            }));
        }
        if (locationError) {
            setError(locationError);
        }
    }, [location, locationError]);

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        if (field === 'nickname') {
            if (value === originalNickname) {
                setIsNickNameAvailable(true);
                setError("");
                setSuccess("");
                setCheckedNickname(value);
            } else {
                setIsNickNameAvailable(false);
                setSuccess("");
            }
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !userId) return;

        try {
            setUploadLoading(true);
            const response = await uploadProfileImage(userId, file);
            if (response.uploadedProfileImageUrl) {
                setProfileImage(response.uploadedProfileImageUrl);
            }
        } catch (error) {
            console.error('Failed to upload image:', error);
            setError("이미지 업로드에 실패했습니다.");
        } finally {
            setUploadLoading(false);
        }
    };

    const handleGetLocation = () => {
        setError("");
        fetchLocation();
    };

    const handleNicknameCheck = async () => {
        if (formData.nickname === originalNickname) {
            setIsNickNameAvailable(true);
            setError("");
            return;
        }

        const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/;
        if (!formData.nickname || !nicknameRegex.test(formData.nickname)) {
            setError("올바른 닉네임을 입력해주세요 (2~10자)");
            return;
        }
        
        setCheckedNickname(formData.nickname);
        const isAvailableNickname = await check(formData.nickname);
        
        if (!isAvailableNickname) {
            setError("이미 사용중인 닉네임입니다.");
            setSuccess("");
        } else {
            setIsNickNameAvailable(true);
            setError("");
            setSuccess("사용 가능한 닉네임입니다.");
        }
    };

    const handleSubmit = async () => {
        if (!userId) return;

        try {
            setUpdateLoading(true);
            const updateData = {
                name: formData.name,
                nickname: formData.nickname,
                address: formData.address,
                profileImageUrl: profileImage,
                phoneNum: profileData.phoneNum // 기존 전화번호 유지
            };

            await updateCustomerProfile(userId, updateData);
            navigate(ROUTE.customer.mypage.home);
        } catch (error) {
            console.error('Failed to update profile:', error);
            setError("프로필 수정에 실패했습니다.");
        } finally {
            setUpdateLoading(false);
        }
    };
    
    return (
        <>
            {(locationLoading || uploadLoading || updateLoading) && <Loading imageUrl={"https://avatars.githubusercontent.com/u/70759627?v=4"}/>}
            <MyPageEditWrapper>
                <AppBar prefix="backButton" title="회원 정보" onclick={() => navigate(ROUTE.customer.mypage.home)} />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <ProfileImg 
                    src={profileImage || ""}
                    alt="profileImage"
                    width="198px"
                    height="198px"
                    onClick={handleImageClick}
                />
                <CustomInput
                    label="닉네임"
                    placeholder="닉네임을 입력해주세요"
                    variant="outlined"
                    value={formData.nickname}
                    onChange={handleInputChange('nickname')}
                    error={error}
                    success={checkedNickname === formData.nickname ? success : ""}
                    suffix={
                        <CustomButton
                            size="small"
                            variant={error === "" ? "primary" : "emergency"}
                            onClick={handleNicknameCheck}
                            disabled={formData.nickname === "" || (formData.nickname === originalNickname) || (error !== "" && error !== "이미 사용중인 닉네임입니다.")}
                        >
                            중복검사
                        </CustomButton>
                    }
                />
                <CustomInput
                    label="이름"
                    placeholder="이름을 입력해주세요"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                />
                <CustomInput
                    label="지역"
                    placeholder="현재 위치 찾기를 클릭해주세요"
                    variant="outlined"
                    value={formData.address}
                    onChange={handleInputChange('address')}
                    disabled={true}
                    error={locationError}
                    suffix={
                        <CustomButton
                            size="small"
                            variant={locationError === "" ? "primary" : "emergency"}
                            onClick={handleGetLocation}
                        >
                            현재 위치 찾기
                        </CustomButton>
                    }
                />
            </MyPageEditWrapper>
            <GNB 
                buttonText="확인"
                disabled={!isNickNameAvailable || formData.nickname === "" || formData.name === "" || formData.address === ""}
                onLargeButtonClick={handleSubmit}
            />
        </>
    );
}