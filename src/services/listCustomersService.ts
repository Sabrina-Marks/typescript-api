import prismaClient from "../prisma";

class ListCustumersService {
    async execute() {

        const customer = await prismaClient.costumer.findMany();

        return customer;
    };
};

export { ListCustumersService };