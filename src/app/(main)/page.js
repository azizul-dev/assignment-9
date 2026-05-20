import AdoptionProcess from "@/components/AdoptionProcess";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import PetCareTips from "@/components/PetCareTips";
import PetCategories from "@/components/PetCategories";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";


export default function Home() {
  return (
    <div>
      
      <Banner/>
      <Featured/>
      <WhyAdopt/>
      <PetCategories/>
      <SuccessStories/>
      <PetCareTips/>
      <AdoptionProcess/>
    </div>
  );
}
