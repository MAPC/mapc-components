import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import * as style_theme from "../../themes/styles";

const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => {
    props.height ? props.height : "400px";
  }};
  /* padding: 1rem 1rem; */
`;

const TableSection = styled.div`
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

const TableSectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondary};
`;

const TableSectionText = styled.span`
  margin-bottom: 1rem;
`;

const TableSectionLinkUl = styled.ul`
  list-style-type: "⭐ ";

  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: end;
`;

const TableSectionLinkLi = styled.li`
  color:;
`;

const TableSectionLink = styled.a`
  font-family: sans-serif;
`;

// TableData structure: [{title:string, text:string, links: string[]}, ...]
export const TableOfContents = ({ TableData, Themes, Height }) => {
  const [tableSections, setTableSections] = useState([]);

  useEffect(() => {
    const generateTable = (data) => {
      const tempTable = [];

      Object.values(data).forEach((section) => {
        const tempLinks = [];

        section.links.forEach((link) => {
          tempLinks.push(
            <TableSectionLinkLi>
              <TableSectionLink
                href={window.location.origin + "/" + link.link}
                style={style_theme.themed_link(Themes)}
              >
                {link.name}
              </TableSectionLink>
            </TableSectionLinkLi>
          );
        });
        tempTable.push(
          <TableSection numSections={Object.values(data).length}>
            <TableSectionTitle>{section.title}</TableSectionTitle>
            <TableSectionText>{section.text}</TableSectionText>
            <TableSectionLinkUl>{tempLinks}</TableSectionLinkUl>
          </TableSection>
        );
      });

      setTableSections(tempTable);
    };

    generateTable(TableData);
  }, [TableData]);
  console.log(Themes);
  return (
    <TableContainer height={Height}>
      <ThemeProvider theme={Themes}>{tableSections}</ThemeProvider>
    </TableContainer>
  );
};

export default TableOfContents;
