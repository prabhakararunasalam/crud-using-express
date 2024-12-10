const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "laptop", price: 55000 },
  { id: 3, name: "headphone", price: 5000 },
  { id: 4, name: "printer", price: 15000 },
];

//get method

export const getProducts = (req, res) => {
  res
    .status(200)
    .json({ message: "product Retrived succesfully", data: products });
};

//getmethod by id

export const getProductById = (req, res) => {
  const productId = req.params.id;

  const productDetail = products.find((ele) => ele.id == productId);
  if (!productDetail) {
    return res.status(404).json({ message: "product Not Found" });
  }

  res
    .status(200)
    .json({ message: "product Retrived Successfully", data: productDetail });
};

//post method

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res
    .status(200)
    .json({ message: "product Added Successfully", data: newProduct });
};

//put /update method

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    res.status(404).json({ message: "Product Not Found" });
  }

  products[index].name = name;
  products[index].price = price;

  res
    .status(200)
    .json({ message: "product Updated Succesfully", data: products[index] });
};

//delete method

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    res.status(404).json({ message: "Product Not Found" });
  }

  products.splice(index, 1);
  res.status(200).json({ message: "product deleted successfully" });
};
