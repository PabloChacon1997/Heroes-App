import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams,] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const {data} = useQuery({
    queryKey: ['search', name],
    queryFn: () => searchHeroesAction({name}),
    staleTime: 1000 * 60 * 5
  });

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
      <HeroGrid heroes={data?.heroes ?? []} />
    </>
  )
}

export default SearchPage;
