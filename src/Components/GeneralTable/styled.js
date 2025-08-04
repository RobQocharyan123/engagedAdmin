import { Col } from "antd";
import styled from "styled-components";

export const GeneralTableBlock = styled(Col)`
  padding: 20px;
  .ant-table-thead {
    .ant-checkbox {
      display: none;
    }
  }
  .ant-checkbox {
    border-radius: 5px;
    border: 1px solid black;
  }

  .ant-table {
    background: transparent;
  }
  .ant-table-wrapper {
    background-color: transparent;
    border: none;
  }
  .ant-table-column-sorters::after {
    background: transparent;
  }

  .ant-table-row {
    height: 50px !important;
  }
  .ant-table-cell {
    background-color: transparent;
  }

  .ant-table-thead > tr > th {
    font-size: 14px !important;
    text-align: center;
    background-color: transparent !important;
  }

  .ant-table-tbody > tr > td {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7) !important;
  }

  .ant-table-body {
    height: calc(100vh - 150px);
    max-height: 480px;
    overflow-y: auto;
  }

  border-radius: 20px;
  padding: 5px;
  a,
  li,
  button {
    border-radius: 100px !important;
  }

  .ant-pagination-total-text {
    height: max-content;
  }

  .ant-spin-container {
    position: relative;
    transition: opacity 0.3s;
  }
  .ant-table-body {
    overflow-y: auto !important;
  }
  .ant-table-row {
    height: 50px !important;
    td,
    th {
      background: transparent !important;
    }
  }

  .ant-table-row > td {
    border-bottom: 10px solid rgba(241, 241, 255, 1) !important;
  }

  .ant-table-thead > tr > th {
    font-size: 12px;
    text-align: center;
    background-color: transparent !important;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    font-family: "Noto Sans Armenian";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #475569;
  }
  .ant-checkbox {
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-checkbox-inner {
    border-radius: 6px;
    border: none;
    &:hover {
      border-radius: 6px;
    }
  }

  .expand-parent {
    background: rgba(226, 232, 240, 0.4);
  }

  .ant-table-tbody > tr > td {
    border: 0;
  }
  tr.ant-table-expanded-row > td,
  tr.ant-table-expanded-row:hover > td {
    background: transparent;
    padding-top: 0px;
  }

  .ant-table-container {
    th {
      background: #fff;
    }

    .ant-table-thead {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .ant-table-row > .ant-table-row-level-0 > td {
      gap: 10px;
      width: 867px;
      background: #ffffff;
      border: 1px solid #e2e8f0 !important;
      border-radius: 12px !important;
    }
    .ant-table-thead > tr > th {
      background: #ffffff;
      font-family: "Noto Sans Armenian";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #94a3b8;
    }
    .ant-table-thead > tr > th:nth-child(10),
    .ant-table-thead > tr > th:nth-child(11) {
      text-align: center;
    }
  }
`;
