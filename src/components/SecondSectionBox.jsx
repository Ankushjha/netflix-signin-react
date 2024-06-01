import SecondSectionCard from "./SecondSectionCard";

export default function SecondSectionBox ({cards}){

    const height = {
        height: '582px',
    }
    // return(
    //     <>
    //     <div className="bg-black flex items-center justify-center" style={height}>
    //         <div className="pr-2">
    //         {cardData.map((data, index) => (
    //             <SecondSectioncard key={index} {...data} />
    //           ))}
    //         </div>
    //     </div>
    //     </>
    // )

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center mx-auto px-4 py-6" style={height}>
          <div className="w-4/5">
          <div className="flex justify-center h-auto">
            {cards.map((card, index) => (
              <SecondSectionCard key={index} {...card} />
            ))}
            </div>
          </div>
        </div>
      );
}