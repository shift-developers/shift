type Props = {
  clients: Client[];
};

export const Clients = ({ clients }: Props) => (
  <section className="-mt-[200px] -z-[10]">
    <div className="px-5 lg:px-32 xl:px-48 bg-gradient-to-b from-dark-blue to-light-blue text-white pt-[300px] pb-[100px] lg:pt-[300px] lg:pb-[250px] relative">
      <div className="relative z-[1]">
        <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center mb-14 max-w-[740px] mx-auto">
          Shifting The Narrative: Real Stories About Mental Health
        </h2>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {clients.slice(0, 9).map((client) => (
            <div
              key={client.id}
              className="bg-[#C2C2C2]/20 rounded-[20px] p-5 lg:p-8 flex flex-col gap-2.5 text-white backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="size-14 xl:size-20 rounded-full bg-white"
                  style={{
                    backgroundImage: `url(${client.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                />
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-cyan-500 text-lg lg:text-2xl font-bold font-gothic">
                    {client.fullName}
                  </h3>
                  <p className="text-base lg:text-xl font-proxima font-bold">
                    {client.jobTitle}
                  </p>
                </div>
              </div>
              <p className="text-base lg:text-xl font-proxima">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/banner-bottom-vector.png"
        alt="shift"
        className="absolute bottom-0 left-0 right-0"
      />
    </div>
  </section>
);
