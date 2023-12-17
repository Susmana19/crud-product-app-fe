import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/addProduct.css";

function UpdateProduct() {
  return (
    <>
      <Link to={"/"}>
        <button className="w-[10%] mt-10 ml-10 bg-[#FFBA33] text-[#6A4029] h-10 rounded-lg text-xl font-bold">
          Back
        </button>
      </Link>
      <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-double mb-5">
        UPDATE PRODUK
      </h1>
      <form
        onSubmit="addProduct"
        className="flex w-[90%] mx-auto justify-evenly"
      >
        {/* Upload Image Section */}

        {/* form section */}
        <div className="w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="product-name" className="text-xl font-semibold">
                Nama Produk :
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                name
                id="product-name"
                className="border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Nama Produk"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product-price" className="text-xl font-semibold">
                Harga :
              </label>
              <input
                onChange="inputPrice"
                type="number"
                name
                id="product-price"
                className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Harga Produk"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="product-category"
                  className="text-xl font-semibold"
                >
                  Kategori :
                </label>
                <select
                  onChange="selectedCategory"
                  id="product-category"
                  className="select select-bordered w-full max-w-xs text-xl"
                >
                  <option disabled selected className="text-lg">
                    Pilih kategori disini
                  </option>
                  <option value="coffee" className="text-xl">
                    L QUEENLY
                  </option>
                  <option value="non-coffee" className="text-xl">
                    SP MTH SPAREPART (LK)
                  </option>
                  <option value="foods" className="text-xl">
                    L MTH TABUNG (LK)
                  </option>
                  <option value="add-on" className="text-xl">
                    CI MTH TINTA LAIN (IM)
                  </option>
                  <option value="non-coffee" className="text-xl">
                    L MTH AKSESORIS (IM)
                  </option>
                  <option value="foods" className="text-xl">
                    L MTH AKSESORIS (LK)
                  </option>
                  <option value="add-on" className="text-xl">
                    S MTH STEMPEL (IM)
                  </option>
                </select>
              </div>
              {/* Pilih Status */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="product-category"
                  className="text-xl font-semibold"
                >
                  Status :
                </label>
                <select
                  onChange="selectedCategory"
                  id="product-category"
                  className="select select-bordered w-full max-w-xs text-xl"
                >
                  <option disabled selected className="text-xl">
                    Pilih status disini
                  </option>
                  <option value="coffee" className="text-xl">
                    Bisa Dijual
                  </option>
                  <option value="non-coffee" className="text-xl">
                    Tidak Bisa Dijual
                  </option>
                </select>
              </div>
              <button
                id="form-submit"
                type="submit"
                className="mt-5 text-center cursor-pointer hover:text-[#6A4029] hover:bg-[#FFBA33] px-5 py-3 text-xl font-bold rounded-md bg-[#6A4029] text-[#FFBA33]"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProduct;
