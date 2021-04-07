import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #8905be;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  padding: 0 0 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 18px 10px 18px;
`;

export const HelloName = styled.Text`
  font-family: "RobotoBold";
  color: #fff;
  font-size: 28px;
`;

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  decelerationRate: 0.5,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
}))`
  flex: 15;

  margin-bottom: 20px;
  margin: 0 18px;
`;

export const BottomTabs = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 18,
    paddingRight: 8,
  },
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
}))`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const HeaderButtons = styled.View`
  display: flex;
  flex-direction: row;
`;

export const HideValuesButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ConfigButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BillArea = styled.View`
  width: 100%;
  height: 190px;
  background: #fff;
  border-radius: 2px;
  padding: 30px 20px;
`;

export const BalanceAccountArea = styled.View`
  width: 100%;
  height: 160px;
  background: #fff;
  margin-top: 15px;
  border-radius: 2px;
  padding: 30px 20px;
`;

export const LoanArea = styled.View`
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 15px;
  border-radius: 2px;
  padding: 30px 20px;
`;
export const HeaderContainerArea = styled.View`
  flex-direction: row;
  align-items: center;

  display: flex;
  margin-bottom: 16px;
`;

export const TitleArea = styled.Text`
  color: #666;
  margin-left: 20px;
  font-size: 16px;
`;

export const Description = styled.Text`
  color: #666;

  font-size: 14px;
`;

export const ActualValueBill = styled.Text`
  color: #379ed2;
  font-family: "RobotoBold";
  font-size: 28px;
`;

export const AvailableLimitText = styled.Text`
  color: #111;
  font-size: 15px;
`;

export const ValueAvailableText = styled.Text`
  color: #10632d;
  font-family: "RobotoBold";
  font-size: 15px;
`;

export const BalanceAccountText = styled.Text`
  color: #222;
  font-family: "RobotoBold";
  font-size: 28px;
`;

export const LoanDescriptionText = styled.Text`
  color: #111;
  font-family: "RobotoMedium";
  font-size: 15px;
`;

export const LoanValueText = styled.Text`
  color: #111;
  font-family: "RobotoBold";
  font-size: 16px;
`;
