import axios from "axios";
export const baseUrl = "http://hn.algolia.com/api/v1/search";
//export const paginationUrl = `${baseUrl}?page=${number}`;

const getStories = async () => {
    const response = await axios(`${baseUrl}?page=1`).then(({data}) => data);
    return response;
};

export default getStories;
