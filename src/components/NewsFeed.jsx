import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";

export default function NewsFeed({ allNews }) {
    if (!allNews) {
        return <div>Loading...</div>;
    }

    // left side Main article will have title, content, publishedAt, urlToImage, author
    const leftSideArticles = allNews.filter(
        (article) => article.urlToImage
    );

    const rightSideArticles = allNews.filter(
        (article) => !article.urlToImage
    );

    return (
        <>
            <div className="container mx-auto grid grid-cols-12 gap-8">
                {/* <!-- left --> */}
                <LeftSideNews leftSideArticles={leftSideArticles} />

                {/* <!-- right --> */}
                <RightSideNews rightSideArticles={rightSideArticles} />
            </div>
        </>
    );
}
