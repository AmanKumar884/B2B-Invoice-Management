import axios from "axios";
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/Hrc_back/FetchServlet");
    // console.log(response.data)
    return response.data;
}
// getData();