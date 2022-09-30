import Weather from "./Weather";
import News from "./News";
import Greeting from "./Greeting";

function Content() {
  return (
    <div className=" w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3">
      {/* left section */}
      <div className=" items-center justify-center flex flex-col col-span-2 h-full   py-1 px-1 w-full ">
        {/* upper section */}
        <div className=" pb-1 pt-4 px-3 w-full h-full space-y-8">
          {/* title + icons */}
          <div className=" py-1 px-2 items-center justify-center w-full flex">
            <h1 className="flex w-full   ">
              <Greeting />
            </h1>

            <div className="flex items-end justify-end w-full space-x-4">
              <div className="icon-container"></div>
            </div>
          </div>

          {/* center part */}
          <Weather />
        </div>
        {/* lower section */}
        <div className="px-3 w-full h-full -mt-12">
          <h1 className="flex items-start justify-start w-full text-xl xl:text-2xl self-center font-bold text-gray-900 ">
            Gündem
          </h1>
          <News />
        </div>
      </div>
      {/* right section  */}
      <div className=" col-span-1 h-full xl:flex xl:flex-col  space-y-6 py-2 px-6 w-full">
        <div className=" border border-gray-200 shadow-2xl rounded-t-lg">
          <div className="p-2  shadow bg-red-400  text-indigo-100 uppercase grid place-items-center rounded-t-lg">
            <div className="text-sm">feb</div>
            <div className="text-3xl">3</div>
          </div>

          <div className="grid gap-1 p-5">
            <p className="text-slate-400 text-sm">Feb 13- Feb 16</p>
            <h2 className="font-bold text-2xl">Etkinliği unutma !</h2>
          </div>
        </div>
        <div className=" md:p-6 lg:p-8 grid gap-2 md:gap-6"></div>
      </div>
    </div>
  );
}

export default Content;
