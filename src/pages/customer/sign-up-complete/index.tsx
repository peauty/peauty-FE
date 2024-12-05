import { useNavigate } from "react-router-dom";
import { Text, CustomButton } from "../../../components";
import { ButtonWrapper, ContentWrapper, PageWrapper, Particle, PyroWrapper } from "./index.styles";
import { ROUTE } from "../../../constants/routes";


export default function CustomerSignUpComplete() {
    const navigate = useNavigate();

    const handleRegisterNow = () => {
        navigate(ROUTE.customer.home) // TODO 바꾸기
    }

    const handleRegisterLater = () => {
        navigate(ROUTE.customer.home);
    }

    return (
        <>
            <PyroWrapper>
                <Particle />
                <Particle className="delay" />
            </PyroWrapper>
            <PageWrapper>
                <ContentWrapper>
                    <Text typo={"title200"}>회원가입이 완료됐어요!</Text>
                    <Text typo={"subtitle200"}>
                        <Text typo={"subtitle200"} color={"blue100"}>추가정보</Text>
                        를 등록하시겠어요?</Text>
                </ContentWrapper>
                <ButtonWrapper>
                    <CustomButton variant="outline" size="big" onClick={handleRegisterNow}>지금 등록할게요</CustomButton>
                    <CustomButton variant="outline" size="big" onClick={handleRegisterLater}>나중에 등록할게요</CustomButton>
                </ButtonWrapper>                   
            </PageWrapper>
        </>
    )
}