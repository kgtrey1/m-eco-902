export default function FindUs() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-20">Où nous trouver ?</h2>

            <div className="flex flex-col md:flex-row justify-around md:items-center gap-6">
                <div className="w-full max-w-lg md:max-w-sm lg:max-w-xs">
                    <img 
                        src="/map.png" 
                        className="w-full h-auto rounded-xl object-cover shadow-lg aspect-[564/404]" 
                        alt="Chief"
                    />
                </div>
                <div className="flex flex-col gap-6 text-left sm:text-left">
                    <div>
                        <p className="font-semibold">Lugnac</p>
                        <p className="text-gray-600">4 rue Censier, Paris 7</p>
                    </div>
                    <div>
                        <p className="font-semibold">Aux Prés</p>
                        <p className="text-gray-600">Boulevard de l’Hôpital, Paris 15</p>
                    </div>
                    <div>
                        <p className="font-semibold">Le Chardenoux</p>
                        <p className="text-gray-600">15 rue du Jura, Paris 11</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-sm text-gray-500">Utilisateurs mobile: Cliquez sur nos adresses pour ouvrir un itinéraire</p>
            </div>
        </div>
    )
}
