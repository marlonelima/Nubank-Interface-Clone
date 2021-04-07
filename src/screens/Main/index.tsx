import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import {
  ActualValueBill,
  AvailableLimitText,
  BalanceAccountArea,
  BalanceAccountText,
  BillArea,
  BottomTabs,
  ConfigButton,
  Container,
  Description,
  Header,
  HeaderButtons,
  HeaderContainerArea,
  HelloName,
  HideValuesButton,
  LoanArea,
  LoanDescriptionText,
  LoanValueText,
  ScrollContainer,
  TitleArea,
  ValueAvailableText,
} from "./styles";
import { BottomTabItemComponent } from "../../components/BottomTabItem";

export const MainScreen = () => {
  const [infoVisible, setInfoVisible] = useState(true);

  return (
    <Container>
      <Header>
        <HelloName>Olá, Marlone</HelloName>
        <HeaderButtons>
          <HideValuesButton onPress={() => setInfoVisible(!infoVisible)}>
            <Icon name="eye-off-outline" size={24} color="#fff" />
          </HideValuesButton>
          <ConfigButton>
            <Icon name="settings-outline" size={24} color="#fff" />
          </ConfigButton>
        </HeaderButtons>
      </Header>

      <ScrollContainer>
        <BillArea>
          <HeaderContainerArea>
            <Icon name="card-outline" size={24} color="#666" />
            <TitleArea>Cartão de crédito</TitleArea>
          </HeaderContainerArea>
          <Description>Fatura atual</Description>
          {infoVisible && (
            <>
              <ActualValueBill>R$17,23</ActualValueBill>
              <AvailableLimitText>
                Limite disponível{" "}
                <ValueAvailableText>R$ 186,34</ValueAvailableText>
              </AvailableLimitText>
            </>
          )}
        </BillArea>
        <BalanceAccountArea>
          <HeaderContainerArea>
            <Icon name="cash-outline" size={24} color="#666" />
            <TitleArea>Conta</TitleArea>
          </HeaderContainerArea>

          <Description>Saldo disponível</Description>
          {infoVisible && <BalanceAccountText>R$220,99</BalanceAccountText>}
        </BalanceAccountArea>
        <LoanArea>
          <HeaderContainerArea>
            <Icon name="document-outline" size={24} color="#666" />
            <TitleArea>Empréstimo</TitleArea>
          </HeaderContainerArea>
          <LoanDescriptionText>Valor disponivel de até</LoanDescriptionText>
          {infoVisible && <LoanValueText>R$ 3.987,93</LoanValueText>}
        </LoanArea>
      </ScrollContainer>
      <BottomTabs>
        <BottomTabItemComponent
          text="Pagar"
          icon="barcode-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Indicar amigos"
          icon="person-add-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Transferir"
          icon="logo-usd"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Depositar"
          icon="cash-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Cartão virtual"
          icon="card-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Recarga de celular"
          icon="phone-portrait-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Ajustar limite"
          icon="options-outline"
          lock-closed-outline
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Bloquear cartão"
          icon="lock-closed-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Cobrar"
          icon="mail-outline"
        ></BottomTabItemComponent>
        <BottomTabItemComponent
          text="Me ajuda"
          icon="information-circle-outline"
        ></BottomTabItemComponent>
      </BottomTabs>
    </Container>
  );
};
