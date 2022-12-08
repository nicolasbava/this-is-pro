import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from './layout';
import { CoverPage } from './coverpage';
import { Gallery } from './gallery';
import FormContact from './form';
import { PlinthTitle } from './plinthtitle';
import { SocialMedia } from './socialmedia';

interface Props {
  contact: object,
  curriculum: object,
  image: object,
  personal: object,
  social: object,
  color1: string,
}

const Home: React.FC<Props> = ({
  contact,
  curriculum,
  image,
  personal,
  social,
  color1
}) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>{personal.TIPO ? personal.EMPRESA:personal.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Layout color={color1}>
        <CoverPage
          name={personal.TIPO ? personal.EMPRESA:personal.NAME}
          description={personal.TIPO ? personal.ESLOGAN:personal.CARGO}
          colorName={personal.COLORNAME}
          colorDescription={personal.COLORDESCRIPTION}
          coverPageUrl={image.BANNER}
          information={personal.HISTORY}
          pdf={curriculum.CURRICULUM_VITAE}
          imgInformation={image.INFORMATION}
          color={color1}
        />
        <SocialMedia
          name={personal.NAME}
          linkedin={social.LINKEDIN}
          youtube={social.YOUTUBE}
          twitter={social.TWITTER}
          facebook={social.FACEBOOK}
          instagram={social.INSTAGRAM}
          tiktok={social.TIKTOK}
          telegram={social.TELEGRAM}
          wijex={social.WIJEX}
        />
        <PlinthTitle
          title={'Galería'}
          color={color1}
        />
        <Gallery
          gallery_1={image.GALLERY_1}
          gallery_2={image.GALLERY_2}
          gallery_3={image.GALLERY_3}
        />
        
        <PlinthTitle
          title={'Quiero más información'}
          color={color1}
        />
        <FormContact
          name={personal.NAME}
          email={contact.EMAIL}
          background={'/profile/maria-llapur/maria-llapur17.png'}
          phone={contact.PHONE}
          address={contact.ADDRESS}
          number={contact.NUMBER}
          locality={contact.LOCALITY}
          province={contact.PROVINCE}
          country={contact.COUNTRY}
          avatar={image.AVATAR}
          url={''}
          color={color1}
          latitud={contact.LATITUD}
          longitud={contact.LONGITUD}
        /> 
        
      </Layout>
    </div>
  )
}

export default Home
