export default function ContactForm() {
    return (
        <section className="flex w-full bg-bg-chief lg:px-16 px-6 py-20">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
                <p className="text-lg my-6">
                    Pour toute réservation, nous vous invitions à contacter directement le restaurant par téléphone au +331 42 56 11 26.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nom / Prénom *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full p-2 border border-slate-900 rounded-[1px] shadow-sm focus:ring-slate-500 focus:border-slate-900 focus:outline-none bg-pastry"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Adresse e-mail *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full p-2 border border-slate-900 rounded-[1px] shadow-sm focus:ring-slate-500 focus:border-slate-900 focus:outline-none bg-pastry"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="mt-1 block w-full p-2 border border-slate-900 rounded-[1px] shadow-sm focus:ring-slate-500 focus:border-slate-900 focus:outline-none bg-pastry"
                        ></textarea>
                    </div> 
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-[1px] shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
      )
  }
  