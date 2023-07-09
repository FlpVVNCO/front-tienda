import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import { TasksProvider } from "./context/TasksContext";
import ProductPage from "./pages/ProductPage";
import { ProductsProvider } from "./context/ProductContext";
import ProductFormPage from "./pages/ProductFormPage";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <ProductsProvider>
          <BrowserRouter>
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
