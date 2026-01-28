import SectionHeading from '../components/SectionHeading';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: 'Technology',
      publish_date: '2026-01-20',
      title: 'There are countless versions of lorem ipsum, the most famous.',
      description:
        'Discover how AI is changing the landscape of web development, making it faster and smarter.',
      image: '/images/blog/bloog_1.png',
      postBy: { name: 'John Doe' },
    },
    {
      id: 2,
      category: 'Design',
      publish_date: '2026-01-18',
      title: 'UI/UX Trends in 2026',
      description:
        'Explore the latest UI/UX trends and how they impact user experience across apps and websites.',
      image: '/images/blog/bloog_2.png',
      postBy: { name: 'Jane Smith' },
    },
    {
      id: 3,
      category: 'Programming',
      publish_date: '2026-01-15',
      title: 'Top JavaScript Frameworks',
      description:
        'A complete guide to the top JavaScript frameworks to use in your next project.',
      image: '/images/blog/bloog_3.png',
      postBy: { name: 'Alice Johnson' },
    },
    {
      id: 4,
      category: 'Business',
      publish_date: '2026-01-12',
      title: 'Startup Growth Strategies',
      description:
        'Learn essential strategies to scale your startup successfully in 2026.',
      image: '/images/blog/bloog_4.png',
      postBy: { name: 'Bob Williams' },
    },
    {
      id: 5,
      category: 'Business',
      publish_date: '2026-01-12',
      title: 'Startup Growth Strategies',
      description:
        'Learn essential strategies to scale your startup successfully in 2026.',
      image: '/images/blog/bloog_4.png',
      postBy: { name: 'Bob Williams' },
    },
    {
      id: 6,
      category: 'Business',
      publish_date: '2026-01-12',
      title: 'Startup Growth Strategies',
      description:
        'Learn essential strategies to scale your startup successfully in 2026.',
      image: '/images/blog/bloog_4.png',
      postBy: { name: 'Bob Williams' },
    },
  ];

  return (
    <div className="relative w-[1920px] max-w-full bg-[url('/images/main_bg.png')] bg-cover bg-center bg-no-repeat mx-auto">
      <div className="w-330 max-w-full mx-auto">
        <div className="flex flex-col px-6 md:px-10 lg:px-20 gap-6 bg-[#171B1A]">
          <SectionHeading title="Blog" align="left">
            <div className="w-full">
              <section className="max-w-6xl mx-auto ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  justify-center">
                  {blogs.map((blog, index) => (
                    <div
                      key={blog.id}
                      className={`bg-[#000000] shadow-md overflow-hidden flex flex-col
                        ${index % 2 === 0 ? 'w-[332px] h-[566px]' : 'w-[332px] h-[486px]'}
                        ${index === 3 ? '-mt-[40px]' : 'mb-10'}
                        ${index === 5 ? '-mt-[120px]' : '-mb-10'}
                      `}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full object-cover flex-shrink-0"
                      />
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex gap-2 pt-4">
                          <span className="text-[12px] text-[#747474] font-semibold mb-2">
                            {blog.category}
                          </span>
                          <span className="text-[#747474] text-[12px]">|</span>
                          <span className="text-[12px] text-[#747474] font-semibold mb-2">
                            {blog.publish_date}
                          </span>
                        </div>
                        <h3 className="text-[18px] lg:w-[300px] font-bold mb-2">
                          {blog.title}
                        </h3>
                        <p className="text-[#979797] text-[14px] font-medium mb-4">
                          {blog.description}
                        </p>
                        <div className="flex items-center mt-auto">
                          <div>
                            <p className="text-[14px] text-white font-medium pb-8">
                              {blog.postBy.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Blog;
