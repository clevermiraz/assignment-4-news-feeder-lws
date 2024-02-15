export default function RightSideNews({ rightSideArticles }) {
    return (
        <>
            <div className="col-span-12 self-start xl:col-span-4">
                <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                    {rightSideArticles.map((article, index) => (
                        <div className="col-span-12 md:col-span-8" key={index}>
                            {/* <!-- info --> */}
                            <div className="col-span-12 md:col-span-4">
                                <a href="#">
                                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                        {article?.title}
                                    </h3>
                                </a>
                                <p className="text-base text-[#292219]">
                                    {article?.description}
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    {article?.publishedAt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
