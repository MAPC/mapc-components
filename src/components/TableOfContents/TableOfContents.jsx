import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Table } from "airtable";
import { Link } from "react-router-dom";

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

  background-color: #c8e2ae;
`;

const TableSectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TableSectionText = styled.span`
  margin-bottom: 1rem;
`;

export const TableSectionLink = styled(Link)`
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
          tempLinks.push(<TableSectionLink>{link}</TableSectionLink>);
        });
        tempTable.push(
          <TableSection numSections={Object.values(data).length}>
            <TableSectionTitle>{section.title}</TableSectionTitle>
            <TableSectionText>{section.text}</TableSectionText>
            {tempLinks}
          </TableSection>
        );
      });

      setTableSections(tempTable);
    };

    generateTable(TableData);
  }, [TableData]);
  console.log(Height);

  return <TableContainer height={Height}>{tableSections}</TableContainer>;
};

export default TableOfContents;
