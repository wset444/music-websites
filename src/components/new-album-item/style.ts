import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: 20px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`;
