import {Route, Routes} from "react-router-dom"
import FloatingShape from "./components/FloatingShape"

import SignupPage from "./pages/SignupPage "
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"


function App() {

  return (
   <div className="min-h-screen bg-linear-to-br from-orange-800 via-pink-700 to-fuchsia-800 flex items-center justify-center relative overflow-hidden">
    <FloatingShape color="bg-pink-300" size="w-64 h-64" top="-5%" left="10%" delay={0} />
    <FloatingShape color="bg-orange-200" size="w-48 h-48" top="70%" left="80%" delay={5} />
    <FloatingShape color="bg-fuchsia-300" size="w-32 h-32" top="40%" left="-10%" delay={2} />

    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-email" element={<EmailVerificationPage />} />
    </Routes>
   </div>
  )
}

export default App      
