export default function Page() {
  return (
    <div className="flex flex-col gap-4 bg-white text-black px-6 py-6 rounded-lg w-[400px]">
      <p className="font-bold text-xl">Send us a Message</p>

      <div className="flex flex-col relative">
        {/* <label htmlFor="fullName" className="absolute text-gray-400">
          Full Name
        </label> */}
        <input
          placeholder="Name"
          id="fullName"
          type="text"
          className="border-gray-400 border-2 rounded-md px-2 py-[5px]"
        />
      </div>

      <div className="flex flex-col">
        {/* <label htmlFor="email">Email</label> */}
        <input
          placeholder="Email"
          id="email"
          type="email"
          className="border-gray-400 border-2 rounded-md px-2 py-[5px]"
        />
      </div>

      <div className="flex flex-col">
        {/* <label htmlFor="phoneNr">Phone</label> */}
        <input
          placeholder="Phone"
          id="phoneNr"
          type="phone"
          className="border-gray-400 border-2 rounded-md px-2 py-[5px]"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="preferredContact">
          Preferred method of communication
        </label>
        <div className="flex items-center gap-2">
          <input id="emailPreferred" type="radio" name="preferredContact" />
          <label htmlFor="emailPreferred">Email</label>

          <input type="radio" id="phonePreferred" name="preferredContact" />
          <label htmlFor="phonePreferred">Phone</label>
        </div>
      </div>

      <div>
        <textarea
          rows={5}
          name=""
          id=""
          placeholder="Message"
          className="border-gray-400 border-2 rounded-md p-2 w-full"
        ></textarea>
      </div>

      <div>
        <button className="bg-yellow-500 px-4 py-2 rounded-xl w-full">
          Submit
        </button>
      </div>
    </div>
  );
}
