import StickySearchBar from "@/components/StickySearchBar";
import SearchOriginal from "./PageOriginal";

export default function Search({ searchParams }: { searchParams: { [key:string]: string | string[] | undefined }}) {
  return (
    <>
      <StickySearchBar />
      <SearchOriginal searchParams={searchParams} />
    </>
  );
}
