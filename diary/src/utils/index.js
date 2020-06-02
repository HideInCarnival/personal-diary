import { parse } from 'query-string'

export function analysisQuery(location, key) {
    return parse(location.search);
};

export function getDate() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    return `${year}年${month}月${date}日`
}