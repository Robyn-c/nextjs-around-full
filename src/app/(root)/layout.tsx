import NavegationBar from "@/app/(root)/components/NavegationBar"
import ProfileSettings from "./components/ProfileSettings"

export default function HomeLayout (
  {children, 
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header >
        <NavegationBar/>
        {/* Account placeholder */}
        <ProfileSettings/>
      </header>
      {children}

    </>
  )
}