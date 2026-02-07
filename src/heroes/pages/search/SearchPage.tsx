import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"/>

      <CustomBreadcrumbs currentPage="Buscador de héroes"
        // breadCrumbs={
        //   [
        //     { label: 'Home', to: '/' },
        //     { label: 'Home1', to: '/' },
        //     { label: 'Home2', to: '/' },
        //   ]
        // }
      />
      <HeroStats />
      <SearchControls />
    </>
  )
}

export default SearchPage;
