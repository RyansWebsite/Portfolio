import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";

export default function EasterEgg() {
  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Easter Egg" />

      <main className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto pb-16">
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl md:text-6xl font-bakbak text-lime mb-8 text-center">
            You found it!
          </h1>
          <p className="text-[#E0E0E0] font-bakbak text-xl md:text-2xl text-center mb-8">
            You discovered the hidden disc golf bag!
          </p>
          <div className="text-6xl md:text-8xl mb-8">
            🥏
          </div>
          <p className="text-[#C7C7C7] font-bakbak text-base md:text-lg text-center max-w-2xl mb-8">
            Disc golf is one of my favorite hobbies. Thanks for exploring the site and finding this secret page!
          </p>
          <img
            src="/images/EggtoOmletteGif.gif"
            alt="Egg to Omelette"
            className="w-64 md:w-80 lg:w-96 rounded-2xl"
          />
        </div>
      </main>
    </div>
  );
}
