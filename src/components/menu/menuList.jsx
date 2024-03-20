import { menupack } from "../../utils/constant";

function Menulist() {
  return (
    <>
      {menupack.map((e, i) => {
        return (
          <div className="text-center" key={i}>
            <img
              src={e.gambar}
              alt="espresson"
              className="w-[260px] h-[260px] rounded-full"
            ></img>
            <h3 className="mt-2 font-medium">
              <span className="mr-1">{">"}--</span> {e.nama}{" "}
              <span className="ml-1">--{"<"}</span>
            </h3>
            <p className="text-sm font-light">IDR {e.harga}K</p>
          </div>
        );
      })}
    </>
  );
}

export default Menulist;
