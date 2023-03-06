import Head from "next/head";
import Link from "next/link";
export default function Dash(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>API TESTS</title>
      </Head>
      <header className="w-full bg-white p-4 flex justify-between items-center">
        <nav className="flex items-center">
          <img className="w-7 h-7" src="/logo.png" />
          <div className="text-gray-600 text-xs hidden sm:block ml-2">
            <Link href="/copynpay">
              
              <a
                href=""
                className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer"
              >
                Dashboard
              </a>
            </Link>
            <a
              href="/servertoserver"
              className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
            >
              Test Cards
            </a>
            <a
              href="/servertoserver"
              className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
            >
              Issues
            </a>
            <a
              href="/servertoserver"
              className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
            >
              Boards
            </a>
          </div>
        </nav>
      </header>

      <main className="flex w-full h-screen">
        {/* side bar */}
        <aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
          <div className="flex flex-col justify-between h-screen p-4 bg-gray-200">
            <div className="text-sm">
              <Link href="/servertoserver">
                <div className="bg-gray-900 bg-white text-gray-600 p-2 rounded mt-2 cursor-pointer hover:bg-white hover:opacity-100 hover:text-orange-primary transform md:hover:translate-x-8 duration-300 hover:shadow-xl border-l-4 hover:border-orange-primary md:focus:translate-x-8 ">
                  <a> Server to Server</a>
                </div>
              </Link>

              <Link href="/copynpay">
                <div className="bg-gray-900 bg-white text-gray-600 p-2 rounded mt-2 cursor-pointer hover:bg-white hover:opacity-100 hover:text-orange-primary transform md:hover:translate-x-8 duration-300 hover:shadow-xl border-l-4 hover:border-orange-primary md:focus:translate-x-8 ">
                  <a> Copy and Pay</a>
                </div>
              </Link>

              <Link href="/eftswitch">
                <div className="bg-gray-900 bg-white text-gray-600 p-2 rounded mt-2 cursor-pointer hover:bg-white hover:opacity-100 hover:text-orange-primary transform md:hover:translate-x-8 duration-300 hover:shadow-xl border-l-4 hover:border-orange-primary md:focus:translate-x-8 ">
                  <a> EFT Switch</a>
                </div>
              </Link>
            </div>
          </div>
        </aside>
        {/* Dashboard */}
        <section className="w-full p-4">
          <div className="w-full h-full border-dashed border-4 p-4 text-md">
            {props.children}
          </div>
        </section>
      </main>
    </div>
  );
}
