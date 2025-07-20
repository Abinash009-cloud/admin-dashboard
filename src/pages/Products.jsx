// src/pages/Products.jsx
import React, { useState } from "react";
import { useProductStore } from "../store/productStore";
import "./Products.css";

const Products = () => {
  const { products, addProduct, removeProduct, updateProduct } = useProductStore();
  const [form, setForm] = useState({ id: "", name: "", price: "", stock: "" });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newProduct = { ...form, id: Date.now().toString() };
    addProduct(newProduct);
    setForm({ id: "", name: "", price: "", stock: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditMode(true);
  };

  const handleUpdate = () => {
    updateProduct(form);
    setForm({ id: "", name: "", price: "", stock: "" });
    setEditMode(false);
  };

  const handleDelete = (id) => {
    removeProduct(id);
  };

  return (
    <div className="products-page">
      <h2>Manage Products</h2>

      <div className="form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" />
        {editMode ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>
                <button onClick={() => handleEdit(prod)}>✏️</button>
                <button onClick={() => handleDelete(prod.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
