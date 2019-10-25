import axios from 'axios'
const axios_show = () => axios({
    url: "http://106.12.79.128:1234/api/getproductlist?categoryid=1"
})
const axios_detail = (id) => axios({
    url: `http://106.12.79.128:1234/api/getproduct?productid=${id}`
})

export {axios_detail,axios_show}