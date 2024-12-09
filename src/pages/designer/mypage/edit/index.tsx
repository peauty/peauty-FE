import { AppBar, CustomInput, CustomButton, GNB } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import { MyPageEditWrapper } from "./index.styles";

export default function DesignerMyPageEdit() {


    return (
        <>
            <MyPageEditWrapper>
                <AppBar prefix="backButton" title="회원 정보"></AppBar>
                <ProfileImg 
                    src={"https://thumb.mt.co.kr/21/2024/11/2024110705371097800_2.jpg"}
                    alt={"profileImage"}
                    width="176px"
                    height="176px"
                    onClick={() => console.log("click")}
                />
                <CustomInput
                    label="닉네임"
                    placeholder="닉네임을 입력해주세요"
                    variant="outlined"
                    suffix={
                        <CustomButton
                            size="small"
                            variant="primary"
                            onClick={() => console.log("click")}
                        >
                            중복검사
                        </CustomButton>
                    }
                />
                <CustomInput
                    label="이름"
                    placeholder="이름을 입력해주세요"
                    variant="outlined"
                />
                <CustomInput
                    label="휴대전화 번호"
                    placeholder="번호를 입력해주세요"
                    variant="outlined"
                />
                <CustomInput
                    label="이메일"
                    placeholder="이메일을 입력해주세요"
                    variant="outlined"  />
            </MyPageEditWrapper>
            <GNB buttonText="확인"/>
        </>
    );
}
