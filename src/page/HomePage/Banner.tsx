import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { getBanner } from '../../plugins/apis'
import { imageCover } from '../../plugins/style'
import { Link } from 'react-router-dom'

interface bannerImgae {
  targetId: number
  imageUrl: string
  typeTitle: string
  titleColor: string
}

export const Banner = () => {
  const [bannerImgaes, setBannerImgaes] = useState([])

  useEffect(() => {
    getBanner().then(({ banners }) => {
      setBannerImgaes(banners)
    })
  }, [])

  const settings = {
    className: 'banner-center',
    centerMode: true,
    infinite: true,
    centerPadding: '70px',
    slidesToShow: 1,
    speed: 500,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
      {bannerImgaes.map((bannerImgae: bannerImgae) => {
        return (
          <Link
            key={bannerImgae.targetId}
            to={bannerImgae.imageUrl}
            css={{
              padding: '0 10px'
            }}
          >
            <div
              css={{
                position: 'relative',
                borderRadius: '10px',
                backgroundImage: `url('${bannerImgae.imageUrl}')`,
                ...imageCover('100%', '200px')
              }}
            >
              <span
                css={{
                  position: 'absolute',
                  right: '0',
                  bottom: '0',
                  borderTopLeftRadius: '10px',
                  padding: '5px 10px',
                  color: '#fff',
                  backgroundColor: bannerImgae.titleColor
                }}
              >
                {bannerImgae.typeTitle}
              </span>
            </div>
          </Link>
        )
      })}
    </Carousel>
  )
}
