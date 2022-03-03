import React, { useEffect, useState } from 'react';
import {Image, ImageWrapper, OverLay, OverLaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span } from './style.js';
import axios from 'axios';
const Portfolio = () =>    {

    const [images , setImages] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio) } )

    } , [])

    console.log(images);

    const PortfolioImages = images.map((imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                    <Image src={imageItem.image} alt=""/>
                    <OverLay>
                        <OverLaySpan>
                            Show Image
                        </OverLaySpan>
                    </OverLay>
            </ImageWrapper>

        )

    } )

    return(
     <PortfolioSection >
          <div class="portfolio">
            <PortfolioTitle ><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem >Photoshop</PortfolioItem>
                <PortfolioItem >Wordpress</PortfolioItem>
                <PortfolioItem >Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                
            
            {PortfolioImages}
                
            </div>
            
        </div>
      </PortfolioSection>
     )
  }

  export default Portfolio ;