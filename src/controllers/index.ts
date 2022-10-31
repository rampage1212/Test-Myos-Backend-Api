import prisma from '../config/prisma-client';

exports.getData = async(req: any, res: any) => {
    const {
        title,
        description,
        sort,
    } = req.query;
    try{
        let product;
        if(sort === '1'){
            product = await prisma.tbl_product.findMany({
                where: {
                    title: title,
                    description: description
                },
                orderBy: {
                    price: 'asc'
                }
            });
        }else{
            product = await prisma.tbl_product.findMany({
                where: {
                    title: title,
                    description: description
                }
            });
        }
        res.status(200).json({
            statusCode: 200,
            data: product
        });
    }catch(err: any){
        res.status(400).json({ message: err.message })
    }
}

exports.addData = async(req: any, res: any) => {
    const {
        title,
        description,
        pictureUrl,
        price
    } = req.query;
    try{
        const product = await prisma.tbl_product.create({
            data: {
                title: title,
                description: description,
                pictureUrl: pictureUrl,
                price: parseFloat(price)
            }
        });
        res.status(200).json({
            statusCode: 200,
            data: product
        });
    }catch(err: any){
        res.status(400).json({ message: err.message })
    }
}


// const generateRandom = () => {
//     return (Math.random() * (10 ** 6)).toFixed();
// }