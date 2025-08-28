type Props = {
  blogPosts: BlogPost[];
};

export const BlogPosts = ({ blogPosts }: Props) => {
  return (
    <section className="my-container mt-20 lg:mt-[200px] lg:mb-[100px]">
      <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center mb-14">
        SHiFT Blog
      </h2>
      <div className="grid xl:grid-cols-3 gap-7 2xl:gap-14">
        {blogPosts?.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-3 p-5 bg-pure-white shadow-lg rounded-[20px] hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <div
              className="h-[200px] 2xl:h-[270px] rounded-xl"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <h3 className="text-xl 2xl:text-2xl font-bold font-gothic">
              {post.title}
            </h3>
            <p className="text-neutral-750">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
