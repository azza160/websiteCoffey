import { cartList } from "../../utils/constant";
import { BsFillTrashFill } from "react-icons/bs";

function ShoopingCartList() {
  return (
    <>
      {cartList.map((e) => {
        return (
          <div
            className="flex flex-col py-3 md:py-5 border-b border-b-[#333] relative md:flex-row md:items-center"
            key={e.id}
          >
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <img
                src={e.gambar}
                className="h-[150px] w-[200px] sm:h-[250px] sm:w-[250px] md:w-[150px] md:h-[150px] md:rounded-full rounded-md sm:rounded-lg object-fill"
              ></img>
            </div>
            <div className="flex justify-between items-center mt-3 sm:mt-5 md:mr-auto md:ml-5">
              <div>
                <h2 className="text-lg font-semibold sm:text-xl">{e.nama}</h2>
                <p className="font-light sm:text-lg">IDR {e.hargaDiskon}K</p>
              </div>
              <BsFillTrashFill className="text-2xl block md:hidden duration-300 cursor-pointer hover:scale-110" />
            </div>
            <BsFillTrashFill className="text-2xl hidden md:block duration-300 cursor-pointer hover:scale-110" />
            <span className="w-[25px] h-[25px] bg-primary text-sm text-white rounded inline-flex justify-center items-center absolute top-0">
              {e.id}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default ShoopingCartList;
