import * as actionTypes from './actionTypes';

export function addArticle(articles: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    articles,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(articles: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    articles,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
