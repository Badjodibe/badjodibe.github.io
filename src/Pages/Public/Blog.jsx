import PostArticleList from "./PostArticleListe";

export default function Blog(){

    return(
        <>
        <div className="bg-gray-100 py-8 mt-15 dark:bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl  font-bold text-gray-800 mb-4  dark:text-white">
              Explorez mes articles.
            </h2>
          </div>
        </div>

        <div>
          <PostArticleList/>
        </div>
    </>
    )
    
}