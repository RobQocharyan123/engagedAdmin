import { Col } from 'antd';
import styled from 'styled-components';

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
    height: calc(100vh - 160px);
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
`;
