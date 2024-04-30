import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import * as style_theme from "../../themes/styles";

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => {
    props.height ? props.height : "400px";
  }};
  /* padding: 1rem 1rem; */
`;

const CardsSection = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => `calc((100% / ${props.numSections}) - ${props.numSections} * 1%)`};
  margin: ${(props) => `calc(${props.numSections} * 0.5%)`};

  padding: ${(props) => `calc(2rem) calc(4rem / ${props.numSections})`};
  border-radius: 5px;

  border-style: solid;
  border-width: 3px;
  border-color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.tertiary};
`;

const CardsSectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondary};
`;

const CardsSectionText = styled.span`
  margin-bottom: 1rem;
`;

const CardsSectionLinkUl = styled.ul`
  list-style-type: "⭐ ";

  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: end;
`;

const CardsSectionLinkLi = styled.li`
  color:;
`;

const CardsSectionLink = styled.a`
  font-family: sans-serif;
`;

// CardsData structure: [{title:string, text:string, links: string[]}, ...]
export const ContentCards = ({ CardsData, Themes, Height }) => {
  const [CardsSections, setCardsSections] = useState([]);

  useEffect(() => {
    const generateCards = (data) => {
      const tempCards = [];

      Object.values(data).forEach((section) => {
        const tempLinks = [];

        section.links.forEach((link) => {
          tempLinks.push(
            <CardsSectionLinkLi>
              <CardsSectionLink
                href={window.location.origin + "/" + link.link}
                style={style_theme.themed_link(Themes)}
              >
                {link.name}
              </CardsSectionLink>
            </CardsSectionLinkLi>
          );
        });
        tempCards.push(
          <CardsSection numSections={Object.values(data).length}>
            <CardsSectionTitle>{section.title}</CardsSectionTitle>
            <CardsSectionText>{section.text}</CardsSectionText>
            <CardsSectionLinkUl>{tempLinks}</CardsSectionLinkUl>
          </CardsSection>
        );
      });

      setCardsSections(tempCards);
    };

    generateCards(CardsData);
  }, [CardsData]);
  console.log(Themes);
  return (
    <CardsContainer height={Height}>
      <ThemeProvider theme={Themes}>{CardsSections}</ThemeProvider>
    </CardsContainer>
  );
};

export default ContentCards;
