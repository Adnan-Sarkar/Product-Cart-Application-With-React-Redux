import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "./../redux/product/actions";

const ProductInput = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    name: "",
    category: "",
    imgUrl: "",
    price: "",
    quantity: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(userInput));
    setUserInput({
      name: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });
  };

  const handleProductNameInput = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  };

  const handleCategoryInput = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        category: e.target.value,
      };
    });
  };

  const handleImgUrlInput = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        imgUrl: e.target.value,
      };
    });
  };

  const handlePriceInput = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        price: e.target.value,
      };
    });
  };

  const handleQuantityInput = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        quantity: e.target.value,
      };
    });
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={submitHandler}
      >
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            value={userInput.name}
            onChange={handleProductNameInput}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            value={userInput.category}
            onChange={handleCategoryInput}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            value={userInput.imgUrl}
            onChange={handleImgUrlInput}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={userInput.price}
              onChange={handlePriceInput}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              value={userInput.quantity}
              onChange={handleQuantityInput}
            />
          </div>
        </div>
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInput;
