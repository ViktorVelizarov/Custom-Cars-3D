import AuthProvider from './AuthProvider';
import Navbar from 'components/Navbar';
import './globals.css'
import AllCars from "components/AllCars";
 function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <AuthProvider> 
      <html lang="en">
        <body className='bg-red-700 '>
        <div className="fixed left-5 w-40  top-7  h-96">
          <AllCars/>
          </div>
        {children}
        </body>
      </html>
      </AuthProvider>
    )
  }

  export default RootLayout;