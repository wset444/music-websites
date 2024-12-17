import { useApp } from '@/store';
import React, { ReactNode, memo } from 'react';
import type, { FC } from 'react';
import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = (props: IProps) => {
  const { banners } = useApp((state) => ({
    banners: state.recommend.banners
  }));
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel arrows={false} infinite={true} autoplay speed={1000}>
            {banners.map((item, key) => {
              return (
                <div className="banner-item" key={key}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};
export default memo(TopBanner);
