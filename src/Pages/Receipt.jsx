import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive"


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin: 30px 0px;
`;

export default function Receipt() {
  return (
    <div>
    
    <Container>
        <Wrapper>
        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Item Total</SummaryItemText>
              <SummaryItemPrice>$ 8.48</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Offers Discount</SummaryItemText>
              <SummaryItemPrice>$ 0.8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Charges</SummaryItemText>
              <SummaryItemPrice>$ 0.14</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Payment Via Credit/Debit Card</SummaryItemText>
              <SummaryItemPrice>$ 8.39</SummaryItemPrice>
            </SummaryItem>
            
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Wrapper>
    </Container>
    </div>
  )
}
