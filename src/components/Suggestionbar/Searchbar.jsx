import { AiOutlineSearch } from "../../asset/icons";

const Searchbar = () => {
  return (
    <>
      <div className=" mx-10 my-5 p-4 flex items-center gap-3 bg-white rounded-t-md shadow-md border">
        <input className="w-full" type="text" placeholder="Search..."/>
        <AiOutlineSearch size="22" />
      </div>
    </>
  );
};

export default Searchbar;
