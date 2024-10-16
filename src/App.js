import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-auto bg-[#102f59] pt-[20px] pb-[20px]">
      <p className="text-white text-center text-[20px] s1:text-[30px] font-[600] m-[20px]" >GIF GENERATOR</p>
      <div className="flex flex-col gap-[40px]">
        <Random />
        <Tag />
      </div>

    </div>

  );
}
