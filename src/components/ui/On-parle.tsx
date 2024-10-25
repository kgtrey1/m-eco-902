import Image from "next/image"


const PressSection = () => {
  return (
    <div className="bg-[#f8f5f2] py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">On parle de nous</h2>
      <p className="mb-8 text-lg text-gray-600">
        Nos dernières parutions dans la presse et sur internet.
      </p>
      <div className="flex justify-center items-center space-x-8">
        {/* Replace these with actual images or logos */}
        <Image src="/logo-elle.webp" alt="ELLE" width={100} height={30} />
        <Image src="/logo-lemonde.webp" alt="Le Monde" width={120} height={30} />
        <Image src="/logo-vogue.webp" alt="Vogue" width={120} height={30} />
        <Image src="/logo-cntraveler.webp" alt="Traveler" width={150} height={30} />
        <Image src="/fou-patesserie.webp" alt="Fou de Pâtisserie" width={160} height={30} />
      </div>
    </div>
  );
};

export default PressSection;
