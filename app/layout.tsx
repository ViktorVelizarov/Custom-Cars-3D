import AuthProvider from './AuthProvider';
import Navbar from 'components/Navbar';
import './globals.css'

 function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <AuthProvider> 
      <html lang="en">
        <body >
        <Navbar />
        {children}
        </body>
      </html>
      </AuthProvider>
    )
  }

  export default RootLayout;