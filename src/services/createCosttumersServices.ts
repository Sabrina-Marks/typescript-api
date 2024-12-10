import prismaClient from "../prisma";

interface CreateCustomerProsp {
    name: string,
    email: string
};

class CreateCostumerService {
    async execute({ name, email }: CreateCustomerProsp) {

        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        };

        const customer = await prismaClient.costumer.create({
            data: {
                name,
                email,
                Status: true
            }
        });
        return customer;
    };
};

export { CreateCostumerService };