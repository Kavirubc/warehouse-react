import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Admin() {
    return (
        <Router>
            <nav className="bg-gray-800 text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center space-x-4">
                    <Link to="#products" className="hover:underline">Products</Link>
                    <Link to="#brands" className="hover:underline">Brands</Link>
                    <Link to="#teams" className="hover:underline">Teams</Link>
                    <Link to="#stocks" className="hover:underline">Stocks</Link>
                    <Link to="#orders" className="hover:underline">Orders</Link>
                </div>
            </nav>

            <div id="products" className="section">
                <h2>Products</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Description:</label>
                    <textarea></textarea>
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div id="brands" className="section">
                <h2>Brands</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Description:</label>
                    <textarea></textarea>
                    <button type="submit">Add Brand</button>
                </form>
            </div>

            <div id="teams" className="section">
                <h2>Teams</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Description:</label>
                    <textarea></textarea>
                    <button type="submit">Add Team</button>
                </form>
            </div>

            <div id="stocks" className="section">
                <h2>Stocks</h2>
                <form>
                    <label>Product:</label>
                    <select>
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                    </select>
                    <label>Quantity:</label>
                    <input type="number" />
                    <button type="submit">Update Stock</button>
                </form>
            </div>

            <div id="orders" className="section">
                <h2>Orders</h2>
                <form>
                    <label>Product:</label>
                    <select>
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                    </select>
                    <label>Quantity:</label>
                    <input type="number" />
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </Router>
    );
}

export default Admin;
