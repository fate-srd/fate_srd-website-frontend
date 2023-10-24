import Link from "next/link"

export function Layout({ children, aside }) {
  return (
    <div className="page-wrapper">
    {/* <Header /> */}
    <div className="site-main">
      <div
        className={
          aside
            ? 'site-main__content site-main__content--aside'
            : 'site-main__content'
        }
      >
        {children}
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  )
}
