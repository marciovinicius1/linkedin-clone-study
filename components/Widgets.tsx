import { FiberManualRecordRounded, InfoRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";

export interface ArticlesProps {
  articles: ArticleProps[];
}
export interface ArticleProps {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {};
  title: string;
  url: string;
  urlToImage: string;
}

const Widgets: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className="hidden xl:inline space-y-2">
      {/* news */}
      <div
        className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border 
      border-gray-300 dark:border-none"
      >
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <InfoRounded className="h-5 w-5" />
        </div>

        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10
            dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRounded className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-sm mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ads */}
      <div
        className="bg-white dark:bg-[#1d2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border 
      border-gray-300 dark:border-none"
      >
        <div>
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="contain"
            priority
            alt="adsense image"
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
