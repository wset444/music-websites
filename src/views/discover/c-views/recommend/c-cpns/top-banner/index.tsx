import { useApp } from '@/store';
import React, { ReactNode, memo, FC, useRef, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef: any = useRef();
  const { banners } = useApp((state) => ({
    banners: state.recommend.banners
  }));
  const onNext = () => {
    bannerRef.current.next();
  };
  const onPrev = () => {
    bannerRef.current.prev();
  };
  const handAfterChange = (item: number) => {
    setCurrentIndex(item);
    // console.log(item);
  };
  let bgImageUrl = banners[currentIndex]?.imageUrl;

  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20';
  }

  // useEffect(() => {

  // }, [currentIndex]);

  return (
    <BannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            arrows={false}
            infinite={true}
            autoplay
            speed={1000}
            effect="fade"
            ref={bannerRef}
            afterChange={handAfterChange}
          >
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
          {/* <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={index}>
                  <span className="item"></span>
                </li>
              );
            })}
          </ul> */}
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={onPrev}></button>
          <button className="btn right" onClick={onNext}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};
export default memo(TopBanner);
