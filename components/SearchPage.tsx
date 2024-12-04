"use client"

import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";

export default function SearchPage(){
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = (searchTerm:string) =>{
    const params = new  URLSearchParams(searchParams);
    if (searchTerm){
      params.set("query", searchTerm)
    }else{
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return(
      <input 
      defaultValue={searchParams.get('query')?.toString()}
      type="text" placeholder="Search products...." className="p-2 ml-7 mr-5 placeholder:italic text-slate-800 placeholder:text-slate-400 flex-1 w-72 rounded-full"
      onChange={(e) =>{handleSearch(e.target.value)}}/>
  )
}