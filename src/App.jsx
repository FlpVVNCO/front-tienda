import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import { TasksProvider } from "./context/TasksContext";
import ProductPage from "./pages/ProductPage";
import { ProductsProvider } from "./context/ProductContext";
import ProductFormPage from "./pages/ProductFormPage";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductViewPage from "./pages/ProductViewPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedAdminRoute />}>
                <Route path="/product" element={<ProductPage />} />
                <Route path="/add-product" element={<ProductFormPage />} />
                <Route path="/product/:id" element={<ProductFormPage />} />
                <Route path="/admin/profile" element={<ProfilePage />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/productos/:id" element={<ProductViewPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
