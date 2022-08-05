import Image from "next/image";
import GradientButton from "./GradientButton";
import bannerImgDesktop from "../public/images/banner-image-desktop.png";
import bannerImgMobile from "../public/images/banner-image-mobile.png";

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

        <div className="mt-8 lg:hidden">
          <Image
            src={bannerImgMobile}
            layout="responsive"
            width={716}
            height={405}
            placeholder="blur"
            priority
          />
        </div>
        <div className="mt-8 hidden lg:mt-0 lg:block lg:overflow-hidden lg:rounded-lg">
          <Image
            src={bannerImgDesktop}
            layout="responsive"
            sizes="50vw"
            quality={100}
            width={2120}
            height={1774}
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </section>
  );
}
