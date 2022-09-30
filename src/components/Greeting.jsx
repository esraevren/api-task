import { WiSunrise } from "react-icons/wi";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Greeting() {
  const date = new Date();
  const showTime = date.getHours();

  return (
    <div>
      {(() => {
        //      switch(showTime) {
        //         case showTime > 17 : return (<h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black ">
        //         İyi akşamlar <BsFillMoonStarsFill />{" "}
        //       </h1>)

        //       case showTime > 12 : return ( <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black ">
        //       {" "}
        //       Tünaydın <WiSunrise />{" "}
        //     </h1> )

        //     case showTime > 6 : return ( <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black ">
        //     Günaydın <WiSunrise />
        //   </h1>)
        //      }

        if (showTime < 12) {
          return (
            <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-gray-900 ">
              Günaydın <WiSunrise />
            </h1>
          );
        } else if (showTime < 18) {
          return (
            <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-gray-900 ">
              Tünaydın <WiSunrise />
            </h1>
          );
        } else {
          return (
            <h1 className="flex items-start justify-start gap-x-3 w-full text-2xl xl:text-4xl self-center font-bold text-gray-900 ">
              İyi akşamlar <BsFillMoonStarsFill />
            </h1>
          );
        }
      })()}
    </div>
  );
}

export default Greeting;
