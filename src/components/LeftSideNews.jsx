export default function LeftSideNews({ leftSideArticles }) {
    return (
        <>
            <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
                {/* <!-- news item --> */}
                {leftSideArticles.map((article, index) => (
                    <div
                        className="col-span-12 grid grid-cols-12 gap-4"
                        key={index}
                    >
                        {/* <!-- info --> */}
                        <div className="col-span-12 lg:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                    {article?.title}
                                </h3>
                            </a>
                            <p className="text-base text-[#5C5955]">
                                {article?.content || article?.description}
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                {article?.publishedAt}
                            </p>
                        </div>
                        {/* <!-- thumb --> */}
                        <div className="col-span-12 lg:col-span-8">
                            <img
                                className="w-full"
                                src={article?.urlToImage}
                                alt="thumb"
                            />
                            <p className="mt-5 text-base text-[#5C5955]">
                                Illustration: {article?.author}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
