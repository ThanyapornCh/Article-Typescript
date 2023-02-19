interface IArticle {
  id: number;
  title: string;
  body: string;
}
type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  articles: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
