import React from "react";

function BlankHome() {
  return (
    <main className="  flex flex-col mt-0 pt-0 gap-1 w-full bg-slate-200 h-[740px]">
      <section className="w-full flex justify-center mt-28">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6fb24956e2258f1880a80bbb0fdc4ad96a900f745c8c5afe2843ee788fdbd57?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          className="w-full aspect-[2] max-w-[500px] "
          alt="Descriptive text about the image"
        />
      </section>
      <header className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-wider text-black">
          Pocket Notes
        </h1>
      </header>
      <div className="text-2xl font-medium   text-zinc-800 text-center">
        Send and receive messages without keeping your phone online.
        <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </div >
      <div className="flex mt-48 justify-center  ">End to End Encryption</div>
    </main>
  );
}

export default BlankHome;
