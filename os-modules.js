const os=require("os")

const user=os.userInfo()
console.log(user)
console.log(os.uptime())

const currentOS ={
    name:os.release(),
    release :os.release(),
    totalMem :os.totalmem(),
    freeMem :os.freemem(),
    platform :os.platform(),
    architecture :os.arch(),
    type :os.type(),
    network :os.networkInterfaces()
}
console.log(currentOS)