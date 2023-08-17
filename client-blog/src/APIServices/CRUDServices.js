import axios from 'axios';

export const Create = (productName, productCode, productImage, unitPrice, quantity, totalPrice) => {
    const url = "/api/v1/createProduct";
    const postBody = {
        productName: productName,
        productCode: productCode,
        productImage: productImage,
        unitPrice: unitPrice,
        quantity: quantity,
        totalPrice: totalPrice

    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => {
            console.log(error);
            return false;
        })
};

export const Read = () => {
    const url = "https://blog-mern-steel.vercel.app/api/v1/readProduct";
    return axios.get(url)
        .then(res => {
            if (res.status === 200) {
                return res.data['data'];
            } else {
                return false;
            }
        })
        .catch(error => {
            console.log(error);
            return false;
        });
};


export const Update = (id) => {
    const url = "/api/v1/updateProduct/" + id;
    const postBody = {
        productName: productName,
        productCode: productCode,
        productImage: productImage,
        unitPrice: unitPrice,
        quantity: quantity,
        totalPrice: totalPrice

    }
    return axios.post(url, postBody)
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        }).catch(error => {
            console.log(error);
            return false;
        });

}


export const Delete = (id) => {
    const url = "https://blog-mern-steel.vercel.app/api/v1/deleteProduct/" + id;
    return axios.get(url)
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => {
            console.log(error);
            return false;
        });
}