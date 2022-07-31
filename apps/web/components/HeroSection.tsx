import GradientButton from "./GradientButton";

export default function HeroSection() {
  return (
    <section className="bg-zinc-800 py-7 lg:pb-10">
      <div className="container lg:grid lg:grid-cols-2 lg:justify-center xl:gap-x-24">
        <div className="lg:self-center">
          <h1 className="text-center text-4xl font-bold lg:text-left xl:text-5xl">
            Rapidly build your website with ready to use templates
          </h1>
          <p className="mt-4 text-center text-slate-400 md:px-10 lg:px-0 lg:text-left xl:mt-5 xl:text-lg">
            Themplate bhai is an open source initiative. We create beautiful
            templates and provide them free of charge to anyone who needs it.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start xl:mt-10">
            <GradientButton url="/templates" text="Browse Templates" />
          </div>
        </div>

        <img
          className="mt-8 lg:hidden"
          src="/images/banner-image-mobile.png"
          alt=""
        />
        <img
          className="mt-8 hidden lg:mt-0 lg:block"
          src="/images/banner-image-desktop.png"
          alt=""
        />
      </div>
    </section>
  );
}
