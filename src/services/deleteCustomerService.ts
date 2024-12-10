import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
};

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Solicitação enviada.");
        }

        const findCustomer = await prismaClient.costumer.findFirst({
            where: {
                id: id
            }
        });

        if (!findCustomer) {
            throw new Error("Cliente não existe!");
        } else {
            await prismaClient.costumer.delete({
                where: {
                    id: findCustomer.id
                }
            });
        };

        return { message: "Usuário deletado com sucesso!!" };
    };

};

export { DeleteCustomerService };