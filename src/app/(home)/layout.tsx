import NavegationBar from "@/app/(home)/components/NavegationBar"

export default function HomeLayout (
  {children, 
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavegationBar></NavegationBar>
      {children}
    </>
  )
}