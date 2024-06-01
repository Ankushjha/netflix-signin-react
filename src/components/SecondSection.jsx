import SecondSectionBox from "./SecondSectionBox";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";

export default function SecondSection() {

  const cardData = [
    {
      firstContainer: [
        {
          title: 'Enjoy on your TV',
          description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        },
        {
          // title: 'Full Card',
          image: image1, // Example image
        },
      ]
    },



    {
      secondContainer: [

        {
          // title: 'Full Card',
          image: image2, // Example image
        },
        {
          title: 'Download your shows to watch offline',
          description: 'Save your favourites easily and always have something to watch.',
        },
      ]
    },
  
  {
      thirdContainer: [
        {
          title: 'Watch everywhere',
          description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        },
        {
          // title: 'Full Card',
          image: image3, // Example image
        },
      ]
    },

    {fourthContainer : [

      {
        // title: 'Full Card',
        image: image4, // Example image
      },
      {
        title: 'Create profiles for kids',
        description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      },
    ]},
  

  ];


  return (
    <>
      <SecondSectionBox cards={cardData[0].firstContainer} />
      <div className='h-2 bg-gray-900'/>
      <SecondSectionBox cards={cardData[1].secondContainer} />
      <div className='h-2 bg-gray-900'/>
      <SecondSectionBox cards={cardData[2].thirdContainer} />
      <div className='h-2 bg-gray-900'/>
      <SecondSectionBox cards={cardData[3].fourthContainer} />
    </>
  );
}