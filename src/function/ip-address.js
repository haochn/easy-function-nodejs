const
    os = require("os"),
    networkInterfaces = os.networkInterfaces();
const ipAddress = () => {
    /**
     * 获取电脑ip地址
     * @returns {array} {ip_address} ip地址
    */
    let ip_address = [];
    for (let i in networkInterfaces) {
        networkInterfaces[i].forEach(element => {
            if (element.family === "IPv4" && element.address !== "127.0.0.1") {
                ip_address.push(element.address);
            }
        });
    }
    //todo 如果没有局域网或外网地址，返回回环地址。
    return ip_address.length > 0 ? ip_address : "127.0.0.1";
}

module.exports = ipAddress;