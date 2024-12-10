import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustumersService } from "../services/listCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomer = new ListCustumersService();

        const customer = await listCustomer.execute();

        reply.send(customer);
    };
};

export { ListCustomersController };