import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 190px 155px 155px 140px 160px 140px 1fr;
  width: 100%;
  align-items: center;
  > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    &:first-of-type {
      margin-left: 15px;
    }
  }
`;
