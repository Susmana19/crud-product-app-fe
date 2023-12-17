import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/css/addProduct.css";
import axios from "axios";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [dataStatus, setDataStatus] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [statusID, setStatusID] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [statusName, setStatusName] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();
  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);

    console.log("data id", response.data.data);
    setName(response?.data?.data?.nama_produk);
    setPrice(response?.data?.data?.harga);
    const catName = response?.data?.data?.nama_kategori;
    setCategoryName(catName);
    const statName = response?.data?.data?.nama_status;
    setStatusName(statName);
  };

  const getIdKategoriByCatName = (catName) => {
    let result = dataCategory.find((item) => item.nama_kategori === catName);
    if (result) {
      return result.id_kategori;
    } else {
      return "";
    }
  };
  const getIdStatusByStatName = (statName) => {
    let result = dataStatus.find((item) => item.nama_status === statName);

    if (result) {
      return result.id_status;
    } else {
      return "";
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const data = {
      nama_produk: name,
      harga: price,
      kategori_id:
        categoryID == "" ? getIdKategoriByCatName(categoryName) : categoryID,
      status_id: statusID == "" ? getIdStatusByStatName(statusName) : statusID,
    };
    console.log("name_produk", data.nama_produk);
    console.log("harga", data.harga);
    console.log("data_kategori", data.kategori_id);
    console.log("data_status", data.status_id);

    const urlProductId = `http://localhost:5000/products/${id}`;
    axios
      .patch(urlProductId, data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data.message);
        console.log(err.response.data.field);
        console.log(err.response.data);
        setError(err.response.data);
      });
  };

  const getCategory = async () => {
    const urlCategory = "http://localhost:5000/category";

    await axios
      .get(urlCategory)
      .then((result) => {
        console.log("dataCategory: ", result.data.data);
        setDataCategory(result.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getStatus = async () => {
    const urlStatus = "http://localhost:5000/status";

    await axios
      .get(urlStatus)
      .then((result) => {
        console.log(result.data.data);
        setDataStatus(result.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCategory();
    getStatus();

    setTimeout(() => {}, 5000);
    getProductById();
  }, []);

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
        onSubmit={updateProduct}
        className="flex w-[90%] mx-auto justify-evenly"
      >
        {/* form section */}
        <div className="w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="product-name" className="text-xl font-semibold">
                Nama Produk :
              </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                id="product-name"
                className="border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Nama Produk"
              />
              {error && error.field == "nama_produk" && name === "" && (
                <p className="text-red-500 text-sm">{error.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product-price" className="text-xl font-semibold">
                Harga :
              </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setPrice(e.target.value);
                }}
                value={price}
                type="number"
                id="product-price"
                className="remove-arrow border-b-2 border-[#4F5665] text-xl py-2 focus:outline-none"
                placeholder="Masukkan Harga Produk"
              />
              {error && error.field == "harga" && price === "" && (
                <p className="text-red-500 text-sm">{error.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {/* Pilih Kategori */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="product-category"
                  className="text-xl font-semibold"
                >
                  Kategori :
                </label>
                <div className="flex items-center">
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCategoryID(e.target.value);
                    }}
                    value={
                      categoryID == ""
                        ? getIdKategoriByCatName(categoryName)
                        : categoryID
                    }
                    id="product-category"
                    className="select select-bordered w-full max-w-xs text-xl"
                  >
                    <option disabled selected className="text-lg">
                      Pilih kategori disini
                    </option>

                    {dataCategory.map((cat, index) => {
                      const { id_kategori, nama_kategori } = cat;
                      return (
                        <option
                          key={index}
                          value={id_kategori}
                          className="text-xl"
                        >
                          {nama_kategori}
                        </option>
                      );
                    })}
                  </select>
                  {error && error.field == "kategori" && categoryID === "" && (
                    <p className="text-red-500 text-sm ml-5">{error.message}</p>
                  )}
                </div>
              </div>
              {/* Pilih Status */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="product-status"
                  className="text-xl font-semibold"
                >
                  Status :
                </label>
                <div className="flex items-center">
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      setStatusID(e.target.value);
                    }}
                    value={
                      statusID == ""
                        ? getIdStatusByStatName(statusName)
                        : statusID
                    }
                    id="product-status"
                    className="select select-bordered w-full max-w-xs text-xl"
                  >
                    <option disabled selected className="text-xl">
                      Pilih status disini
                    </option>
                    {dataStatus.map((stat, index) => {
                      const { id_status, nama_status } = stat;
                      return (
                        <option
                          key={index}
                          value={id_status}
                          className="text-xl"
                        >
                          {nama_status.toUpperCase()}
                        </option>
                      );
                    })}
                  </select>
                  {error && error.field == "status" && statusID === "" && (
                    <p className="text-red-500 text-sm ml-5">{error.message}</p>
                  )}
                </div>
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
