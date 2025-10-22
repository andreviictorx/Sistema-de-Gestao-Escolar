import styled from "styled-components";


export const StyledTable = styled.table`
  width: 100%;
  user-select: none;
  border-collapse: collapse;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border-radius: 8px;
  overflow: hidden;
  margin: 40px 0;
  table-layout: auto;

  thead {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  tbody {
    background-color: ${({ theme }) => theme.colors.bgCard};
    color: ${({ theme }) => theme.colors.textDark};
  }

  th,
  td {
    height: 50px;
    padding: 12px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    text-align: left;
  }

  th {
    font-size: 1rem;
    font-weight: 500;
  }

  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .actions {
    width: 150px;
    text-align: center;
  }

  .actions > .link {
    margin-right:10px
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 35%;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tbody > tr:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 640px) {
    box-shadow: none;
    border: none;

    thead {
      display: none;
    }

    tr {
      display: block;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      margin-bottom: 15px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.bgCard};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }

    td {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      text-align: left;
      white-space: normal;
      overflow: visible;

      &::before {
        content: attr(data-label);
        font-weight: bold;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.textMuted};
        padding-right: 10px;
      }
    }

    .actions {
      text-align: left;
      width: 100%;
    }

    tr:hover {
      background-color: ${({ theme }) => theme.colors.bgCard};
    }
  }
`;