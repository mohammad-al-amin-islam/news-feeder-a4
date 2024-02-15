import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

export default function Main({selectedCategory,inputValue}) {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftMain selectedCategory={selectedCategory} inputValue={inputValue}/>
        <RightMain />
      </div>
    </main>
  );
}
