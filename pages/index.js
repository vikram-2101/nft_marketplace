import React, { useContext, useEffect, useState } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";

import { getTopCreators } from "../TopCreators/TopCreators";

// SMART CONTRACT IMPORT

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  // CREATOR LIST
  const creators = getTopCreators(nfts);

  useEffect(() => {
    fetchNFTs()
      .then((item) => {
        if (Array.isArray(item)) {
          setNfts(item.reverse()); // Only reverse if it's an array
          setNftsCopy(item);
          console.log(item.reverse());
        } else {
          console.error("Fetched data is not an array:", item);
        }
      })
      .catch((error) => {
        console.error("Error fetching NFTs:", error);
      });
  }, []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      {/* <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      <FollowerTab TopCreator={creators} />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
