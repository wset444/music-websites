import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  margin-top: 50px;
  .album-list {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }
  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow {
      position: relative;
      top: -12px;
      width: 30px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -250px -75px;
    }

    .arrow-right {
      background-position: -314px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
