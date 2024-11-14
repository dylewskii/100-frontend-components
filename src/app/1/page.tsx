/* eslint-disable @next/next/no-img-element */
export default function One() {
  return (
    <section className="flex flex-col items-center  rounded-2xl shadow-lg bg-white h-[32rem] w-[32rem] text-black">
      <header className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="rounded-t-2xl absolute top-0 left-0 z-10"
        >
          <path
            fill="#ff5500"
            fillOpacity="1"
            d="M0,192L40,208C80,224,160,256,240,272C320,288,400,288,480,266.7C560,245,640,203,720,165.3C800,128,880,96,960,106.7C1040,117,1120,171,1200,170.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="rounded-t-2xl absolute top-0 left-0 z-10"
        >
          <path
            fill="#ff7436"
            fillOpacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,240C320,245,400,235,480,202.7C560,171,640,117,720,106.7C800,96,880,128,960,170.7C1040,213,1120,267,1200,272C1280,277,1360,235,1400,213.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="rounded-t-2xl absolute top-0 left-0 z-10 pb-10"
        >
          <path
            fill="#ff854f"
            fillOpacity="1"
            d="M0,32L40,53.3C80,75,160,117,240,133.3C320,149,400,139,480,117.3C560,96,640,64,720,69.3C800,75,880,117,960,165.3C1040,213,1120,267,1200,256C1280,245,1360,171,1400,133.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <img
          src="https://images.unsplash.com/photo-1668766418520-04797d637e78?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          className="rounded-full max-h-8"
        />
      </header>

      <div className="pt-20 flex flex-col justify-center items-center ">
        <p className="text-2xl">Lorem Ipsum</p>
        <span className="text-sm text-black/60">@loremipsum</span>
      </div>

      <div></div>

      <div className="px-12 text-center tracking-tighter">
        <p>
          Crafting brand and communication stratgies, creating visual designs,
          leading art direction and capturing portraits through photography.
        </p>
      </div>

      <div className="flex gap-4">
        <a
          href=""
          className="px-8 py-2 bg-orange-300 rounded-2xl text-xs font-bold flex items-center"
        >
          Follow
        </a>
        <a
          href=""
          className="px-8 py-2 bg-white border-2 border-orange-300 rounded-2xl text-xs font-bold flex items-center"
        >
          Message
        </a>
      </div>
    </section>
  );
}
